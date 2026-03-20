const DEFAULT_ALLOWED_ORIGINS = ['https://intranet.solecolombia.org', 'http://localhost:3000'];
const AUTH_PATHS = new Set(['/auth', '/auth/v2']);
const CALLBACK_PATHS = new Set(['/callback', '/callback/v2']);

/** @typedef {{ CMS_LOGIN_USER?: string, CMS_LOGIN_PASSWORD?: string, CMS_GITHUB_TOKEN?: string, ALLOWED_ORIGINS?: string, CMS_USERS?: string }} Env */

/** @param {string} value */
function normalizeOrigin(value) {
  if (!value) return null;
  try {
    const url = new URL(value);
    return `${url.protocol}//${url.host}`;
  } catch {
    return null;
  }
}

/** @param {Env} env */
function parseAllowedOrigins(env) {
  const raw = (env.ALLOWED_ORIGINS || '').trim();
  if (!raw) return DEFAULT_ALLOWED_ORIGINS;
  const parsed = raw
    .split(',')
    .map((item) => normalizeOrigin(item.trim()))
    .filter(Boolean);
  return parsed.length > 0 ? parsed : DEFAULT_ALLOWED_ORIGINS;
}

/**
 * Parse multi-user list from CMS_USERS secret (JSON array).
 * Falls back to single-user CMS_LOGIN_USER + CMS_LOGIN_PASSWORD.
 * @param {Env} env
 * @returns {{ user: string, password: string, name?: string, role?: string }[]}
 */
function parseUsers(env) {
  // Try multi-user JSON first
  if (env.CMS_USERS) {
    try {
      const parsed = JSON.parse(env.CMS_USERS);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.filter(
          (entry) => typeof entry.user === 'string' && typeof entry.password === 'string',
        );
      }
    } catch {
      // Invalid JSON, fall through to single-user
    }
  }

  // Fallback: single-user (backward compatible)
  const user = (env.CMS_LOGIN_USER || '').trim();
  const password = (env.CMS_LOGIN_PASSWORD || '').trim();
  if (user && password) {
    return [{user, password, name: user, role: 'editor'}];
  }

  return [];
}

/**
 * Compare strings in fixed-time style to reduce timing leaks.
 * @param {string} left
 * @param {string} right
 */
function constantTimeEqual(left, right) {
  const encoder = new TextEncoder();
  const a = encoder.encode(left);
  const b = encoder.encode(right);
  const maxLen = Math.max(a.length, b.length);

  let mismatch = a.length ^ b.length;
  for (let i = 0; i < maxLen; i += 1) {
    mismatch |= (a[i] || 0) ^ (b[i] || 0);
  }
  return mismatch === 0;
}

function noStoreHeaders(contentType = 'text/html; charset=utf-8') {
  return {
    'content-type': contentType,
    'cache-control': 'no-store, no-cache, must-revalidate, max-age=0',
    pragma: 'no-cache',
    expires: '0',
    'x-content-type-options': 'nosniff',
    'x-frame-options': 'DENY',
    'referrer-policy': 'same-origin',
  };
}

/** @param {string} input */
function escapeHtml(input) {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

/**
 * @param {{ errorText?: string, origin: string, provider: string, authPath: string }} args
 */
function renderLoginPage({errorText, origin, provider, authPath}) {
  const errorBanner = errorText
    ? `<p style="background:#fee2e2;color:#991b1b;padding:10px;border-radius:8px;">${escapeHtml(errorText)}</p>`
    : '';

  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Ingreso Intranet SOLE</title>
    <style>
      :root {
        --voltaje-accent: #fbfc04;
        --voltaje-dark: #000000;
        --voltaje-light: #ffffff;
        --voltaje-text: #333333;
        color-scheme: light;
      }
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        background-color: var(--voltaje-dark);
        background-image: radial-gradient(var(--voltaje-accent) 1px, transparent 1px);
        background-size: 30px 30px;
        font-family: system-ui, -apple-system, sans-serif;
      }
      .card {
        width: min(440px, calc(100vw - 40px));
        background: var(--voltaje-light);
        border: 4px solid var(--voltaje-dark);
        border-radius: 0px;
        box-shadow: 12px 12px 0 var(--voltaje-accent);
        padding: 40px 30px;
        text-align: center;
      }
      .logo { 
        height: 60px; 
        margin-bottom: 24px;
        background: var(--voltaje-dark);
        padding: 10px;
        border-radius: 4px;
      }
      h1 { 
        margin: 0 0 8px; 
        font-size: 1.8rem; 
        color: var(--voltaje-dark); 
        text-transform: uppercase;
        font-weight: 900;
      }
      p { 
        color: var(--voltaje-text); 
        margin: 0 0 24px; 
        font-size: 1.1rem;
      }
      label { 
        display: block; 
        margin: 16px 0 8px; 
        font-weight: 700; 
        color: var(--voltaje-dark);
        text-align: left;
        text-transform: uppercase;
        font-size: 0.9rem;
      }
      input {
        width: 100%;
        padding: 14px 16px;
        border: 2px solid var(--voltaje-dark);
        border-radius: 0px;
        box-sizing: border-box;
        font-size: 1rem;
        background: #f8f8f8;
      }
      input:focus {
        outline: none;
        background: var(--voltaje-light);
        border-color: var(--voltaje-accent);
      }
      button {
        margin-top: 32px;
        width: 100%;
        padding: 16px 20px;
        border: 3px solid var(--voltaje-dark);
        border-radius: 0px;
        background: var(--voltaje-accent);
        color: var(--voltaje-dark);
        font-weight: 900;
        font-size: 1.2rem;
        text-transform: uppercase;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      button:hover { 
        transform: translate(-4px, -4px);
        box-shadow: 6px 6px 0 var(--voltaje-dark);
      }
      .note {
        margin-top: 24px;
        font-size: 0.85rem;
        color: #666;
        font-weight: 500;
      }
    </style>
  </head>
  <body>
    <main class="card">
      <img class="logo" src="https://cdn.prod.website-files.com/6050c5e23e5cf1cbe505d4b5/60956ffd9887014318c00ca9_SOLE-Logo_Color-Blanco-Abr19.png" alt="SOLE Colombia" />
      <h1>Manuales SOLE</h1>
      <p>La fuente de la verdad para nuestro equipo.</p>
      ${errorBanner}
      <form method="post" action="${escapeHtml(authPath)}">
        <input type="hidden" name="origin" value="${escapeHtml(origin)}" />
        <input type="hidden" name="provider" value="${escapeHtml(provider)}" />

        <label for="username">Correo</label>
        <input id="username" name="username" type="email" autocomplete="username" placeholder="tu@solecolombia.org" required />

        <label for="password">Clave</label>
        <input id="password" name="password" type="password" autocomplete="current-password" required />

        <button type="submit">Ingresar</button>
      </form>
      <p class="note">Acceso restringido a equipo SOLE Colombia autorizado.</p>
    </main>
  </body>
</html>`;
}

/**
 * @param {{ origin: string, provider: string, token: string }} args
 */
function renderSuccessPopup({origin, provider, token}) {
  const targetOrigin = JSON.stringify(origin);
  const providerValue = JSON.stringify(provider);
  const payload = JSON.stringify({token, provider});
  const payloadLiteral = JSON.stringify(payload);

  return `<!doctype html>
<html lang="es"><body>
<script>
  (function () {
    var target = ${targetOrigin};
    var provider = ${providerValue};
    var payload = ${payloadLiteral};

    if (window.opener) {
      try {
        window.opener.postMessage('authorizing:' + provider, target);
        window.opener.postMessage('authorization:' + provider + ':success:' + payload, target);
        window.opener.postMessage({type: 'authorization_success', provider: provider}, target);
      } catch (_) {}
    }

    window.close();
  })();
</script>
<p>Login exitoso. Si esta ventana no se cierra, ciérrala manualmente.</p>
</body></html>`;
}

/** @param {Request} request @param {Env} env */
async function handleGetAuth(request, env) {
  const allowedOrigins = parseAllowedOrigins(env);
  const url = new URL(request.url);

  const queryOrigin = normalizeOrigin(url.searchParams.get('origin') || '');
  const origin = queryOrigin && allowedOrigins.includes(queryOrigin) ? queryOrigin : allowedOrigins[0];
  const provider = (url.searchParams.get('provider') || 'github').toLowerCase();

  return new Response(renderLoginPage({origin, provider, authPath: url.pathname}), {
    status: 200,
    headers: noStoreHeaders(),
  });
}

/** @param {Request} request @param {Env} env */
async function handlePostAuth(request, env) {
  const url = new URL(request.url);
  const form = await request.formData();
  const username = String(form.get('username') || '').trim().toLowerCase();
  const password = String(form.get('password') || '');
  const provider = String(form.get('provider') || 'github').toLowerCase();

  const allowedOrigins = parseAllowedOrigins(env);
  const requestedOrigin = normalizeOrigin(String(form.get('origin') || ''));
  const origin = requestedOrigin && allowedOrigins.includes(requestedOrigin)
    ? requestedOrigin
    : allowedOrigins[0];

  const users = parseUsers(env);
  const githubToken = (env.CMS_GITHUB_TOKEN || '').trim();

  if (users.length === 0 || !githubToken) {
    return new Response(
      'Configuracion incompleta. El administrador debe configurar CMS_USERS (o CMS_LOGIN_USER + CMS_LOGIN_PASSWORD) y CMS_GITHUB_TOKEN.',
      {status: 500, headers: noStoreHeaders('text/plain; charset=utf-8')},
    );
  }

  // Find matching user (constant-time compare for security)
  let matched = false;
  for (const entry of users) {
    const userMatch = constantTimeEqual(username, entry.user.toLowerCase());
    const passMatch = constantTimeEqual(password, entry.password);
    if (userMatch && passMatch) {
      matched = true;
      break;
    }
  }

  if (!matched) {
    // Delay to slow brute-force
    await new Promise((resolve) => setTimeout(resolve, 750));

    return new Response(renderLoginPage({
      origin,
      provider,
      authPath: url.pathname,
      errorText: 'Correo o clave inválidos.',
    }), {
      status: 401,
      headers: noStoreHeaders(),
    });
  }

  return new Response(
    renderSuccessPopup({origin, provider, token: githubToken}),
    {status: 200, headers: noStoreHeaders()},
  );
}

/** @param {Request} request */
function handleHealth(request) {
  const url = new URL(request.url);
  const body = JSON.stringify({ok: true, service: 'intranet-auth-worker', path: url.pathname});
  return new Response(body, {
    status: 200,
    headers: noStoreHeaders('application/json; charset=utf-8'),
  });
}

/**
 * GET /token-status
 * Checks the configured CMS_GITHUB_TOKEN against GitHub API and returns
 * validity, scopes, rate limits, and associated user info.
 * @param {Request} request
 * @param {Env} env
 */
async function handleTokenStatus(request, env) {
  const githubToken = (env.CMS_GITHUB_TOKEN || '').trim();

  if (!githubToken) {
    return new Response(
      JSON.stringify({ok: false, error: 'CMS_GITHUB_TOKEN no esta configurado.'}),
      {status: 500, headers: noStoreHeaders('application/json; charset=utf-8')},
    );
  }

  try {
    const ghResponse = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `token ${githubToken}`,
        Accept: 'application/vnd.github+json',
        'User-Agent': 'sole-intranet-auth-worker',
      },
    });

    const rateLimit = {
      limit: ghResponse.headers.get('x-ratelimit-limit'),
      remaining: ghResponse.headers.get('x-ratelimit-remaining'),
      reset: ghResponse.headers.get('x-ratelimit-reset'),
      reset_date: ghResponse.headers.get('x-ratelimit-reset')
        ? new Date(Number(ghResponse.headers.get('x-ratelimit-reset')) * 1000).toISOString()
        : null,
    };

    const scopes = ghResponse.headers.get('x-oauth-scopes') || '(none)';

    if (!ghResponse.ok) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: `Token invalido o expirado. GitHub devolvio HTTP ${ghResponse.status}.`,
          token_valid: false,
          scopes,
          rate_limit: rateLimit,
        }),
        {status: 200, headers: noStoreHeaders('application/json; charset=utf-8')},
      );
    }

    const ghUser = await ghResponse.json();

    // Check repo access
    let repoAccess = 'desconocido';
    try {
      const repoResponse = await fetch('https://api.github.com/repos/SOLE-Colombia/sole-manuales', {
        headers: {
          Authorization: `token ${githubToken}`,
          Accept: 'application/vnd.github+json',
          'User-Agent': 'sole-intranet-auth-worker',
        },
      });
      repoAccess = repoResponse.ok ? 'si' : 'no';
    } catch {
      repoAccess = 'error verificando';
    }

    return new Response(
      JSON.stringify({
        ok: true,
        token_valid: true,
        github_user: ghUser.login,
        github_name: ghUser.name || '(sin nombre)',
        scopes,
        repo_access: repoAccess,
        rate_limit: rateLimit,
        note: 'Si el token es un Fine-grained Personal Access Token, los scopes pueden aparecer vacios. Revisa los permisos en github.com/settings/tokens.',
      }),
      {status: 200, headers: noStoreHeaders('application/json; charset=utf-8')},
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ok: false, error: `Error al consultar GitHub: ${err.message}`}),
      {status: 500, headers: noStoreHeaders('application/json; charset=utf-8')},
    );
  }
}

/**
 * GET /users — List configured users (names and roles only, no passwords).
 * @param {Env} env
 */
function handleListUsers(env) {
  const users = parseUsers(env);
  const safeList = users.map(({user, name, role}) => ({user, name: name || user, role: role || 'editor'}));
  return new Response(
    JSON.stringify({ok: true, count: safeList.length, users: safeList}),
    {status: 200, headers: noStoreHeaders('application/json; charset=utf-8')},
  );
}

/** @type {ExportedHandler<Env>} */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, {status: 204, headers: noStoreHeaders()});
    }

    if (url.pathname === '/healthz') {
      return handleHealth(request);
    }

    if (url.pathname === '/token-status' && request.method === 'GET') {
      return handleTokenStatus(request, env);
    }

    if (url.pathname === '/users' && request.method === 'GET') {
      return handleListUsers(env);
    }

    if (AUTH_PATHS.has(url.pathname) && request.method === 'GET') {
      return handleGetAuth(request, env);
    }

    if (AUTH_PATHS.has(url.pathname) && request.method === 'POST') {
      return handlePostAuth(request, env);
    }

    if (CALLBACK_PATHS.has(url.pathname)) {
      return new Response(
        'Este Worker usa /auth directamente (no necesita callback OAuth).',
        {status: 200, headers: noStoreHeaders('text/plain; charset=utf-8')},
      );
    }

    return new Response('Not Found', {
      status: 404,
      headers: noStoreHeaders('text/plain; charset=utf-8'),
    });
  },
};

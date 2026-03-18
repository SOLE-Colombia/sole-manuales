# Intranet SOLE (Docusaurus)

Intranet y fuente de la verdad del equipo SOLE Colombia, publicada en `intranet.solecolombia.org`.

- Portal: `https://intranet.solecolombia.org`
- Repositorio: `https://github.com/SOLE-Colombia/sole-manuales`
- Editor CMS: `https://intranet.solecolombia.org/admin/`

## Equipo y roles

| Rol | Persona | Sección |
|-----|---------|---------|
| Cuentera / Storyteller | Natalia Torres | `docs/cuentera-storyteller/` |
| Maestre de la construcción | Julian Ruíz | `docs/maestre-construccion/` |
| Jardinera de proyectos | Ana Caro Alonso | `docs/jardinera-proyectos/` |
| Arquitecta de futuros | Isabel Tafur | `docs/arquitecta-futuros/` |
| Investigador | Daniel Martínez | `docs/investigador/` |
| Artista de datos | Mateo Moreno | `docs/artista-datos/` |
| Fundador Tenaz | Sanjay Fernandes | `docs/fundador-tenaz/` |
| Polo a Tierra | Lizeth Naranjo | `docs/polo-a-tierra/` |
| Estratega sole voltaje | Catalina Ramírez | `docs/estratega-sole-voltaje/` |
| Anarqueologo de los medios | David Vega | `docs/anarqueologo-medios/` |

Además:
- `docs/cacharrero/`: documentación técnica de la plataforma.
- `docs/legacy/`: histórico no operativo.

## Requisitos

- Node.js 20+
- npm 10+
- Git

## Desarrollo local

```bash
npm ci
npm run start
```

El sitio queda disponible en `http://localhost:3000`.

## Build y validación

```bash
npm run check
```

## Edición online (Decap CMS)

- URL: `https://intranet.solecolombia.org/admin/`
- Configuración: `static/admin/config.yml`
- Auth: correo + clave via Worker (`workers/cms-auth/`).
- Guía: `docs/cacharrero/cms-usuario-clave.md`.

## Autenticación del CMS

El Worker de autenticación soporta **múltiples usuarios** con correo y clave.

- Los usuarios se configuran como secreto cifrado `CMS_USERS` en Cloudflare.
- Los secretos **no están en el repositorio**.
- Guía completa: `docs/cacharrero/cms-usuario-clave.md`.

Endpoints del Worker:

| Endpoint | Función |
|----------|---------|
| `/healthz` | Health check |
| `/token-status` | Ver estado del token GitHub |
| `/users` | Listar usuarios (sin claves) |
| `/auth/v2` | Login |

## Deploy

- Workflow: `.github/workflows/deploy-pages.yml`
- Dominio: `intranet.solecolombia.org`
- CNAME: `intranet → SOLE-Colombia.github.io`
- Auth Worker: `auth.intranet.solecolombia.org`

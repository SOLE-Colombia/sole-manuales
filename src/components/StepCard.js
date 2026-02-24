"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = StepCard;
function StepCard(_a) {
    var number = _a.number, title = _a.title, children = _a.children;
    return (<section className="manual-step">
      <h3>
        Paso {number}: {title}
      </h3>
      <div>{children}</div>
    </section>);
}

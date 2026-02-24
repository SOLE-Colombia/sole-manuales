"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TroubleshootBox;
function TroubleshootBox(_a) {
    var _b = _a.title, title = _b === void 0 ? 'Si falla, haz esto' : _b, children = _a.children;
    return (<aside className="manual-warning">
      <strong>{title}</strong>
      <div>{children}</div>
    </aside>);
}

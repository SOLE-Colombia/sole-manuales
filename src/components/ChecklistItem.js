"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChecklistItem;
var react_1 = require("react");
function ChecklistItem(_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(false), checked = _b[0], setChecked = _b[1];
    var id = (0, react_1.useId)();
    return (<label className="manual-check" htmlFor={id}>
      <input id={id} type="checkbox" checked={checked} onChange={function () { return setChecked(!checked); }}/>
      <span>{children}</span>
    </label>);
}

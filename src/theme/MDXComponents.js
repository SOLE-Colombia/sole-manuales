"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var MDXComponents_1 = require("@theme-original/MDXComponents");
var ChecklistItem_1 = require("@site/src/components/ChecklistItem");
var StepCard_1 = require("@site/src/components/StepCard");
var TroubleshootBox_1 = require("@site/src/components/TroubleshootBox");
var components = __assign(__assign({}, MDXComponents_1.default), { ChecklistItem: ChecklistItem_1.default, StepCard: StepCard_1.default, TroubleshootBox: TroubleshootBox_1.default });
exports.default = components;

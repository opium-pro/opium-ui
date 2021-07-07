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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { Fit, Gap } from 'themeor';
export function LimitWidth(_a) {
    var children = _a.children, _b = _a.gutter, gutter = _b === void 0 ? 'x3l' : _b, rest = __rest(_a, ["children", "gutter"]);
    return (React.createElement(Gap, __assign({ style: {
            padding: '0 60px',
        } }, rest),
        React.createElement(Fit, { minWidth: "860px", maxWidth: "1200px", style: { margin: "0 auto" } }, children)));
}

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
import { Align, Fit, Font, Gap, Icon } from 'themeor';
import { MakeButton } from '../make-button';
export function Item(_a) {
    var label = _a.label, active = _a.active, icon = _a.icon, rest = __rest(_a, ["label", "active", "icon"]);
    return (React.createElement(MakeButton, __assign({ offset: "0", radius: "none" }, rest),
        React.createElement(Fit.TryTagless, { width: "100%" },
            React.createElement(Gap.TryTagless, { hor: "xs", vert: "md" },
                React.createElement(Align, { hor: "center" },
                    React.createElement(Icon, { name: icon || "Placeholder", fill: active ? "complement" : "base" }),
                    React.createElement(Gap, { size: "x2s" }),
                    React.createElement(Font, { align: "center", size: "x2s", noselect: true }, label))))));
}

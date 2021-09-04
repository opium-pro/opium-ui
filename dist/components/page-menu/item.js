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
import { Align, Fit, Font, Gap } from 'themeor';
import { MakeButton } from '../make-button';
import { Counter } from '../counter';
import { Link } from 'react-router-dom';
export default function (_a) {
    var label = _a.label, active = _a.active, icon = _a.icon, counter = _a.counter, link = _a.link, rest = __rest(_a, ["label", "active", "icon", "counter", "link"]);
    return (React.createElement(Link, { to: link },
        React.createElement(MakeButton, __assign({ offset: "0", disabled: active }, rest),
            React.createElement(Fit.TryTagless, { width: "100%", height: "42px" },
                React.createElement(Gap.TryTagless, { hor: "md" },
                    React.createElement(Align, { row: true, gapHor: "xs", vert: "center" },
                        React.createElement(Font, { nowrap: true, align: "center", size: "xs", noselect: true, fill: active ? "base" : "faint-down", weight: active ? "600" : "500" }, label),
                        !!counter && React.createElement(Counter, { attention: true, value: counter })))))));
}

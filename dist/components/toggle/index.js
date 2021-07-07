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
import { Align, Fit, Box, Gap, Icon, Reaction } from 'themeor';
export var Toggle = function (_a) {
    var checked = _a.checked, label = _a.label, onChange = _a.onChange, props = __rest(_a, ["checked", "label", "onChange"]);
    function handleChange() {
        onChange && onChange(!checked);
    }
    return (React.createElement(Reaction, __assign({ track: "hover" }, props), function (rProps, r) { return (React.createElement(Align, { hor: "left" },
        React.createElement(Align, __assign({ row: true, vert: "center" }, rProps, { onClick: handleChange }),
            React.createElement(Fit.TryTagless, { height: "20px", width: "36px" },
                React.createElement(Box.TryTagless, { strong: checked, fill: (checked && "success") || (r.hoverOrFocus ? "faint-up" : "faint"), radius: "max" },
                    React.createElement(Gap, { size: "x3s" },
                        React.createElement(Fit.TryTagless, { width: "16px", height: "16px", left: checked && '16px' },
                            React.createElement(Box, { fill: "base", radius: "max", shadow: "sm" }, checked && React.createElement(Icon, { name: "Check", size: "sm", fill: "success", line: false })))))),
            label && React.createElement(Gap, { size: "xs" }),
            label))); }));
};

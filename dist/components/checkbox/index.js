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
import React, { useEffect } from 'react';
import { Align, Fit, Box, Font, Gap, Reaction, Effect } from 'themeor';
import { MakeButton } from '../make-button';
import { withForm } from '../form';
export var Checkbox = withForm(function (_a) {
    var name = _a.name, value = _a.value, checked = _a.checked, multiple = _a.multiple, label = _a.label, onChange = _a.onChange, props = __rest(_a, ["name", "value", "checked", "multiple", "label", "onChange"]);
    useEffect(function () {
        if (checked === undefined && name !== undefined) {
            checked = (name === value);
        }
    });
    function handleChange(event) {
        var isOn = event.target.value === 'on';
        onChange && onChange(isOn ? (name || true) : false);
    }
    return (React.createElement(Reaction, __assign({ cursor: "pointer" }, props), function (rProps, r) { return (React.createElement(Fit, __assign({}, rProps),
        React.createElement(Align.TryTagless, { row: true, vert: "center" },
            React.createElement("label", null,
                React.createElement(MakeButton, { radius: "max", offset: "14px", track: ["hover", "active"] },
                    React.createElement(Fit.TryTagless, { maxWidth: "0", maxHeight: "0", clip: true },
                        React.createElement(Effect, { transparency: "max" },
                            React.createElement("input", { value: !!checked ? 'on' : 'off', type: "checkbox", onChange: handleChange }))),
                    React.createElement(Fit.TryTagless, { width: "20px", height: "20px" },
                        React.createElement(Box.TryTagless, { radius: "max", borderFill: checked ? "complement" : "faint-up", fill: "none" },
                            React.createElement(Align, { vert: "center", hor: "center", style: { transition: "all 0.2s ease" } }, !!checked && (React.createElement(Fit.TryTagless, { width: "8px", height: "8px" },
                                React.createElement(Box, { radius: "max", fill: "complement", strong: true }))))))),
                label && (React.createElement(React.Fragment, null,
                    React.createElement(Gap, { size: "sm" }),
                    React.createElement(Font, { size: "sm", fill: "base", weight: "400" }, label))))))); }));
});

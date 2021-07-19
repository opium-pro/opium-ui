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
import { forwardRef } from 'react';
import { Gap, Box, Align, Font, Fit, Reaction } from 'themeor';
import newId from 'themeor/dist/utils/new-id';
import { withForm } from '../form';
export var TextInput = withForm(forwardRef(function (_a, ref) {
    var _b = _a.type, type = _b === void 0 ? "text" : _b, _c = _a.height, height = _c === void 0 ? "50px" : _c, valueFont = _a.valueFont, label = _a.label, value = _a.value, placeholder = _a.placeholder, onChange = _a.onChange, onFocus = _a.onFocus, id = _a.id, props = __rest(_a, ["type", "height", "valueFont", "label", "value", "placeholder", "onChange", "onFocus", "id"]);
    var fieldId = id || newId();
    var inputRef;
    function handleChange(event) {
        var value = event.target.value;
        onChange && onChange(value);
    }
    function handleFocus(event) {
        onFocus && onFocus(event);
        if (!inputRef) {
            return;
        }
        inputRef.focus();
    }
    function handleBlur() {
        if (!inputRef) {
            return;
        }
        inputRef.blur();
    }
    function handleRef(fRef) {
        if (!fRef) {
            return;
        }
        inputRef = fRef;
    }
    return (React.createElement(Reaction, __assign({ cursor: "text", onFocus: handleFocus, onBlur: handleBlur }, props), function (rProps, r) { return (React.createElement(Fit.TryTagless, { height: height },
        React.createElement(Box, __assign({ fill: (r.focus && "base") || (r.hover && "faint") || "faint-down", radius: "md", tabIndex: 0, borderFill: (r.focus && "base") || "none", style: { transition: "all 0.25s ease" } }, rProps),
            React.createElement(Fit.TryTagless, { cover: "parent", zIndex: (r.focus || value) ? undefined : 1, className: rProps.className },
                React.createElement("label", { htmlFor: fieldId })),
            React.createElement(Fit.TryTagless, { cover: "parent", height: (value || r.focus) ? "30px" : "50px" },
                React.createElement(Align.TryTagless, { vert: "center" },
                    React.createElement(Font.TryTagless, { fill: "faint-down", size: (value || r.focus) ? "x2s" : "xs", style: { transition: "all 0.1s ease" }, align: "left" },
                        React.createElement(Gap.TryTagless, { hor: "md" }, label)))),
            React.createElement(Fit.TryTagless, { stick: "top-left", top: "25px" },
                React.createElement(Box.TryTagless, null,
                    React.createElement(Align.TryTagless, { vert: "center" },
                        React.createElement(Font.TryTagless, __assign({ size: "sm", fill: "base", weight: "500", align: "left", family: "regular", lineHeight: "md" }, valueFont),
                            React.createElement(Gap.TryTagless, { hor: "md", forwardRef: handleRef }, type === 'textarea' ? (React.createElement(Fit.TryTagless, { cover: "parent", width: "100%", bottom: "0" },
                                React.createElement("textarea", { id: fieldId, onChange: handleChange, value: value }))) : (React.createElement("input", { id: fieldId, type: type, onChange: handleChange, value: value }))))))),
            placeholder && !value && r.focus && (React.createElement(Fit.TryTagless, { stick: "top-left", top: "50%" },
                React.createElement(Align.TryTagless, { vert: "center" },
                    React.createElement(Font.TryTagless, { size: "sm", fill: "faint-down", weight: "400", family: "regular", align: "left" },
                        React.createElement(Gap.TryTagless, { hor: "md" }, placeholder)))))))); }));
}));

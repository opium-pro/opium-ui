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
import { Align, Fit, Box, Font, Gap, Reaction } from 'themeor';
export var Button = function (_a) {
    var label = _a.label, primary = _a.primary, _b = _a.type, type = _b === void 0 ? "button" : _b, disabled = _a.disabled, mini = _a.mini, rest = __rest(_a, ["label", "primary", "type", "disabled", "mini"]);
    return (React.createElement(Reaction, { smooth: true, track: ['hover', 'focus', 'active'] }, function (rProps, r) { return (React.createElement("div", null,
        React.createElement(Fit.TryTagless, { inline: true, height: mini ? "32px" : "48px" },
            React.createElement(Box.TryTagless, { fill: (disabled && "faint-up") || (primary ? ((r.active && 'accent-up') || (r.hoverOrFocus ? "accent-down" : "accent")) : (r.hoverOrFocus ? "faint" : "none")), borderFill: primary ? "none" : "faint-up", strong: primary && !disabled, radius: "xs" },
                React.createElement(Align.TryTagless, { vert: "center", hor: "center" },
                    React.createElement(Font.TryTagless, { nowrap: true, fill: disabled ? "faint-down" : "base", weight: primary ? "600" : "500", size: "sm", family: "regular" },
                        React.createElement(Gap.TryTagless, { hor: "xl" },
                            React.createElement("button", __assign({ disabled: disabled }, rProps, rest, { type: type }), label)))))))); }));
};

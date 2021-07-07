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
import { Align, Font, Gap, Icon } from 'themeor';
import { MakeButton } from '../make-button';
export var ActionButton = function (_a) {
    var label = _a.label, icon = _a.icon, primary = _a.primary, select = _a.select, disabled = _a.disabled, critic = _a.critic, rest = __rest(_a, ["label", "icon", "primary", "select", "disabled", "critic"]);
    return (React.createElement(MakeButton, __assign({}, rest, { disabled: disabled }),
        React.createElement(Align.TryTagless, { row: true, vert: "center" },
            React.createElement(Icon, { name: icon, fill: (disabled && 'faint-down') || (critic && "critic") || (primary ? "accent" : "base") }),
            React.createElement(Gap, { size: "xs" }),
            React.createElement(Font, { size: "xs", weight: primary ? "600" : "400", fill: (disabled && 'faint-down') || (critic ? "critic" : "base") }, label),
            select && (React.createElement(React.Fragment, null,
                React.createElement(Gap, { size: "xs" }),
                React.createElement(Icon, { size: "sm", name: "ChevronDown", fill: "base" }))))));
};

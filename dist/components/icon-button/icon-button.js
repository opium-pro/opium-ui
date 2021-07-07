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
import { Align, Fit, Box, Icon, Reaction } from 'themeor';
export var IconButton = function (_a) {
    var icon = _a.icon, fill = _a.fill, line = _a.line, rest = __rest(_a, ["icon", "fill", "line"]);
    return (React.createElement(Reaction, { track: ['hover', 'focus', 'active'] }, function (rProps, r) { return (React.createElement(Fit.TryTagless, __assign({}, rProps, rest, { width: "48px", height: "48px", style: { margin: "-10px" } }),
        React.createElement(Align, { vert: "center", hor: "center" },
            React.createElement(Fit.TryTagless, { width: r.hoverOrFocus ? "48px" : "0", height: r.hoverOrFocus ? "48px" : "0", stick: "top-left", top: r.hoverOrFocus ? "0" : "24px", left: r.hoverOrFocus ? "0" : "24px" },
                React.createElement(Box, { style: { transition: "all, 0.2s ease" }, radius: "max", fill: r.active ? "faint" : "--hovereffect" })),
            React.createElement(Fit.TryTagless, { width: "20px", height: "20px" },
                React.createElement(Align, { vert: "center", hor: "center" },
                    React.createElement(Icon, { name: icon, fill: fill, line: line })))))); }));
};

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
import { Fit, Box, Reaction } from 'themeor';
export var MakeButton = function (_a) {
    var children = _a.children, _b = _a.offset, offset = _b === void 0 ? "10px" : _b, disabled = _a.disabled, _c = _a.radius, radius = _c === void 0 ? "md" : _c, _d = _a.track, track = _d === void 0 ? ["hover", "active"] : _d, fade = _a.fade, rest = __rest(_a, ["children", "offset", "disabled", "radius", "track", "fade"]);
    return (React.createElement(Reaction, __assign({}, rest, { track: disabled ? undefined : track, cursor: disabled ? "default" : "pointer", tabIndex: 0 }), function (rProps, r) { return (React.createElement(Fit.TryTagless, __assign({}, rProps, { style: {
            margin: "-" + offset.split(' ').join(' -'),
            padding: offset,
        } }),
        !disabled && React.createElement(Fit.TryTagless, { width: r.hoverOrFocus ? "100%" : (!fade ? "0" : undefined), height: r.hoverOrFocus ? "100%" : (!fade ? "0" : undefined), stick: "top-left", top: r.hoverOrFocus ? "0" : (!fade ? "50%" : undefined), left: r.hoverOrFocus ? "0" : (!fade ? "50%" : undefined) },
            React.createElement(Box, { radius: radius, fill: r.active ? "faint" : "--hovereffect", style: {
                    transition: "all 0.2s ease",
                    opacity: fade ? (r.hoverOrFocus ? "1" : "0") : undefined,
                } })),
        React.createElement(Fit, null, typeof children === 'function' ? (children(r)) : (children)))); }));
};

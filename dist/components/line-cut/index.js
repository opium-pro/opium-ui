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
import { useState } from 'react';
import { Fit, Font } from 'themeor';
export var LineCut = function (_a) {
    var children = _a.children, lines = _a.lines, lineHeight = _a.lineHeight, rest = __rest(_a, ["children", "lines", "lineHeight"]);
    var _b = useState(0), parentSize = _b[0], setParentSize = _b[1];
    var _c = useState(0), childSize = _c[0], setChildSize = _c[1];
    function parentRef(ref) {
        if (!ref) {
            return;
        }
        if (!parentSize) {
            setParentSize(lines ? ref.clientHeight : ref.clientWidth);
        }
    }
    function childRef(ref) {
        if (!ref) {
            return;
        }
        if (!childSize) {
            setChildSize(lines ? ref.scrollHeight : ref.scrollWidth);
        }
    }
    var active = true;
    if (childSize <= parentSize) {
        active = false;
    }
    return (React.createElement(Fit, { forwardRef: parentRef, "data-tip": (lines || active) ? children : undefined },
        React.createElement(Fit, { clip: true, maxHeight: (lines && lineHeight) ? (lines * parseInt(lineHeight)).toString() + 'px' : undefined },
            React.createElement(Font, { nowrap: !lines, forwardRef: childRef }, children)),
        active && (React.createElement(Fit, { stick: "bottom-right", right: "-10px" }, "\u2026"))));
};

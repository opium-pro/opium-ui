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
import React from 'react';
import { Font, Box, Align, Gap, Reaction, Fit } from 'themeor';
import { Avatar } from '../avatar';
import { Link } from 'react-router-dom';
export var Wrapper = function (_a) {
    var title = _a.title, img = _a.img, link = _a.link, children = _a.children;
    return (React.createElement(Reaction, { smooth: true }, function (rProps, r) { return (React.createElement(Fit.TryTagless, __assign({ tabIndex: 0, top: r.hoverOrFocus ? '-4px' : '0', clip: true, FORCE_TAGLESS: true }, rProps),
        React.createElement(Link, { to: link },
            React.createElement(Box, { fill: "base", radius: "md", shadow: r.hoverOrFocus ? "xl" : "md" },
                React.createElement(Gap, null,
                    React.createElement(Align, { row: true, vert: "center" },
                        React.createElement(Avatar, { img: img, name: title }),
                        React.createElement(Gap, null),
                        React.createElement(Align, { gapVert: "x2s" },
                            React.createElement(Font, { size: "lg", weight: "600", fill: "base" }, title),
                            children))))))); }));
};

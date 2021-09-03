import React from "react";
import { Align, Fit, Box, Font, Icon } from "themeor";
export var SIZE = {
    sm: { circle: "40px", font: "x2s" },
    md: { circle: "80px", font: "lg" },
    lg: { circle: "160px", font: "xl" },
};
export var Avatar = function (_a) {
    var name = _a.name, _b = _a.size, size = _b === void 0 ? "md" : _b, img = _a.img, _c = _a.fill, fill = _c === void 0 ? "accent" : _c, icon = _a.icon;
    return (React.createElement(Fit.TryTagless, { width: SIZE[size].circle, height: SIZE[size].circle },
        React.createElement(Align.TryTagless, { vert: "center", hor: "center" },
            React.createElement(Box.TryTagless, { img: img, fill: fill, strong: true, radius: "max" },
                React.createElement(Icon, { name: icon }),
                React.createElement(Font, { fill: "base", weight: "600", size: SIZE[size].font }, !img && name)))));
};
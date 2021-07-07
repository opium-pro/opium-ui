import React from 'react';
import { Align, Fit, Box, Font, Gap } from 'themeor';
export var Counter = function (_a) {
    var value = _a.value, attention = _a.attention, base = _a.base;
    return (React.createElement(Fit.TryTagless, { minWidth: "20px", height: "20px" },
        React.createElement(Gap.TryTagless, { hor: "x2s" },
            React.createElement(Box.TryTagless, { radius: "max", fill: (base && 'base') || (attention ? "critic" : "faint"), strong: attention, shadow: !!base ? 'sm' : 'none' },
                React.createElement(Align, { vert: "center", hor: "center" },
                    React.createElement(Font, { size: "x3s", weight: "700", fill: (attention || base) ? "base" : "faint" }, value))))));
};

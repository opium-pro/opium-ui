import { Align, Fit, Box, Font } from 'themeor';
export var Ava = function (_a) {
    var abbr = _a.abbr, _b = _a.fill, fill = _b === void 0 ? "accent" : _b;
    return (React.createElement(Fit.TryTagless, { width: "40px", height: "40px" },
        React.createElement(Align.TryTagless, { vert: "center", hor: "center" },
            React.createElement(Box.TryTagless, { fill: fill, strong: true, radius: "max" },
                React.createElement(Font, { fill: "base", weight: "700", size: "x2s" }, abbr)))));
};

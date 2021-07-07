import { Align, Fit, Box, Font, Gap } from 'themeor';
import { LimitWidth } from '../limit-width';
export var ActionPanel = function (_a) {
    var children = _a.children, status = _a.status, comission = _a.comission, sum = _a.sum;
    return (React.createElement(Fit.TryTagless, { clip: true, style: {
            position: 'sticky',
            bottom: '10px',
            zIndex: 100,
            margin: '0 -10px',
        } },
        React.createElement(Box, { radius: "md", fill: "--notification", blur: "md", strong: true },
            (status || sum || comission) && (React.createElement(LimitWidth, null,
                React.createElement(Gap.TryTagless, { vert: "xs" },
                    React.createElement(Font.TryTagless, { fill: "base" },
                        React.createElement(Align, { vert: "center", row: true },
                            status,
                            React.createElement(Gap, { size: "x2s" }),
                            React.createElement(Font, { weight: "600" }, sum),
                            React.createElement(Gap, { size: "x2s" }),
                            comission))))),
            React.createElement(LimitWidth, null,
                React.createElement(Fit.TryTagless, null,
                    React.createElement(Gap.TryTagless, { vert: "md" },
                        React.createElement(Align, { row: true, gapHor: "xl", vert: "center", hor: "left" }, children)))))));
};

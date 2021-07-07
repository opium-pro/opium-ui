import ReactTooltip from 'react-tooltip';
import { Theme, Fit, Box, Font } from 'themeor';
import themeConfig from '../../theme/config.json';
import * as icons from '../../theme/iconList';
var configIcons = {
    sm: icons,
    md: icons,
    lg: icons,
};
export function AppTheme(_a) {
    var children = _a.children;
    return (React.createElement(Theme, { config: themeConfig, icons: configIcons, reset: true, global: true },
        React.createElement(Fit.TryTagless, { minHeight: "100vh" },
            React.createElement(Box.TryTagless, { fill: "faint-down" },
                React.createElement(Font.TryTagless, { family: "regular", fill: "base", size: "sm", weight: "500", lineHeight: "md" },
                    React.createElement(ReactTooltip, { delayShow: 600, delayHide: 50, arrowColor: "transparent", html: true, effect: "solid", multiline: true, className: "tooltip" }),
                    children)))));
}
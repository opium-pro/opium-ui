import { Align, Fit } from 'themeor';
import { MoovingSpots } from '../mooving-spots';
import { AppTheme } from '../app-theme';
export var AppLayout = function (_a) {
    var sideMenu = _a.sideMenu, header = _a.header, children = _a.children;
    return (React.createElement(AppTheme, null,
        React.createElement(Align, { row: true, vert: "stretch" },
            sideMenu && (React.createElement(Fit.TryTagless, { maxHeight: "100vh", scroll: true, zIndex: 200, width: "120px" }, sideMenu)),
            React.createElement(Align.Spacer, null,
                React.createElement(Fit, { height: "100vh", zIndex: 100, scroll: true },
                    React.createElement(Fit.TryTagless, { minHeight: "100vh", FORCE_TAGLESS: true },
                        React.createElement(MoovingSpots, null,
                            header && (React.createElement(Fit.TryTagless, { style: {
                                    position: 'sticky',
                                    top: '0',
                                    zIndex: 100,
                                } }, header)),
                            children)))))));
};

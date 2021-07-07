import { Align, Icon } from 'themeor';
import { MakeButton } from '../make-button';
export function BackButton(_a) {
    var onClick = _a.onClick;
    return (React.createElement(MakeButton, { onClick: onClick, radius: "max" },
        React.createElement(Align, { row: true, vert: "center", gapHor: "md" },
            React.createElement(Icon, { name: "Placeholder" }))));
}

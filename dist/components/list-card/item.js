import React from 'react';
import { Font, Align, Gap } from 'themeor';
export var Item = function (_a) {
    var name = _a.name, value = _a.value;
    return (React.createElement(Align, { row: true },
        React.createElement(Font, { fill: "faint" }, name),
        ":",
        React.createElement(Gap, { size: "xs" }),
        React.createElement(Font, { fill: "faint" }, value)));
};

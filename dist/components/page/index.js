import React from 'react';
import { Helmet } from 'react-helmet';
export function Page(_a) {
    var title = _a.title, children = _a.children;
    return (React.createElement(React.Fragment, null,
        React.createElement(Helmet, null, title && React.createElement("title", null, title)),
        children));
}

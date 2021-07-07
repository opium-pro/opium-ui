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
import { useState } from 'react';
import Context from './context';
export function Form(_a) {
    var children = _a.children, onSubmit = _a.onSubmit, fields = _a.fields;
    var _b = useState(fields), context = _b[0], setContext = _b[1];
    function setField(name, value) {
        var _a;
        var newContext = __assign(__assign({}, context), (_a = {}, _a[name] = value, _a));
        setContext(newContext);
    }
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(context);
    }
    return (React.createElement(Context.Provider, { value: __assign(__assign({}, context), { setField: setField }) },
        React.createElement("form", { onSubmit: handleSubmit }, children)));
}

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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { useState } from 'react';
import Context from './context';
export function Form(_a) {
    var children = _a.children, onSubmit = _a.onSubmit, rest = __rest(_a, ["children", "onSubmit"]);
    var _b = useState({}), context = _b[0], setContext = _b[1];
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
        React.createElement("form", __assign({ onSubmit: handleSubmit }, rest), children)));
}

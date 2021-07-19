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
import React, { useContext, useState } from 'react';
import Context from './context';
export var withForm = function (Component) { return function (_a) {
    var onChange = _a.onChange, value = _a.value, name = _a.name, rest = __rest(_a, ["onChange", "value", "name"]);
    if (!name) {
        return (React.createElement(Component, __assign({}, rest, { value: value, name: name, onChange: onChange })));
    }
    var _b = useState(false), changed = _b[0], setChanged = _b[1];
    var fields = useContext(Context);
    var setField = fields.setField;
    var fieldValue = fields[name];
    if (!changed && fieldValue === undefined && value) {
        fieldValue = value;
        setField(name, fieldValue);
    }
    function handleChange(value) {
        !changed && setChanged(true);
        var result = onChange === null || onChange === void 0 ? void 0 : onChange(value);
        var newValue = typeof result === 'string' ? result : value;
        setField(name, newValue);
    }
    return (React.createElement(Component, __assign({}, rest, { value: fieldValue, name: name, onChange: handleChange })));
}; };

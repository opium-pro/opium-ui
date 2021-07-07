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
import { useContext } from 'react';
import Context from './context';
export var withForm = function (Component) { return function (_a) {
    var useForm = _a.useForm, rest = __rest(_a, ["useForm"]);
    var fields = useContext(Context);
    var field = __assign({}, fields[useForm]);
    var setField = fields.setField;
    function handleChange(value) {
        field.value = value;
        setField(useForm, field);
    }
    return (React.createElement(Component, __assign({}, rest, field, { onChange: handleChange })));
}; };

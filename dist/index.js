"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var setRefs = function () {
    var references = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        references[_i] = arguments[_i];
    }
    return function (element) {
        references.forEach(function (reference) {
            if (typeof reference === 'function') {
                reference(element);
            }
            else if (reference) {
                reference.current = element;
            }
        });
    };
};
exports.default = setRefs;

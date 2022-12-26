"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Node = function Node(input) {
    return {
        value: input || null,
        nextNode: null,
        changeValue: function changeValue(value) {
            this.value = value;
        }
    };
};

exports.default = Node;
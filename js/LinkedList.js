'use strict';

var _Node = require('./Node');

var LinkedList = function LinkedList() {
    var head = null;
    var length = 0;

    var append = function append(value) {
        var node = (0, _Node.Node)(value);
        var temp = head;
        if (head === null) {
            head = node;
        } else {
            while (temp.nextNode) {
                temp = head.nextNode;
            }
            temp.nextNode = node;
        }
        length++;
    };

    var prepend = function prepend(value) {
        var node = (0, _Node.Node)(value);
        if (head === null) {
            head = node;
        } else {
            node.nextNode = head;
            head = node;
        }
        length++;
    };

    var toString = function toString() {
        var temp = head;
        var result = '';
        if (head === null) {
            result = 'empty list';
        } else if (head.nextNode === null) {
            result = head.value;
        } else {
            while (temp.nextNode) {
                result += " " + temp.value;
                temp = temp.nextNode;
            }
        }
        return result;
    };

    return {
        append: append,
        prepend: prepend,
        toString: toString
    };
};

var linkedList = LinkedList();
console.log(linkedList);
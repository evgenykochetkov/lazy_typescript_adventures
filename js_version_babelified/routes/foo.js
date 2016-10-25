'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FooRoute = function FooRoute() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            null,
            'Foo'
        ),
        _react2.default.createElement(
            _reactRouter.Link,
            { to: '/bar' },
            'go to bar'
        )
    );
};

exports.default = FooRoute;
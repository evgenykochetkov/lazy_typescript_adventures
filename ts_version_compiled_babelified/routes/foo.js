"use strict";

var React = require('react');
var react_router_1 = require('react-router');
var FooRoute = function FooRoute() {
        return React.createElement(
                'div',
                null,
                React.createElement(
                        'h1',
                        null,
                        'Foo'
                ),
                React.createElement(
                        react_router_1.Link,
                        { to: '/bar' },
                        'go to bar'
                )
        );
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FooRoute;
//# sourceMappingURL=foo.jsx.map
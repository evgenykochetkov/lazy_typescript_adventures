"use strict";

var React = require('react');
var react_router_1 = require('react-router');
var BarRoute = function BarRoute() {
        return React.createElement(
                'div',
                null,
                React.createElement(
                        'h1',
                        null,
                        'Bar'
                ),
                React.createElement(
                        react_router_1.Link,
                        { to: '/foo' },
                        'go to foo'
                )
        );
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BarRoute;
//# sourceMappingURL=bar.jsx.map
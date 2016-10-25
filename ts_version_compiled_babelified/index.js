"use strict";

var React = require('react');
var react_dom_1 = require('react-dom');
var react_router_1 = require('react-router');
var foo_1 = require('./routes/foo');
console.log('FooRoute:', foo_1.default);
var bar_1 = require('./routes/bar');
console.log('BarRoute:', bar_1.default);
function lazyLoadComponent(lazyModule) {
    console.log('lazyModule:', lazyModule);
    return function (location, cb) {
        console.log('location = ', location);
        lazyModule(function (module) {
            console.log('module:', lazyModule);
            cb(null, module.default);
        });
    };
}
var RootRoute = function RootRoute() {
    return React.createElement(
        'div',
        null,
        React.createElement(
            react_router_1.Link,
            { to: '/bar' },
            'go to bar'
        ),
        React.createElement('br', null),
        React.createElement(
            react_router_1.Link,
            { to: '/foo' },
            'go to foo'
        )
    );
};
react_dom_1.render(React.createElement(
    'div',
    null,
    React.createElement(
        react_router_1.Router,
        { history: react_router_1.hashHistory },
        React.createElement(react_router_1.Route, { path: '/', component: RootRoute }),
        React.createElement(react_router_1.Route, { path: '/foo', getComponent: lazyLoadComponent(foo_1.default) }),
        React.createElement(react_router_1.Route, { path: '/bar', getComponent: lazyLoadComponent(bar_1.default) })
    )
), document.getElementById('app'));
//# sourceMappingURL=index.jsx.map
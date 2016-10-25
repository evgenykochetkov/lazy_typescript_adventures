"use strict";

var React = require('react');
var react_dom_1 = require('react-dom');
var react_router_1 = require('react-router');
var FooRoute = require('./routes/foo');
console.log('FooRoute:', FooRoute);
var BarRoute = require('./routes/bar');
console.log('BarRoute:', BarRoute);
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
        React.createElement(react_router_1.Route, { path: '/foo', getComponent: lazyLoadComponent(FooRoute) }),
        React.createElement(react_router_1.Route, { path: '/bar', getComponent: lazyLoadComponent(BarRoute) })
    )
), document.getElementById('app'));
//# sourceMappingURL=index.jsx.map
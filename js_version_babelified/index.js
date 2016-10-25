'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

var _foo = require('./routes/foo');

var _foo2 = _interopRequireDefault(_foo);

var _bar = require('./routes/bar');

var _bar2 = _interopRequireDefault(_bar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('FooRoute:', _foo2.default);

console.log('BarRoute:', _bar2.default);

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
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactRouter.Link,
      { to: '/bar' },
      'go to bar'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _reactRouter.Link,
      { to: '/foo' },
      'go to foo'
    )
  );
};

(0, _reactDom.render)(_react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.hashHistory },
    _react2.default.createElement(_reactRouter.Route, { path: '/', component: RootRoute }),
    _react2.default.createElement(_reactRouter.Route, { path: '/foo', getComponent: lazyLoadComponent(_foo2.default) }),
    _react2.default.createElement(_reactRouter.Route, { path: '/bar', getComponent: lazyLoadComponent(_bar2.default) })
  )
), document.getElementById('app'));
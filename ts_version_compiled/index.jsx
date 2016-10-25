"use strict";
const React = require('react');
const react_dom_1 = require('react-dom');
const react_router_1 = require('react-router');
const FooRoute = require('./routes/foo');
console.log('FooRoute:', FooRoute);
const BarRoute = require('./routes/bar');
console.log('BarRoute:', BarRoute);
function lazyLoadComponent(lazyModule) {
    console.log('lazyModule:', lazyModule);
    return (location, cb) => {
        console.log('location = ', location);
        lazyModule((module) => {
            console.log('module:', lazyModule);
            cb(null, module.default);
        });
    };
}
const RootRoute = () => (<div>
        <react_router_1.Link to={'/bar'}>go to bar</react_router_1.Link> 
        <br />
        <react_router_1.Link to={'/foo'}>go to foo</react_router_1.Link>
    </div>);
react_dom_1.render((<div>
    <react_router_1.Router history={react_router_1.hashHistory}>
        <react_router_1.Route path="/" component={RootRoute}/>
        <react_router_1.Route path="/foo" getComponent={lazyLoadComponent(FooRoute)}/>
        <react_router_1.Route path="/bar" getComponent={lazyLoadComponent(BarRoute)}/>
    </react_router_1.Router>
  </div>), document.getElementById('app'));
//# sourceMappingURL=index.jsx.map
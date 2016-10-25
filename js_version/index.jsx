import React from 'react';
import {render} from 'react-dom';
import {Router, hashHistory, Route, Link} from 'react-router';

import FooRoute from './routes/foo'
console.log('FooRoute:', FooRoute)
import BarRoute from './routes/bar'
console.log('BarRoute:', BarRoute)

function lazyLoadComponent(lazyModule) {
  console.log('lazyModule:', lazyModule)
  return (location, cb) => {
    console.log('location = ', location)
    lazyModule((module) => {
      console.log('module:', lazyModule)
      cb(null, module.default)
    })
  }
}

const RootRoute = () => (
    <div>
        <Link to={'/bar'}>go to bar</Link> 
        <br/>
        <Link to={'/foo'}>go to foo</Link>
    </div>
)

render((
  <div>
    <Router history={hashHistory}>
        <Route path="/" component={RootRoute}/>
        <Route path="/foo" getComponent={lazyLoadComponent(FooRoute)}/>
        <Route path="/bar" getComponent={lazyLoadComponent(BarRoute)}/>
    </Router>
  </div>
), document.getElementById('app'));

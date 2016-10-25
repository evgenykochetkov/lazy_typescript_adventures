import * as React from 'react';
import {Link} from 'react-router';

const FooRoute = () => (
    <div>
        <h1>Foo</h1>
        <Link to={'/bar'}>go to bar</Link>
    </div>
)

export default FooRoute
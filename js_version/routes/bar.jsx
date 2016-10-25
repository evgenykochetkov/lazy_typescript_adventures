import React from 'react';
import {Link} from 'react-router';

const BarRoute = () => (
    <div>
        <h1>Bar</h1>
        <Link to={'/foo'}>go to foo</Link>
    </div>
)

export default BarRoute
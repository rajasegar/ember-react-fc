// BEGIN-SNIPPET basic-component.js
import React from 'react';
import WithEmberSupport from 'ember-react-fc';

function BasicComponent() {
    return (<h1>Hello from React</h1>);
}

export default WithEmberSupport(BasicComponent);
// END-SNIPPET

import React from 'react';
import WithEmberSupport from 'ember-react-fc';


function  InvokeAction(props) {
    const { handleAction } = props;
    return (<button onClick={handleAction()}>click me</button>);
}

export default WithEmberSupport(InvokeAction);

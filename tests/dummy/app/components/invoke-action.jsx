import React from 'react';
import WithEmberSupport from 'ember-react-fc';

@WithEmberSupport
export default class InvokeAction extends React.Component {
  render() {
    const { handleAction } = this.props;

    return <button onClick={handleAction()}>click me</button>;
  }
}

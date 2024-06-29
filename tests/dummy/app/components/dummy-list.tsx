import React from 'react';
import ReactDom from 'react-dom';
import WithEmberSupport from 'ember-react-fc';
import { add } from './math';

export default WithEmberSupport(function DummyList(props) {
  const { name, children } = props;

  return (
    <div id="wrapper" aria-label="hello">
      <div data-test-name>Hello {name}</div>
      <input type="text" id="txtUser"/>
      <header>{add(1,5)}</header>
      {children}
    </div>
  );
});

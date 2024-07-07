import React from 'react';
import WithEmberSupport from 'ember-react-fc';

export default WithEmberSupport(function FunctionalComponent(props) {
  const { name, children } = props;

  return (
    <div id="wrapper" aria-label="hello">
      <div data-test-name>{name}</div>
      <input type="text" id="txtUser"/>
      <header>Header</header>
      {children}
    </div>
  );
});

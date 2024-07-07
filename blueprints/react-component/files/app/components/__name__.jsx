import React from 'react';
import WithEmberSupport from 'ember-react-fc';

export default WithEmberSupport(function <%= classifiedModuleName %>(props) {
  const { name, children } = props;

  return (
    <div>
      <p>Hello {name}</p>
      {children}
    </div>
  );
});

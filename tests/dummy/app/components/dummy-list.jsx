import React from 'react';
import WithEmberSupport from 'ember-react-fc';

export default WithEmberSupport(function FunctionalComponent({message, onClick}) {

  return (
    <div id="wrapper" aria-label="hello">
      <button onClick={onClick}>Toggle</button>
      <div>you said: {message}</div>

    </div>
  );
});

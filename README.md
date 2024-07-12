ember-react-fc
==============================================================================

Ember addon to use React Functional components inside Ember apps.


You can read the introductory blog post [here](https://dev.to/rajasegar/react-inside-ember-the-second-chapter-17bl)


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-react-fc
```

Compatibility
------------------------------------------------------------------------------

This addon requires Ember CLI 2.15 or higher.

Usage
------------------------------------------------------------------------------

This addon provides a wrapper function that allows a React element to be rendered in Ember.

As an example, you can create a component like this:

```javascript
// app/components/my-react-component.jsx
import React from 'react';
import WithEmberSupport from 'ember-react-fc';

export default WithEmberSupport(function MyReactComponent(props) {
  const { name, children } = props;

  return (
    <div>
      <p>Hello {name}</p>
      {children}
    </div>
  );
});



```

And render it like this:

```handlebars
<MyReactComponent @name='Raja' />
```

That would create a component that renders `Hello, Raja`.


Component Blueprints
--------------------
You can generate React components using the `ember g` command like this:
```
ember g react-component hello-world
```

This will create a new React component `hello-world.jsx` inside `app/components` folder.
In your templates you can use it like 
```handlebars
<HelloWord />
```

Options
------------------------------------------------------------------------------

* `outputFile` option imports `react` and `react-dom` into a separate file than `/assets/vendor.js`. This is useful if your entire Ember application doesn't require `react`. The separate file containing `react` and `react-dom` can be imported via a template or initializer.

```javascript
// ember-cli-build.js
let app = new EmberApp(defaults, {
  'ember-react-fc': {
    outputFile: '/assets/react.js'
  }
});
```

What all is this addon doing?
------------------------------------------------------------------------------

* Provides imports for `react` and `react-dom`
* Hooks up a bunch of necessary `babel` transforms
* Provides a thin wrapper around your React components that bridge the gap between the two libraries

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).

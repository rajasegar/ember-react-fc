import EmberComponent from '@ember/component';
import { get } from '@ember/object';
import { schedule } from '@ember/runloop';

import React from 'react';
import { createRoot } from 'react-dom/client';

import YieldWrapper from './-private/yield-wrapper';

const wrapReactComponent = ReactComponent =>
  class extends EmberComponent {
    /* Add type annotation for private `attrs` property on component */
    getPropsForReact() {
      return Object.keys(this.attrs).reduce((acc, key) => {
        const value = get(this, key);

        acc[key] = value;

        return acc;
      }, {});
    }

    mountElement() {
      const props = this.getPropsForReact();
      let { children } = props;

      if (!children) {
        const childNodes = this.element.childNodes;
        children = [
          React.createElement(YieldWrapper, {
            key: this.elementId,
            nodes: [...childNodes]
          })
        ];
      }

      this.root = createRoot(this.element);
      this.root.render(React.createElement(ReactComponent, props, children));
    }

    didUpdateAttrs() {
      schedule('render', () => this.mountElement());
    }

    didInsertElement() {
      super.didInsertElement();

      this.mountElement();
    }

    willDestroyElement() {
      this.root.unmount();

      super.willDestroyElement();
    }
  };

export default function WithEmberSupport(descriptor) {
  return wrapReactComponent(descriptor);
}

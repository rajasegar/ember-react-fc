import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { hbs } from 'ember-cli-htmlbars';
import { click, render } from '@ember/test-helpers';
import sinon from 'sinon';

module('Integration | Utility | with-ember-support', function (hooks) {
  setupRenderingTest(hooks);

  test('it can render a React component', async function (assert) {
    await render(hbs`
      <BasicComponent />
    `);

    assert
      .dom('div > h1')
      .hasText('Hello from React', 'Renders content from a React component');
  });

  test('an action passed into the component can be called', async function (assert) {
    const handleActionStub = sinon.stub();
    this.set('handleAction', handleActionStub);

    await render(hbs`
      <InvokeAction @handleAction={{this.handleAction}} />
    `);

    await click('button');

    assert.ok(handleActionStub.calledOnce, 'Invoked the passed in action');
  });



  test('React hooks can be used', async function (assert) {
    await render(hbs`
      <WithHooks />
    `);

    assert
      .dom('[data-test="state"]')
      .hasText('You clicked 0 times', 'Initial state set');

    await click('button');

    assert
      .dom('[data-test="state"]')
      .hasText('You clicked 1 times', 'State updated via in-component hook');
  });


  module('supporting yields and children', function () {
    test('it can yield the block to the React children', async function (assert) {
      await render(hbs`
        <YieldToChildren>
          <h1>Child content</h1>
        </YieldToChildren>
      `);

      assert.dom('#wrapper').exists();
      assert.dom('h1').exists();
    });

    test('the yield can have multiple children', async function (assert) {
      await render(hbs`
        <YieldToChildren>
          <p data-test="foo">Foo</p>
          <p data-test="bar">Bar</p>
        </YieldToChildren>
      `);

      assert.dom('#wrapper').exists();
      assert.dom('[data-test="foo"]').exists();
      assert.dom('[data-test="bar"]').exists();
    });
  });

  module('supporting functional components', function () {
    module('with traditional functions', function () {
      test('it can render them inline', async function (assert) {
        await render(hbs`
          <TraditionalFunctionalComponent @name="Alex" />
        `);

        assert.dom('[data-test-name]').hasText('Alex');
      });

      test('it can render children', async function (assert) {
        await render(hbs`
          <TraditionalFunctionalComponent>
            <div data-test="foo">Foo</div>
          </TraditionalFunctionalComponent>
        `);

        assert.dom('[data-test="foo"]').hasText('Foo');
      });


    });

    module('with arrow functions', function () {
      test('it can render them inline', async function (assert) {
        await render(hbs`
          <ArrowFunctionComponent @name="Alex" />
        `);

        assert.dom('[data-test-name]').hasText('Alex');
      });

      test('it can render children', async function (assert) {
        await render(hbs`
          <ArrowFunctionComponent>
            <div data-test="foo">Foo</div>
          </ArrowFunctionComponent>
        `);

        assert.dom('[data-test="foo"]').hasText('Foo');
      });
    });
  });

  
});

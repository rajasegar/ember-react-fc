import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CounterComponent extends Component {
  @tracked message = 'hello';

  @action toggle() {
    if (this.message === 'hello') {
      this.message = 'see you';
    } else {
      this.message = 'hello';
    }
  }
}

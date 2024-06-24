import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class CounterComponent extends Component {
  @tracked count = 0;
}

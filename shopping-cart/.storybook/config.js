import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/store.js');
  require('../stories/button.js');
  require('../stories/cart.js');
  require('../stories/payment.js');
}

configure(loadStories, module);

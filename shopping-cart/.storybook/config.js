import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/button.js');
  require('../stories/store.js');
  require('../stories/cart.js');
  require('../stories/payment.js');
  require('../stories/order-complete.js');
}

configure(loadStories, module);

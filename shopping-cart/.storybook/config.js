import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/store.js');
  require('../stories/button.js');
  require('../stories/cart.js');
}

configure(loadStories, module);

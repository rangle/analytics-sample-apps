import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/store.js');
}

configure(loadStories, module);

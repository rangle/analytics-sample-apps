import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Button } from '../src/components/Button';

storiesOf('Button', module)
  .add('...', () => (
    <Button onClick={action('button clicked')}>
      Some Button Text
    </Button>
  ));

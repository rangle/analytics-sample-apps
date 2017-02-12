import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Button } from '../src/components/Button';

storiesOf('Button', module)
  .add('default', () => (
    <Button onClick={action('button clicked')}>
      Some Button Text
    </Button>
  ))
  .add('disabled', () => (
    <Button onClick={action('button clicked')} disabled>
      Some Button Text
    </Button>
  ))
  .add('disabled with onDisabled handler', () => (
    <Button
      onClick={action('button clicked')}
      onDisabledClick={action('button disabled clicked')}
      disabled>
      Some Button Text
    </Button>
  ));

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import PolicyModule from '../index';


storiesOf('Home Page', module)
  .add('default view', () => (
    <div><PolicyModule /></div>
))
;

import React from 'react';
import Store from './Store';

const injectStore = function(Component) {
  return (() => <Component store={Store} />)
}

export default injectStore;

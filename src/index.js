import React from 'react';
import ReactDOM from 'react-dom';
import PolicyModule from './components/molecules/PolicyModule';
import PersonalDetailsModule from './components/molecules/PersonalDetailsModule';
import Countries from './components/molecules/Countries';


// ----- UNCOMMENT BELOW TO RUN APP AS WEB DEV SERVER

const root = document.createElement('div');
root.id = 'app';
document.body.appendChild(root);

ReactDOM.render(
  <div><PolicyModule /><PersonalDetailsModule /><Countries /></div>,
  document.querySelector('#app')
);


// ----- UNCOMMENT BELOW TO RUN APP FROM storybook

 //export default PolicyModule;

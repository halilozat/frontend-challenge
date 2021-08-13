import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { LinkLayer } from './context/LinkContext';
import reducer, { initialState } from './context/reducer'





ReactDOM.render(
  <React.StrictMode>
    <LinkLayer initialState={initialState} reducer={reducer}>
      <App />
    </LinkLayer>
  </React.StrictMode>,
  document.getElementById('root')
);
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';

const translations = [
  {
    path: '/es',
    lang: 'es',
  },
  {
    path: '/en',
    lang: 'en',
  },
  {
    path: '',
    lang: 'es',
  },
];

const Router = () => (
  <Switch>
    { translations.map(({ path, lang }) => (
      <Route path={ path } render={ () => (<App lang={ lang } root={ path } />) } />
    ))}
  </Switch>
);

export default Router;

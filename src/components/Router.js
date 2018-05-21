import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';

const translations = [
  {
    id: 'spanish',
    path: '/es',
    lang: 'es',
  },
  {
    id: 'english',
    path: '/en',
    lang: 'en',
  },
  {
    id: 'default',
    path: '',
    lang: 'es',
  },
];

const Router = () => (
  <Switch>
    { translations.map(({ id, path, lang }) => (
      <Route key={ id } path={ path } render={ () => (<App lang={ lang } root={ path } />) } />
    ))}
  </Switch>
);

export default Router;

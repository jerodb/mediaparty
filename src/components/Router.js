import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';

let lang = navigator.language;

lang = lang.split('-')[0];

lang = ['es', 'en'].indexOf(lang) !== -1 ? lang : 'es'

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
    lang,
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

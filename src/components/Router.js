import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';

const Router = (props) => {
  const translations = [
    {
      id: 'spanish',
      path: '/es',
      locale: 'es',
    },
    {
      id: 'english',
      path: '/en',
      locale: 'en',
    },
    {
      id: 'default',
      path: '',
      locale: props.locale,
    },
  ];

  return (
    <Switch>
      {translations.map(({ id, path, locale }) => (
        <Route key={ id } path={ path } render={ () => (<App locale={ locale } videoId={ props.videoId } root={ path } />) } />
      ))}
    </Switch>
  );
};

export default Router;

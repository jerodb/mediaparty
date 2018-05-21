import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Router from '../../components/Router';

const all = (req, res) => {
  // generate the React markup for the current route
  const markup = renderToString(<StaticRouter context={ {} } location={ req.url }><Router /></StaticRouter>);

  // render the index template with the embedded React markup
  return res.render('index', { markup });
};

exports.all = all;

import React from 'react';
import acceptLang from 'accept-language';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Router from '../../components/Router';


const all = (req, res) => {
  const lang = req.header('Accept-Language');
  console.log(lang);

  const parsed = acceptLang.parse(req.header('Accept-Language'));
  const locale = parsed[0];

  console.log(parsed)
  console.log(locale)

  // locale = 'en';

  // generate the React markup for the current route
  const markup = renderToString(<StaticRouter context={ {} } location={ req.url }><Router /></StaticRouter>);

  // render the index template with the embedded React markup
  return res.render('index', { markup, locale });
};

exports.all = all;

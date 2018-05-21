import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'babel-polyfill';
import ReactGA from 'react-ga';
import Router from '../components/Router';

import '../assets/css/bootstrap.css';
import '../assets/css/style.css';
import '../../node_modules/react-day-picker/lib/style.css';

const gaKey = process.env.GA_TRACKING_ID || '';

ReactGA.initialize(gaKey);

window.onload = () => {
  ReactDOM.render(<BrowserRouter><Router /></BrowserRouter>, document.getElementById('app'));
};
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Workshop from './Workshop';
import LightningTalk from './LightningTalk';
import MediaFair from './MediaFair';
import Keynote from './Keynote';
import SuccessMsg from './SuccessMsg';
import NotFound from './NotFound';
import Header from './Header';
import Footer from './Footer';
import lan from '../lang';

const routes = [
  { path: '/posit-workshop',
    state: 'workShop',
    Component: Workshop,
  },
  { path: '/posit-lightning-talk',
    state: 'lightningTalk',
    Component: LightningTalk,
  },
  { path: '/posit-media-fair',
    state: 'mediaFair',
    Component: MediaFair,
  },
  { path: '/posit-keynote',
    state: 'keynote',
    Component: Keynote,
  },
  { path: '/success',
    state: 'success',
    Component: SuccessMsg,
  },
  { path: '/',
    exact: true,
    state: 'home',
    Component: Home,
  },
  { path: '',
    state: 'notFound',
    Component: NotFound,
  },
];

const App = ({ root, locale }) => {
  const { langClass, header, footer } = lan.layout[locale];
  const h = Object.assign(header, { root });
  return (
    <div className={ langClass }>
      <div className="container event">
        <Header { ...h } />
        <Switch>
          { routes.map(({ path, Component, state, exact }) => {
            const cLang = Object.assign(lan[state][locale], { root }, { locale });
            return (
              <Route
                key={ state }
                path={ root + path }
                exact={ exact }
                render={ () => (
                  <Component { ...cLang } />
              ) }
              />
            );
          })}
        </Switch>
        <Footer { ...footer } />
      </div>
    </div>
  );
};

export default App;

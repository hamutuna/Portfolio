// @flow
import * as React from 'react';

import Header from '../components/index/Header';
import FirstView from '../components/index/FirstView';
import Profile from '../components/index/Profile';
import Skills from '../components/index/Skills/Skills';
import Works from '../components/index/Works/Works';
import Footer from '../components/index/Footer';

export default () => (
  <React.Fragment>
    <Header />
    <main>
      <FirstView />
      <Profile />
      <Skills />
      <Works />
    </main>
    <Footer />
  </React.Fragment>
);

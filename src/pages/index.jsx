// @flow
import * as React from 'react';

import FirstView from '../components/index/FirstView';
import Profile from '../components/index/Profile';
import Skills from '../components/index/Skills/Skills';
import Works from '../components/index/Works/Works';

export default () => (
  <React.Fragment>
    <FirstView />
    <Profile />
    <Skills />
    <Works />
  </React.Fragment>
);

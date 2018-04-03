// @flow
import * as React from 'react';
import smoothscroll from 'smoothscroll-polyfill';

import Header from '../components/_common/Header';
import Footer from '../components/_common/Footer';

import '../styles/global';

smoothscroll.polyfill();

type Props = {
  children: () => React.Element<any>,
};

export default (props: Props) => (
  <React.Fragment>
    <Header />
    <main>{props.children()}</main>
    <Footer />
  </React.Fragment>
);

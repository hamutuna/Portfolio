// @flow
import * as React from 'react';

import Header from '../components/_common/Header';
import Footer from '../components/_common/Footer';

import '../styles/global';

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

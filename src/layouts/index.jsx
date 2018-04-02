// @flow
import * as React from 'react';

import Header from '../components/index/Header';
import Footer from '../components/index/Footer';

import '../styles/global';

type Props = {
  children: () => React.Element<any>,
};

export default (props: Props) => {
  return (
    <React.Fragment>
      <Header />
      <main>{props.children()}</main>
      <Footer />
    </React.Fragment>
  );
};

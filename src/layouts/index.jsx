// @flow
import * as React from 'react';
import smoothscroll from 'smoothscroll-polyfill';

import Header from '../components/_common/Header';
import Footer from '../components/_common/Footer';
import Sprite from '../components/_common/Sprite';

import '../styles/global';

type Props = {
  children: () => React.Element<any>,
};

export default class Template extends React.Component<Props> {
  componentDidMount() {
    // windowを触るので、ssr中は実行しないようにここで実行
    smoothscroll.polyfill();
  }

  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        <Sprite />
        <Header />
        <main>{children()}</main>
        <Footer />
      </React.Fragment>
    );
  }
}

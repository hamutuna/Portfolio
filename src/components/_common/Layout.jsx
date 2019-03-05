// @flow
import * as React from 'react';
import smoothscroll from 'smoothscroll-polyfill';

import Header from './Header';
import Footer from './Footer';

import { GlobalStyle } from '../../styles/global';

import type { ImageSharp } from '../../../entities/types';

type Props = {
  children: (any) => React.Element<any>,
  logoImage: ImageSharp,
};

export default class Layout extends React.Component<Props> {
  componentDidMount() {
    // windowを触るので、ssr中は実行しないようにここで実行
    smoothscroll.polyfill();
  }

  render() {
    const { children, logoImage } = this.props;

    return (
      <React.Fragment>
        <GlobalStyle />
        <Header logoImage={logoImage} />
        <main>{children}</main>
        <Footer />
      </React.Fragment>
    );
  }
}

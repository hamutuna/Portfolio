// @flow
import * as React from 'react';
import smoothscroll from 'smoothscroll-polyfill';

import Header from './Header';
import Footer from './Footer';

import { GlobalStyle } from '../../styles/global';

import type { ImageSharp, Work } from '../../../entities/types';

type Props = {
  children: (any) => React.Element<any>,
  logoImage: ImageSharp,
  works: [Work],
};

export default class Layout extends React.Component<Props> {
  componentDidMount() {
    // windowを触るので、ssr中は実行しないようにここで実行
    smoothscroll.polyfill();
  }

  render() {
    const { children, logoImage, works } = this.props;

    return (
      <React.Fragment>
        <GlobalStyle />
        <Header works={works} logoImage={logoImage} />
        <main>{children}</main>
        <Footer />
      </React.Fragment>
    );
  }
}

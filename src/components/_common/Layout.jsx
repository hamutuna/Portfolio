// @flow
import * as React from 'react';
import smoothscroll from 'smoothscroll-polyfill';

import Header from './Header';
import Footer from './Footer';
import Sprite from './Sprite';

import { GlobalStyle } from '../../styles/global';

import type { ImageSharp } from '../../../entities/types';

type Props = {
  children: (any) => React.Element<any>,
  pageTopImage: ImageSharp,
};

export default class Layout extends React.Component<Props> {
  componentDidMount() {
    // windowを触るので、ssr中は実行しないようにここで実行
    smoothscroll.polyfill();
  }

  render() {
    const { children, pageTopImage } = this.props;

    return (
      <React.Fragment>
        <GlobalStyle />
        <Sprite />
        <Header />
        <main>{children}</main>
        <Footer pageTopImage={pageTopImage} />
      </React.Fragment>
    );
  }
}

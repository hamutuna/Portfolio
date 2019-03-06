// @flow
import * as React from 'react';
import smoothscroll from 'smoothscroll-polyfill';

import Header from './Header';
import Footer from './Footer';

import { GlobalStyle } from '../../styles/global';

import type { ImageSharp, PageLink } from '../../../entities/types';

type Props = {
  children: (any) => React.Element<any>,
  logoImage: ImageSharp,
  links: [PageLink],
};

export default class Layout extends React.Component<Props> {
  componentDidMount() {
    // windowを触るので、ssr中は実行しないようにここで実行
    smoothscroll.polyfill();
  }

  render() {
    const { children, logoImage, links } = this.props;

    return (
      <React.Fragment>
        <GlobalStyle />
        <Header links={links} logoImage={logoImage} />
        <main>{children}</main>
        <Footer />
      </React.Fragment>
    );
  }
}

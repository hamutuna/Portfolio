// @flow
import styled from 'styled-components';
import Img from 'gatsby-image';

import { headerHeight, underFirstView } from '../../../styles/var';

export const FirstView = styled.section`
  width: 100vw;
  height: calc(100vh - ${headerHeight} - ${underFirstView});
  background-color: lightgray;
`;

export const Image = styled(Img).attrs({
  style: {
    width: '100vw',
    height: `calc(100vh - ${headerHeight} - ${underFirstView})`,
  },
  imgStyle: {
    objectFit: 'contain',
  },
})``;

export const FloatWrapper = styled.div`
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Copy = styled.h1``;

// @flow
import styled, { css } from 'styled-components';

import { row } from '../../styles/common';
import { headerHeight, underFirstView } from '../../styles/var';
import Img from 'gatsby-image';

export const FirstView = styled.div`
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

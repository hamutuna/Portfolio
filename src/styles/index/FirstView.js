// @flow
import styled from 'styled-components';
import Img from 'gatsby-image';

import { headerHeight, underFirstView } from '../../styles/var';

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

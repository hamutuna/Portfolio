// @flow
import styled from 'styled-components';
import Img from 'gatsby-image';

import { column, row } from '../../common';
import { headerHeight, underFirstView, colors } from '../../var';

export const FirstView = styled.section`
  ${column}
  width: 100vw;
  height: calc(100vh - ${headerHeight} - ${underFirstView});
  background-color: ${colors.firstViewBg};
`;

const size = 184;

export const Image = styled(Img).attrs({
  style: {
    width: `${size}px`,
    height: `${size}px`,
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

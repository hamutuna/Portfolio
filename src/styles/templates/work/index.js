// @flow
import styled from 'styled-components';
import Img from 'gatsby-image';

import { column } from '../../../styles/common';
import { pc, headerHeight, underFirstView } from '../../../styles/var';

export const Wrapper = styled.div`
  ${column};
  margin: 0 16px;

  ${pc} {
    margin: 0 128px;
    text-align: center;
  }
`;

export const FirstView = styled.div`
  height: calc(100vh - ${headerHeight} - ${underFirstView});
  width: 100vw;
  background-color: lightgray;
`;

export const TopImage = styled(Img).attrs({
  style: {
    width: '100vw',
    height: `calc(100vh - ${headerHeight} - ${underFirstView})`,
  },
})``;

export const DocImage = styled(Img).attrs({
  style: {
    width: '100vw',
    height: '800px',
  },
})``;

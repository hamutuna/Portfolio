// @flow
import styled from 'styled-components';
import Img from 'gatsby-image';

import { column } from '../../common';
import { pc, headerHeight, underFirstView, weights } from '../../var';

export const FirstView = styled.div`
  height: calc(100vh - ${headerHeight} - ${underFirstView});
  width: 100vw;
  background-color: lightgray;
`;

export const FirstViewImage = styled(Img).attrs({
  style: {
    width: '100vw',
    height: `calc(100vh - ${headerHeight} - ${underFirstView})`,
  },
})``;

export const Article = styled.section`
  ${column};
  align-items: flex-start;
  padding: 0 28px;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-top: 28px;
`;

export const Position = styled.h2`
  font-size: 16px;
  margin-top: 24px;
`;

export const PositionAndDate = styled.h2`
  font-size: 14px;
  font-weight: ${weights.regular};
  margin-top: 8px;
  font-weight: normal;
`;

export const DocImage = styled(Img).attrs({
  style: {
    width: '100vw',
    height: '800px',
  },
})``;

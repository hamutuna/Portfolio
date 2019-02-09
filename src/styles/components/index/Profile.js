// @flow
import styled from 'styled-components';
import Img from 'gatsby-image';

import { column, row } from '../../common';
import { pc } from '../../var';

import Svg from '../../../components/_common/Svg';

export const Section = styled.section`
  ${column};
  padding: 0 34px;

  ${pc} {
    padding: 0 248px;
  }
`;

export const Title = styled.h1`
  margin-top: 92px;
`;

export const Avatar = styled(Img).attrs({
  style: {
    width: '212px',
    height: '212px',
  },
})``;

const iconSize = 72;

export const IconWrapper = styled.div`
  ${row};
  margin-top: 42px;
  width: ${iconSize * 2 + 15 * 2}px;
  justify-content: space-between;
`;

export const TwitterIcon = styled(Img).attrs({
  style: {
    width: '32px',
    height: '32px',
  },
})``;

export const Description = styled.p`
  margin-top: 66px;

  ${pc} {
    text-align: center;
    min-width: 330px;
  }
`;

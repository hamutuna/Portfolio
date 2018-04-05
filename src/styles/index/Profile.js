// @flow
import styled from 'styled-components';

import { column, row, circle } from '../../styles/common';
import { pc } from '../../styles/var';

import Svg from '../../components/_common/Svg';

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

export const Image = styled.img`
  background-color lightgray;
  ${circle(212)};
`;

const iconSize = 72;

export const IconWrapper = styled.div`
  ${row};
  margin-top: 42px;
  width: ${iconSize * 2 + 15 * 2}px;
  justify-content: space-between;
`;

export const FBIcon = styled.img`
  width: ${iconSize}px;
  height: ${iconSize}px;
`;

export const MailIcon = styled(Svg)`
  width: ${iconSize}px;
  height: ${iconSize}px;
`;

export const Description = styled.p`
  margin-top: 66px;

  ${pc} {
    text-align: center;
    min-width: 330px;
  }
`;

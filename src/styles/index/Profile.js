// @flow
import styled from 'styled-components';

import { column, row, circle } from '../../styles/common';

export const Section = styled.section`
  ${column};
  padding: 0 34px;
`;

export const Title = styled.h1`
  margin-top: 92px;
`;

export const Image = styled.img`
  background-color lightgray;
  ${circle(212)};
`;

export const IconWrapper = styled.div`
  ${row};
  margin-top: 42px;
`;

export const Icon = styled.img`
  background-color gray;
  width: 72px;
  height: 72px;

  &:nth-child(1) {
    margin-right: 15px;
  }

  &:nth-child(2) {
    margin-left: 15px;
  }
`;

export const Description = styled.p`
  margin-top: 66px;
`;

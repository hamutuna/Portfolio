// @flow
import styled from 'styled-components';
import { dashedLine } from '../../common';

export const Section = styled.section`
  margin-top: 60px;
  width: 100%;
`;

export const HorizontalLine = styled.div`
  ${dashedLine}
`;

export const Title = styled.h2`
  font-size: 12px;
  font-weight: normal;
  margin-top: 24px;
`;

export const Description = styled.p`
  font-size: 12px;
  margin-top: 8px;
`;

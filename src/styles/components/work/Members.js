// @flow
import styled from 'styled-components';
import { dashedLine } from '../../common';
import { wide, weights } from '../../var';

export const Section = styled.section`
  margin-top: 60px;
  width: 100%;

  ${wide} {
    margin-top: 140px;
  }
`;

export const HorizontalLine = styled.div`
  ${dashedLine}
`;

export const Title = styled.h2`
  font-size: 12px;
  font-weight: ${weights.regular};
  margin-top: 24px;

  ${wide} {
    font-size: 16px;
    margin-top: 72px;
  }
`;

export const Description = styled.p`
  font-size: 12px;
  font-weight: ${weights.regular};
  margin-top: 8px;

  ${wide} {
    font-size: 16px;
    line-height: 25px;
  }
`;

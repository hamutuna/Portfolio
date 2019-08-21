// @flow
import styled from 'styled-components';
import { wide, weights } from '../../var';

export const Text = styled.p`
  font-size: 14px;
  font-weight: ${weights.regular};
  margin-top: 16px;
  line-height: 26px;

  ${wide} {
    font-size: 16px;
    line-height: 29px;
    letter-spacing: 0.01em;
  }
`;

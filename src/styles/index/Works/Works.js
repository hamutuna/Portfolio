// @flow
import styled from 'styled-components';

import { row, column } from '../../common';

export const Section = styled.section`
  ${column};
`;

export const Description = styled.p`
  align-self: left;
`;

export const WorksWrapper = styled.section`
  width: 100%;
  ${row};
  flex-wrap: wrap;
`;

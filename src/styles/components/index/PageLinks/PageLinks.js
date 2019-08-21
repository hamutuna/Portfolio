// @flow
import styled from 'styled-components';

import { column } from '../../../common';
import { marginHorizontal } from '../../../var';

export const Section = styled.section`
  ${column};
  margin: 0 ${marginHorizontal.wide}px;
  margin-top: 96px;
  align-items: flex-start;
`;

export const Title = styled.h1`
  font-size: 28px;
`;

export const WorksWrapper = styled.section`
  width: 100%;
`;

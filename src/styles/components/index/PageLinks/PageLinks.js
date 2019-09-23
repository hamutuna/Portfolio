// @flow
import styled from 'styled-components';

import { column } from '../../../common';
import { wide, marginHorizontal } from '../../../var';
import { title1Size } from '../var';

export const Section = styled.section`
  ${column};
  margin: 0 28px;
  margin-top: 96px;
  align-items: flex-start;

  ${wide} {
    margin: 0 ${marginHorizontal.wide}px;
  }
`;

export const Title = styled.h1`
  font-size: ${title1Size.base}px;

  ${wide} {
    font-size: ${title1Size.wide}px;
  }
`;

export const WorksWrapper = styled.section`
  width: 100%;
`;

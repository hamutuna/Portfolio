// @flow
import styled from 'styled-components';

import { column } from '../../common';

import _Skill from '../../../components/index/Skills/Skill';

export const Section = styled.section`
  ${column};
`;

export const Title = styled.h1``;

export const Skill = styled(_Skill)`
  margin-top: 96px;

  &:nth-of-type(1) {
    margin-top: 0;
  }
`;

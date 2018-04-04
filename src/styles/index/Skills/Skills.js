// @flow
import styled, { css } from 'styled-components';

import { column, row } from '../../common';
import { pc } from '../../../styles/var';

import _Skill from '../../../components/index/Skills/Skill';

export const Section = styled.section`
  ${column};
`;

export const Title = styled.h1``;

export const SkillsWrapper = styled.div`
  ${pc} {
    ${row};
    margin-top: 96px;

    &:nth-of-type(1) {
      margin-top: 0;
    }
  }
`;

export const Skill = styled(_Skill)`
  ${(props) => {
    if (props.index === 0) {
      return css`
        margin-top: 0;
      `;
    }

    return css`
      margin-top: 96px;
    `;
  }};

  ${pc} {
    margin-top: 0;
    margin-left: 78px;

    &:first-child {
      margin-left: 0;
    }
  }
`;

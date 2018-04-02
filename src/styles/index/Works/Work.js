// @flow
import styled, { css } from 'styled-components';

import { pc } from '../../var';

export const Work = styled.a`
  height: 490px;
  width: calc(100% - 2px);
  background-color: lightgray;
  border: 1px solid gray;

  ${(props) => {
    if (props.isHalf) {
      return css`
        width: calc(50% - 2px);
      `;
    }

    return css``;
  }};

  ${pc} {
    width: calc(50% - 2px);
  }
`;

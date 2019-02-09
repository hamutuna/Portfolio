// @flow
import styled, { css } from 'styled-components';
import Img from 'gatsby-image';

import { pc } from '../../../var';

export const Work = styled.a`
  margin-top: ${(props: any) => {
    if (props.index === 0) {
      return '24px';
    }

    return '60px';
  }};

  ${pc} {
    width: calc(50% - 2px);
  }
`;

export const Image = styled(Img).attrs({
  style: {
    width: '100%',
    height: '180px',
  },
})``;

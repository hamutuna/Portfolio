// @flow
import styled, { css } from 'styled-components';
import Img from 'gatsby-image';

import { pc, colors } from '../../../var';

export const Work = styled.a`
  display: block;
  margin-top: ${(props: any) => {
    if (props.index === 0) {
      return '24px';
    }

    return '60px';
  }};
`;

export const Title = styled.h2`
  margin-top: 8px;
  font-size: 16px;
  font-weight: bold;
  color: ${colors.black};
`;

export const Description = styled.p`
  margin-top: 8px;
  font-size: 14px;
  color: ${colors.black};
`;

export const Image = styled(Img).attrs({
  style: {
    width: '100%',
    height: '180px',
  },
})``;

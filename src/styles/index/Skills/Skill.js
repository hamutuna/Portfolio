// @flow
import styled from 'styled-components';
import Img from 'gatsby-image';

import { column } from '../../../styles/common';

export const Section = styled.section`
  ${column};
`;

export const Image = styled(Img).attrs({
  style: {
    width: '212px',
    height: '212px',
  },
})``;

export const Description = styled.p`
  margin-top: 66px;
`;

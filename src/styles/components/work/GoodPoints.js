// @flow
import styled from 'styled-components';
import Img from 'gatsby-image';
import { weights } from '../../var';

export const AnchorPoint = styled.div`
  margin-top: 60px;
`;

export const Section = styled.section`
  margin-top: ${(props) => (props.index === 0 ? '16px' : '28px')};
`;

export const GoodPointsTitle = styled.h2`
  font-size: 16px;
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: ${weights.bold};
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: ${weights.regular};
  margin-top: 8px;
  line-height: 26px;
`;

export const Image = styled(Img).attrs({
  style: {
    width: '480px',
    height: '480px',
  },
})``;

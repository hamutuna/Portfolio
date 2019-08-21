// @flow
import styled, { css } from 'styled-components';
import Img from 'gatsby-image';
import { row } from '../../common';
import { wide, weights } from '../../var';

export const AnchorPoint = styled.div`
  margin-top: 60px;
`;

export const Section = styled.section`
  margin-top: ${(props) => (props.index === 0 ? '16px' : '28px')};

  ${wide} {
    ${row};
    align-items: flex-start;

    ${(props: any) => {
    if (props.index % 2 !== 0) {
      return css`
          flex-flow: row-reverse;
        `;
    }
  }};
  }
`;

export const GoodPointsTitle = styled.h2`
  font-size: 16px;
`;

export const Scripts = styled.div`
  flex: 1;
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: ${weights.bold};

  ${wide} {
    margin-top: 36px;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: ${weights.regular};
  margin-top: 8px;
  line-height: 26px;
`;

export const Images = styled.div`
  flex: 1;
`;

export const Image = styled(Img).attrs({
  style: {
    width: '480px',
    height: '480px',
  },
})`
  display: none;

  ${wide} {
    display: block;
  }
`;

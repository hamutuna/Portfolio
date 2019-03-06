// @flow
import styled from 'styled-components';
import Img from 'gatsby-image';

export const AnchorPoint = styled.div`
  margin-top: 60px;
`;

export const Image = styled(Img).attrs({
  style: {
    width: 'calc(100vw - 28px * 2)',
    height: 'calc((100vw - 28px * 2) * 0.574)',
  },
})`
  margin-top: ${(props: any) => (props.index === 0 ? 0 : '16px')};
  border-radius: 8px;
`;

// @flow
import styled from 'styled-components';
import Img from 'gatsby-image';

export const AnchorPoint = styled.div`
  margin-top: 60px;
`;

export const Image = styled(Img).attrs({
  style: {
    width: '100%',
    height: '180px',
  },
})`
  margin-top: ${(props: any) => (props.index === 0 ? 0 : '16px')};
  border-radius: 8px;
`;

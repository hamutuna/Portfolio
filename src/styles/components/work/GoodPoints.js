// @flow
import styled from 'styled-components';

export const AnchorPoint = styled.div`
  margin-top: 60px;
`;

export const Section = styled.section`
  margin-top: ${(props: any) => (props.index === 0 ? 0 : '16px')};
`;

export const Title = styled.h2`
  font-size: 14px;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 8px;
`;

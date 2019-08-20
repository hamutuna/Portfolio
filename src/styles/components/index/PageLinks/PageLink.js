// @flow
import styled, { css } from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import { colors, weights } from '../../../var';
import Svg from '../../../../components/_common/Svg';

export const WorkExternal = styled.a`
  display: block;
  margin-top: ${(props: any) => {
    if (props.index === 0) {
      return '24px';
    }

    return '60px';
  }};
  border-radius: 8px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.25s ease-out;
  &:active {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.25);
  }
`;

export const Work = styled(Link)`
  display: block;
  margin-top: ${(props: any) => {
    if (props.index === 0) {
      return '24px';
    }

    return '60px';
  }};
  border-radius: 8px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.25s ease-out;
  &:active {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.25);
  }
`;

export const Image = styled(Img).attrs({
  style: {
    width: '100%',
    height: '180px',
  },
})`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

export const Captions = styled.section`
  padding: 8px;
`;

export const Title = styled.h2`
  font-size: 16px;
  color: ${colors.black};
`;

export const Description = styled.p`
  margin-top: 8px;
  font-size: 14px;
  font-weight: ${weights.regular};
  color: ${colors.black};
`;

export const ExternalIcon = styled(Svg)`
  width: 12px;
  height: 12px;
  margin-left: 4px;
  margin-bottom: 2px;
`;

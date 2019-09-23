// @flow
import styled, { css } from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import { wide, colors, weights } from '../../../var';
import { row } from '../../../common';
import Svg from '../../../../components/_common/Svg';
import { title2Size } from '../var';

const imgWideHeight = 480;

const wrapperStyle = css`
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

  ${wide} {
    box-shadow: none;
    ${row};
    justify-content: space-between;
    min-height: ${imgWideHeight}px;

    ${(props: any) => {
    if (props.index % 2 === 0) {
      return css`
          flex-flow: row-reverse;
        `;
    }
  }};
    margin-top: ${(props: any) => {
    if (props.index === 0) {
      return '140px';
    }

    return '140px';
  }};

    &:hover {
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    }
  }
`;

export const WorkExternal = styled.a`
  ${wrapperStyle};
`;

export const Work = styled(Link)`
  ${wrapperStyle};
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  ${wide} {
    width: 480px;
    height: ${imgWideHeight}px;
    border-radius: 8px;
  }
`;

export const Image = styled(Img).attrs({
  style: {
    width: '100%',
    height: '100%',
  },
})``;

export const Captions = styled.section`
  padding: 8px;
`;

export const Title = styled.h2`
  font-size: ${title2Size}px;
  color: ${colors.black};

  ${wide} {
    font-size: ${title2Size.wide}px;
  }
`;

export const Description = styled.p`
  margin-top: 8px;
  font-size: 14px;
  font-weight: ${weights.regular};
  color: ${colors.black};

  ${wide} {
    font-weight: ${weights.medium};
  }
`;

export const ExternalIcon = styled(Svg)`
  width: 12px;
  height: 12px;
  margin-left: 4px;
  margin-bottom: 2px;
`;

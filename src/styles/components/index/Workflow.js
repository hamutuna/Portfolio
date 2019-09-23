// @flow
import styled from 'styled-components';
import Img from 'gatsby-image';

import { column, row } from '../../common';
import { wide, colors, weights, marginHorizontal } from '../../var';
import Svg from '../../../components/_common/Svg';
import { title1Size } from './var';

export const Section = styled.section`
  ${column}
  align-items: flex-start;
  margin: 28px;

  ${wide} {
    margin: 268px ${marginHorizontal.wide}px;
  }
`;

export const Title = styled.h1`
  font-size: ${title1Size.base}px;

  ${wide} {
    font-size: ${title1Size.wide}px;
  }
`;

export const Wrapper = styled.ul`
  margin-top: 24px;

  ${wide} {
    ${row}
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    margin-top: 0;
  }
`;

export const ListItem = styled.li`
  ${column}
  align-items: flex-start;
  margin-top: ${(props: any) => (props.index === 0 ? 0 : '8px')};

  ${wide} {
    max-width: 226px;
    min-width: 226px;
    margin-top: 0;
  }
`;

export const ItemTitleWrapper = styled.div`
  ${row}
  align-items: flex-start;

  ${wide} {
    ${column}
    align-items: flex-start;
  }
`;

const markSize = 32;

export const ItemTitleMark = styled.div`
  ${row}
  align-items: center;
  width: ${markSize}px;
  height: ${markSize}px;
  background-color: ${colors.wood};
  border-radius: 50%;
  margin-right: 16px;
`;

export const ItemTitle = styled.h2`
  font-size: 16px;

  ${wide} {
    font-size: 24px;
    margin-top: 36px;
  }
`;

export const SvgIcon = styled(Svg)`
  width: 18px;
  height: 18px;
`;

export const Icon = styled(Img).attrs({
  style: {
    width: '24px',
    height: '24px',
  },
})``;

export const ItemDescriptionWrapper = styled.div`
  ${row}
  align-items: flex-start;
  margin-top: 8px;
`;

const lineWidth = '4px';

export const VerticalLine = styled.div`
  margin-left: calc(${markSize / 2}px - ${lineWidth} / 2);
  background-color: ${colors.wood};
  width: ${(props: any) => (props.isLast ? 0 : lineWidth)};
  min-width: ${(props: any) => (props.isLast ? 0 : lineWidth)};
  align-self: stretch;

  ${wide} {
    display: none;
  }
`;

export const ItemDescription = styled.p`
  font-size: 14px;
  font-weight: ${weights.regular};
  margin-left: 28px;
  margin-bottom: ${(props: any) => (props.isLast ? 0 : '24px')};
  line-height: 23px;

  ${wide} {
    margin-left: 0;
    font-size: 16px;
    line-height: 162.8%;
    letter-spacing: 0.01em;
  }
`;

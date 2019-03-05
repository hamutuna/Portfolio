// @flow
import styled from 'styled-components';
import Img from 'gatsby-image';

import { column, row } from '../../common';
import { colors } from '../../var';
import Svg from '../../../components/_common/Svg';

export const Section = styled.section`
  ${column}
  align-items: flex-start;
  margin: 28px;
`;

export const Title = styled.h1`
  font-size: 28px;
`;

export const Wrapper = styled.ul`
  margin-top: 24px;
`;

export const ListItem = styled.li`
  ${column}
  align-items: flex-start;
  margin-top: ${(props: any) => (props.index === 0 ? 0 : '8px')};
`;

export const ItemTitleWrapper = styled.div`
  ${row}
  align-items: flex-start;
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
`;

export const ItemDescription = styled.p`
  font-size: 14px;
  margin-left: 28px;
  margin-bottom: ${(props: any) => (props.isLast ? 0 : '24px')};
`;

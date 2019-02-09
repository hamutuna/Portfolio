// @flow
import styled from 'styled-components';
import Img from 'gatsby-image';

import { column, row } from '../../common';
import { colors } from '../../var';

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

const markSize = 24;

export const ItemTitleMark = styled.div`
  width: ${markSize}px;
  height: ${markSize}px;
  background-color: #c4c4c4;
  border-radius: 50%;
  margin-right: 16px;
`;

export const ItemTitle = styled.h2`
  font-size: 16px;
`;

export const ItemDescriptionWrapper = styled.div`
  ${row}
  align-items: flex-start;
  margin-top: 8px;
`;

export const VerticalLine = styled.div`
  margin-left: ${markSize / 2}px;
  background-color: ${colors.black};
  width: ${(props: any) => (props.isLast ? 0 : '1px')};
  min-width: ${(props: any) => (props.isLast ? 0 : '1px')};
  align-self: stretch;
`;

export const ItemDescription = styled.p`
  font-size: 14px;
  margin-left: 28px;
  margin-bottom: ${(props: any) => (props.isLast ? 0 : '24px')};
`;

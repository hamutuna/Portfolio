// @flow
import styled from 'styled-components';
import Img from 'gatsby-image';

import { column, row } from '../../common';
import { pc, colors } from '../../var';

import Svg from '../../../components/_common/Svg';

export const Section = styled.section`
  ${column};
  margin: 0 28px;
  margin-top: 96px;
  align-items: flex-start;
`;

const dashLine = 4;
const dashSpan = 8;

export const HorizontalLine = styled.div`
  background-image: linear-gradient(
    to left,
    ${colors.black} ${(dashLine / (dashLine + dashSpan)) * 100}%,
    transparent ${(dashLine / (dashLine + dashSpan)) * 100}%,
    transparent 100%
  );
  background-size: ${dashLine + dashSpan}px ${dashLine + dashSpan}px;
  height: 1px;
  width: 100%;
`;

export const Avatar = styled(Img).attrs({
  style: {
    width: '212px',
    height: '212px',
  },
})`
  margin-top: 28px;
  align-self: center;
`;

export const NameAndSocial = styled.div`
  ${row};
  margin-top: 8px;
  width: 100%;
`;

export const Name = styled.h2`
  font-size: 28px;
`;

export const Social = styled.a`
  ${row}
  margin-left: auto;
`;

const iconSize = '32px';

export const TwitterIcon = styled(Img).attrs({
  style: {
    width: `${iconSize}`,
    height: `${iconSize}`,
  },
})``;

export const TwitterName = styled.p`
  margin-left: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.black};
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 24px;
`;

export const HopeTitle = styled.h3`
  font-size: 16px;
  margin-top: 32px;
`;

export const HopeDescription = styled.p`
  font-size: 14px;
  margin-top: 8px;
`;

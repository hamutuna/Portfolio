// @flow
import styled from 'styled-components';
import Img from 'gatsby-image';

import { column, row, dashedLine } from '../../common';
import { colors } from '../../var';

export const Section = styled.section`
  ${column};
  margin: 0 28px;
  margin-top: 96px;
  align-items: flex-start;
`;

export const HorizontalLine = styled.div`
  ${dashedLine}
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

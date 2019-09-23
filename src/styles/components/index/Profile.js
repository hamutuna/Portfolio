// @flow
import styled from 'styled-components';
import Img from 'gatsby-image';

import { column, row, dashedLine } from '../../common';
import { wide, colors, weights, marginHorizontal } from '../../var';
import { title1Size } from './var';

export const Section = styled.section`
  ${column};
  margin: 0 28px;
  margin-top: 96px;
  align-items: flex-start;

  ${wide} {
    ${row};
    margin: 0 ${marginHorizontal.wide}px;
    margin-top: 242px;
  }
`;

export const HorizontalLine = styled.div`
  ${dashedLine}

  ${wide} {
    display: none;
  }
`;

export const Images = styled.div`
  width: 100%;
  ${column};
  align-items: center;

  ${wide} {
    flex: 1;
  }
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

export const Scripts = styled.div`
  ${wide} {
    flex: 1;
  }
`;

export const NameAndSocial = styled.div`
  ${row};
  margin-top: 8px;
  width: 100%;

  ${wide} {
    margin-top: 0;
  }
`;

export const Name = styled.h2`
  font-size: ${title1Size.base}px;

  ${wide} {
    font-size: ${title1Size.wide}px;
  }
`;

export const Social = styled.a`
  ${row}
  margin-left: auto;
  color: ${colors.black};
  &:active {
    text-decoration: underline;
  }
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
  color: ${colors.black};
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: ${weights.regular};
  margin-top: 24px;
  line-height: 23px;

  ${wide} {
    margin-top: 16px;
    font-size: 16px;
    line-height: 25px;
  }
`;

export const HopeTitle = styled.h3`
  font-size: 16px;
  margin-top: 32px;

  ${wide} {
    font-size: 24px;
  }
`;

export const HopeDescription = styled.p`
  font-size: 14px;
  font-weight: ${weights.regular};
  margin-top: 8px;
  line-height: 23px;

  ${wide} {
    font-size: 16px;
    line-height: 25px;
  }
`;

export const SkillTitle = styled.h3`
  font-size: 16px;
  margin-top: 32px;

  ${wide} {
    font-size: 24px;
  }
`;

export const SkillDescription = styled.p`
  font-size: 14px;
  font-weight: ${weights.regular};
  margin-top: 8px;
  line-height: 23px;

  ${wide} {
    font-size: 16px;
    line-height: 25px;
  }
`;

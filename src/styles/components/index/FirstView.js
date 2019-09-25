// @flow
import styled from 'styled-components';
import Img from 'gatsby-image';

import { column } from '../../common';
import { wide, headerHeight, underFirstView } from '../../var';
import { title1Size } from './var';

export const FirstView = styled.section`
  ${column}
  width: 100vw;
  height: calc(100vh - ${headerHeight} - ${underFirstView});
`;

export const BgImage = styled(Img).attrs({
  style: {
    width: '100%',
    height: '100%',
  },
})``;

const textMargin = 30;

export const FloatText = styled.div`
  position: absolute;
  z-index: 0;
  left: 50%;
  top: calc(50% + 40px);
  transform: translate(-50%, -50%);
  color: #6b4320;
  font-size: ${title1Size.base}px;
  width: calc(100vw - ${textMargin * 2}px);
  max-width: 800px;

  ${wide} {
    font-size: ${title1Size.wide}px;
    max-width: 980px;
  }
`;

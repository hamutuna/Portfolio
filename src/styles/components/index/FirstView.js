// @flow
import styled from 'styled-components';

import { column } from '../../common';
import { wide, headerHeight, underFirstView } from '../../var';
import { title1Size } from './var';
import Svg from '../../../components/_common/Svg';

const componentHeight = `calc(100vh - ${headerHeight} - ${underFirstView})`;

export const FirstView = styled.section`
  ${column}
  width: 100vw;
  max-width: 100%;
  height: ${componentHeight};
`;

export const HeartIcon = styled(Svg)`
  position: absolute;
  transform: translateY(-50%);
  width: 189px;
  height: 145px;
`;

const color1 = '#FAF2E4';
const color2 = '#F5E7E3';

export const BGWrapper = styled.div`
  display: flex;
  height: ${componentHeight};
  max-width: 100%;
`;

const getVw = (position: string, mq: string): string => {
  if (mq !== 'base' && mq !== 'wide') {
    throw new Error('mq is invalid');
  }
  const widthRatio = {
    base: [4, 4, 2],
    wide: [4, 2, 4],
  };

  if (position === 'left') {
    return `${widthRatio[mq][0] * 10}vw`;
  }
  if (position === 'center') {
    return `${widthRatio[mq][1] * 10}vw`;
  }
  if (position === 'right') {
    return `${widthRatio[mq][2] * 10}vw`;
  }
  throw new Error('position is invalid');
};

export const BGLeft = styled.div`
  background-color: ${color1};
  width: ${getVw('left', 'base')};
  height: 100%;

  ${wide} {
    width: ${getVw('left', 'wide')};
  }
`;

export const BGCenter = styled.div`
  width: 0;
  height: 0;
  background-color: ${color2};
  border-style: solid;
  border-width: 0 ${getVw('center', 'base')} ${componentHeight} 0px;
  border-color: transparent transparent ${color1} transparent;

  ${wide} {
    border-width: 0 ${getVw('center', 'wide')} ${componentHeight} 0px;
  }
`;

export const BGRight = styled.div`
  background-color: ${color2};
  width: ${getVw('right', 'base')};
  height: 100%;

  ${wide} {
    width: ${getVw('right', 'wide')};
  }
`;

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

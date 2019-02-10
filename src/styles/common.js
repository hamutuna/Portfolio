// @flow
import { css } from 'styled-components';
import { colors } from './var';

export const column = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const row = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const circle = (size: number) => css`
  width: ${size}px;
  height: ${size}px;
  border-radius: 50%;
`;

const dashLine = 4;
const dashSpan = 8;
export const dashedLine = () => css`
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

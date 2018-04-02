// @flow
import { css } from 'styled-components';

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

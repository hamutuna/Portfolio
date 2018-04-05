// @flow
import styled from 'styled-components';

import { column } from '../../styles/common';
import { headerHeight, underFirstView } from '../../styles/var';

export const FirstView = styled.div`
  height: calc(100vh - ${headerHeight} - ${underFirstView});
  width: 100vw;
  background-color: lightgray;
`;

export const Wrapper = styled.div`
  ${column};
`;

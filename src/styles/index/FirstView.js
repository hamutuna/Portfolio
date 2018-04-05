// @flow
import styled from 'styled-components';

import { headerHeight, underFirstView } from '../../styles/var';

export const FirstView = styled.div`
  width: 100v;
  height: calc(100vh - ${headerHeight} - ${underFirstView});
  background-color: lightgray;
`;

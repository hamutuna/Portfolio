// @flow
import styled, { css } from 'styled-components';
import Img from 'gatsby-image';

import { pc } from '../../../var';

type Props = any;

const thumbnailHeight = '490px';

export const Work = styled.a`
  height: ${thumbnailHeight};
  width: calc(100% - 2px);
  background-color: lightgray;
  border: 1px solid gray;

  width: ${(props: Props) => {
    if (props.isHalf) {
      return 'calc(50% - 2px)';
    }

    return '';
  }};

  ${pc} {
    width: calc(50% - 2px);
  }
`;

export const Image = styled(Img).attrs({
  style: {
    width: '100%',
    height: thumbnailHeight,
  },
})``;

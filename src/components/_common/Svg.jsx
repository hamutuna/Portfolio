// @flow
import React from 'react';
import styled, { css } from 'styled-components';

const size = {
  jumpToTop: {
    width: 48,
    height: 54,
  },
  mail: {
    width: 68,
    height: 54,
  },
};

type Props = {
  id: $Keys<typeof size>,
  className: string,
};

export default (props: Props) => {
  const { id, className } = props;
  const { width, height } = size[id];

  return (
    <StyledSvg
      preserveAspectRatio="xMidYMid meet"
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      className={className}
    >
      <use xlinkHref={`#${id}`} />
    </StyledSvg>
  );
};

const StyledSvg = styled.svg`
  color: #000;
  ${(props) =>
    css`
      width: ${props.width}px;
      height: ${props.height}px;
    `};
`;

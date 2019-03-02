// @flow
import React from 'react';
import { withPrefix } from 'gatsby';
import { className } from 'postcss-selector-parser';

type Props = {
  id: string,
  className: String,
};

export default (props: Props) => {
  const { className, id } = props;

  return (
    <svg className={className}>
      <use xlinkHref={withPrefix(`/svg/symbol-defs.svg#icon-${id}`)} />
    </svg>
  );
};

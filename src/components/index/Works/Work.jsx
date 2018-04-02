// @flow
import * as React from 'react';

import * as s from '../../../styles/index/Works/Work';

type Props = {
  id: string,
};

export default (props: Props) => {
  const { id } = props;
  const isHalf = id === 'work2' || id === 'work3';

  return <s.Work href={id} isHalf={isHalf} />;
};

// @flow
import * as React from 'react';

type Props = {
  pageContext: {
    id: string,
  },
};

export default (props: Props) => {
  const { pageContext } = props;
  const nth = pageContext.id;

  return <div>work {nth} page!!!</div>;
};

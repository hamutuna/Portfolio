// @flow
import React from 'react';

import * as s from '../../styles/components/work/Description';

type Props = {
  text: string,
};

export default ({ text }: Props) => (
  <s.Text
    dangerouslySetInnerHTML={{
      __html: text,
    }}
  />
);

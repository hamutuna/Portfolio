// @flow
import React from 'react';

import * as s from '../../styles/components/work/Members';
import { anchors } from '../_common/NaviItem';

type Props = {
  text: string,
};

export default ({ text }: Props) => (
  <s.Section>
    <s.HorizontalLine />
    <s.Title id={anchors.members}>Project member</s.Title>
    <s.Description
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    />
  </s.Section>
);

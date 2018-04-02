// @flow
import * as React from 'react';

import * as s from '../../../styles/index/Skills/Skill';

type Props = {
  title: string,
  className: string,
};

export default (props: Props) => {
  const { title } = props;

  return (
    <s.Section className={props.className}>
      <s.Image />
      <s.Description>{title}</s.Description>
    </s.Section>
  );
};

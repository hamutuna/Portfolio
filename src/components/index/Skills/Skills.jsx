// @flow
import React from 'react';

import * as s from '../../../styles/index/Skills/Skills';

import type { Skill } from '../../../entities/types';

type Props = {
  skills: Skill[],
};

export default (props: Props) => {
  const { skills } = props;

  return (
    <s.Section>
      <s.Title>Skills</s.Title>
      {skills.map((skill) => <s.Skill title={skill.title} key={skill.id} />)}
    </s.Section>
  );
};

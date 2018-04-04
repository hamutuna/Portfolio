// @flow
import React from 'react';

import * as s from '../../../styles/index/Skills/Skills';
import { anchors } from '../../_common/NaviItem';

import type { Skill } from '../../../entities/types';

type Props = {
  skills: Skill[],
};

export default (props: Props) => {
  const { skills } = props;

  return (
    <s.Section>
      <s.Title id={anchors.skills}>Skills</s.Title>
      {skills.map((skill) => <s.Skill skill={skill} key={skill.id} />)}
    </s.Section>
  );
};

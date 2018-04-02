// @flow
import React from 'react';

import * as s from '../../../styles/index/Skills/Skills';

export default () => {
  const skills = ['skill_1', 'skill_2', 'skill_3'];

  return (
    <s.Section>
      <s.Title>Skills</s.Title>
      {skills.map(skill => <s.Skill title={skill} key={skill} />)}
    </s.Section>
  );
};

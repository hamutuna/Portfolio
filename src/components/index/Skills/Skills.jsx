// @flow
import React from 'react';

import * as s from '../../../styles/components/index/Skills/Skills';
import { anchors } from '../../_common/NaviItem';

import type { Skill, ImageSharp } from '../../../entities/types';

type Props = {
  skills: Skill[],
  images: {
    [string]: ImageSharp,
  },
};

export default (props: Props) => {
  const { skills, images } = props;

  const columns = 3;
  const rowChunks = [];
  for (let i = 0; i < skills.length; i += columns) {
    rowChunks.push(skills.slice(i, i + columns));
  }

  return (
    <s.Section>
      <s.Title id={anchors.skills}>Skills</s.Title>
      {rowChunks.map((chunk, i) => (
        <s.SkillsWrapper key={chunk.map((skill) => skill.id).join()}>
          {chunk.map((skill, j) => (
            <s.Skill
              skill={skill}
              image={images[skill.id]}
              key={skill.id}
              index={i * columns + j}
            />
          ))}
        </s.SkillsWrapper>
      ))}
    </s.Section>
  );
};

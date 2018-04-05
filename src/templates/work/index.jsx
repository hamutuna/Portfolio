// @flow
import * as React from 'react';

import type { Work } from '../../entities/types';

type Props = {
  pageContext: {
    work: Work,
  },
};

export default (props: Props) => {
  const { pageContext } = props;
  const { title, description, position, skills, ingenuity } = pageContext.work;

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <h2>担当範囲</h2>
      <p>{position}</p>
      <h2>使用skill</h2>
      {skills.map((skill) => <p key={skill.id}>{skill.title}</p>)}
      <h2>工夫した点</h2>
      <p>{ingenuity}</p>
    </div>
  );
};

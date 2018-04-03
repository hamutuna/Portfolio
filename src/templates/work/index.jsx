// @flow
import * as React from 'react';

type Skill = {
  id: string,
  title: string,
};

type Work = {
  id: string,
  title: string,
  position: string,
  skills: [Skill],
  ingenuity: string,
};

type Props = {
  pageContext: {
    work: Work,
  },
};

export default (props: Props) => {
  const { pageContext } = props;
  const { id, title, position, skills, ingenuity } = pageContext.work;

  return (
    <div>
      <h1>{title}</h1>
      <h2>担当範囲</h2>
      <p>{position}</p>
      <h2>使用skill</h2>
      {skills.map((skill) => <p key={skill.id}>{skill.title}</p>)}
      <h2>工夫した点</h2>
      <p>{ingenuity}</p>
    </div>
  );
};

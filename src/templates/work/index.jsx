// @flow
import * as React from 'react';

type Work = {
  id: string,
  title: string,
  position: string,
  skills: [string],
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
      <p>{skills}</p>
      <h2>工夫した点</h2>
      <p>{ingenuity}</p>
    </div>
  );
};

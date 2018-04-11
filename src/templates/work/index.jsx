// @flow
import * as React from 'react';

import type { Work } from '../../entities/types';
import * as s from '../../styles/works/index';

type Props = {
  pageContext: {
    work: Work,
  },
  data: {},
};

export default (props: Props) => {
  const { pageContext, data } = props;
  const {
    id,
    title,
    description,
    position,
    skills,
    ingenuity,
  } = pageContext.work;
  const image = data[`${id}Image`];

  return (
    <s.Wrapper>
      <s.FirstView image={image}>
        <s.TopImage resolutions={image.resolutions} />
      </s.FirstView>
      <h1>{title}</h1>
      <p>{description}</p>
      <h2>担当範囲</h2>
      <p>{position}</p>
      <h2>使用skill</h2>
      {skills.map((skill) => <p key={skill.id}>{skill.title}</p>)}
      <h2>工夫した点</h2>
      <p>{ingenuity}</p>
    </s.Wrapper>
  );
};

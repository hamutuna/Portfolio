// @flow
import * as React from 'react';

import * as s from '../../../styles/index/Skills/Skill';

import type { Skill as TSkill, ImageSharp } from '../../../entities/types';

import video from '../../../assets/videos/graph.mp4';

type Props = {
  skill: TSkill,
  image: ImageSharp,
  className: string,
};

export default (props: Props) => {
  const { image } = props;
  const { title } = props.skill;

  return (
    <s.Section className={props.className}>
      {/* <s.Image resolutions={image.resolutions} alt={title} /> */}
      <s.GraphVideo src={video} autoPlay playsInline muted />
      <s.Description>{title}</s.Description>
    </s.Section>
  );
};

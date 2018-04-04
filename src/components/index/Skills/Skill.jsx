// @flow
import * as React from 'react';

import * as s from '../../../styles/index/Skills/Skill';

import sketch from '../../../assets/images/skill_sketch.png';
import xd from '../../../assets/images/skill_xd.png';
import photoshop from '../../../assets/images/skill_photoshop.png';
import illustrator from '../../../assets/images/skill_illustrator.png';
import html5 from '../../../assets/images/skill_html5.png';
import css3 from '../../../assets/images/skill_css3.png';
import zeplin from '../../../assets/images/skill_zeplin.png';
import github from '../../../assets/images/skill_github.png';
import wordpress from '../../../assets/images/skill_wordpress.png';

import type { Skill as TSkill } from '../../../entities/types';

type Props = {
  skill: TSkill,
  className: string,
};

const imgMap = {
  sketch,
  xd,
  photoshop,
  illustrator,
  html5,
  css3,
  zeplin,
  github,
  wordpress,
};

export default (props: Props) => {
  const { id, title } = props.skill;

  return (
    <s.Section className={props.className}>
      <s.Image src={imgMap[id]} alt={title} />
      <s.Description>{title}</s.Description>
    </s.Section>
  );
};

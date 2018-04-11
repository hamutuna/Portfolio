// @flow
import * as React from 'react';

import FirstView from '../components/index/FirstView';
import Profile from '../components/index/Profile';
import Skills from '../components/index/Skills/Skills';
import Works from '../components/index/Works/Works';

import type { Work, Skill, ImageSharp } from '../entities/types';

type JsonEntitiy<T> = {
  edges: [
    {
      node: T,
    },
  ],
};

type Props = {
  data: {
    allSkillsJson: JsonEntitiy<Skill>,
    allWorksJson: JsonEntitiy<Work>,
    firstViewImage: ImageSharp,
    profileImage: ImageSharp,
  },
};

const resolveJson = <T: { id: string }>(
  data,
  json: JsonEntitiy<T>,
): [T[], { [string]: ImageSharp }] => {
  const entities = json.edges.map((edge) => edge.node);
  const images = (() => {
    const imgs = {};
    entities.forEach((entity) => {
      imgs[entity.id] = data[`${entity.id}Image`];
    });
    return imgs;
  })();

  return [entities, images];
};

export default ({ data }: Props) => {
  const { allSkillsJson, allWorksJson, firstViewImage, profileImage } = data;

  const [skills, skillImages] = resolveJson(data, allSkillsJson);
  const [works, workImages] = resolveJson(data, allWorksJson);

  return (
    <React.Fragment>
      <FirstView image={firstViewImage} />
      <Profile image={profileImage} />
      <Skills skills={skills} images={skillImages} />
      <Works works={works} images={workImages} />
    </React.Fragment>
  );
};

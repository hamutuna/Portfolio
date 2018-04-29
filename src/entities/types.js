// @flow

export type Skill = {
  id: string,
  title: string,
};

export type Work = {
  id: string,
  title: string,
  description: string,
  position: string,
  skills: [Skill],
  detail: string,
  documents: string[],
};

export type ImageSharp = {
  resolutions: {},
};

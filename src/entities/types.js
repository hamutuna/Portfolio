// @flow

export type Skill = {
  id: string,
  title: string,
};

export type Work = {
  id: string,
  title: string,
  position: string,
  skills: [Skill],
  ingenuity: string,
};

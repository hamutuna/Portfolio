// @flow

export type Workflow = {
  id: string,
  title: string,
  description: string,
};

export type GoodPoints = {
  id: string,
  title: string,
  description: string,
};

export type Work = {
  id: string,
  title: string,
  description: string,
  position: string,
  goodPoints: [GoodPoints],
  members: string,
};

export type PageLink = {
  id: string,
  url: string,
  title: string,
  positionAndDate: string,
  work: Work,
  customSummary?: string,
};

export type ImageSharp = {
  resolutions: {},
};

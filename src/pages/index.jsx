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

export const query = graphql`
  query GetIndexContents {
    allWorksJson {
      edges {
        node {
          id
        }
      }
    }
    allSkillsJson {
      edges {
        node {
          id
          title
        }
      }
    }
    firstViewImage: imageSharp(id: { regex: "/first_view/" }) {
      ...ImgFragment
    }
    profileImage: imageSharp(id: { regex: "/avatar/" }) {
      ...ImgFragment
    }
    sketchImage: imageSharp(id: { regex: "/assets/images/skill_sketch/" }) {
      ...ImgFragment
    }
    xdImage: imageSharp(id: { regex: "/xd/" }) {
      ...ImgFragment
    }
    photoshopImage: imageSharp(id: { regex: "/photoshop/" }) {
      ...ImgFragment
    }
    illustratorImage: imageSharp(id: { regex: "/illustrator/" }) {
      ...ImgFragment
    }
    html5Image: imageSharp(id: { regex: "/html5/" }) {
      ...ImgFragment
    }
    css3Image: imageSharp(id: { regex: "/css3/" }) {
      ...ImgFragment
    }
    zeplinImage: imageSharp(id: { regex: "/zeplin/" }) {
      ...ImgFragment
    }
    githubImage: imageSharp(id: { regex: "/github/" }) {
      ...ImgFragment
    }
    wordpressImage: imageSharp(id: { regex: "/wordpress/" }) {
      ...ImgFragment
    }
    project1Image: imageSharp(id: { regex: "/work_project1/" }) {
      ...ImgFragment
    }
    project2Image: imageSharp(id: { regex: "/work_project2/" }) {
      ...ImgFragment
    }
    project3Image: imageSharp(id: { regex: "/work_project3/" }) {
      ...ImgFragment
    }
    project4Image: imageSharp(id: { regex: "/work_project4/" }) {
      ...ImgFragment
    }
  }

  fragment ImgFragment on ImageSharp {
    resolutions {
      ...GatsbyImageSharpResolutions
    }
  }
`;

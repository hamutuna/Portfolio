// @flow
import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/_common/Layout';
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
  const { allSkillsJson, allWorksJson, logoImage, profileImage } = data;

  const [skills, skillImages] = resolveJson(data, allSkillsJson);
  const [works, workImages] = resolveJson(data, allWorksJson);

  return (
    <Layout>
      <FirstView image={logoImage} />
      <Works works={works} images={workImages} />
      <Profile image={profileImage} />
    </Layout>
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
    logoImage: imageSharp(resolutions: { originalName: { eq: "logo.png" } }) {
      ...ImgFragment
    }
    profileImage: imageSharp(resolutions: { originalName: { eq: "avatar.png" } }) {
      ...ImgFragment
    }
    sketchImage: imageSharp(resolutions: { originalName: { eq: "skill_sketch.png" } }) {
      ...ImgFragment
    }
    xdImage: imageSharp(resolutions: { originalName: { eq: "xd.png" } }) {
      ...ImgFragment
    }
    photoshopImage: imageSharp(resolutions: { originalName: { eq: "photoshop.png" } }) {
      ...ImgFragment
    }
    illustratorImage: imageSharp(resolutions: { originalName: { eq: "illustrator.png" } }) {
      ...ImgFragment
    }
    html5Image: imageSharp(resolutions: { originalName: { eq: "html5.png" } }) {
      ...ImgFragment
    }
    css3Image: imageSharp(resolutions: { originalName: { eq: "css3.png" } }) {
      ...ImgFragment
    }
    zeplinImage: imageSharp(resolutions: { originalName: { eq: "zeplin.png" } }) {
      ...ImgFragment
    }
    githubImage: imageSharp(resolutions: { originalName: { eq: "github.png" } }) {
      ...ImgFragment
    }
    wordpressImage: imageSharp(resolutions: { originalName: { eq: "wordpress.png" } }) {
      ...ImgFragment
    }
    project1Image: imageSharp(resolutions: { originalName: { eq: "work_project1.png" } }) {
      ...ImgFragment
    }
    project2Image: imageSharp(resolutions: { originalName: { eq: "work_project2.png" } }) {
      ...ImgFragment
    }
    project3Image: imageSharp(resolutions: { originalName: { eq: "work_project3.png" } }) {
      ...ImgFragment
    }
    project4Image: imageSharp(resolutions: { originalName: { eq: "work_project4.png" } }) {
      ...ImgFragment
    }
  }

  fragment ImgFragment on ImageSharp {
    resolutions {
      ...GatsbyImageSharpResolutions
    }
  }
`;

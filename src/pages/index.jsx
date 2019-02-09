// @flow
import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/_common/Layout';
import FirstView from '../components/index/FirstView';
import Workflow from '../components/index/Workflow';
import Works from '../components/index/Works/Works';
import Profile from '../components/index/Profile';

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

const getList = (json) => json.edges.map((edge) => edge.node);

const resolveJson = <T: { id: string }>(
  data,
  json: JsonEntitiy<T>,
): [T[], { [string]: ImageSharp }] => {
  const entities = getList(json);
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
  const {
    allWorkflowsJson,
    allWorksJson,
    logoImage,
    avatarImage,
    twitterImage,
    pageTopImage,
  } = data;

  const [works, workImages] = resolveJson(data, allWorksJson);

  return (
    <Layout pageTopImage={pageTopImage}>
      <FirstView image={logoImage} />
      <Workflow workflows={getList(allWorkflowsJson)} />
      <Works works={works} images={workImages} />
      <Profile avatarImage={avatarImage} twitterImage={twitterImage} pageTopImage={pageTopImage} />
    </Layout>
  );
};

export const query = graphql`
  query GetIndexContents {
    allWorkflowsJson {
      edges {
        node {
          id
          title
          description
        }
      }
    }
    allWorksJson {
      edges {
        node {
          id
          title
          positionAndDate
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
    avatarImage: imageSharp(resolutions: { originalName: { eq: "avatar.png" } }) {
      ...ImgFragment
    }
    twitterImage: imageSharp(resolutions: { originalName: { eq: "twitter.png" } }) {
      ...ImgFragment
    }
    pageTopImage: imageSharp(resolutions: { originalName: { eq: "page_top.png" } }) {
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

// @flow
import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/_common/Layout';
import FirstView from '../components/index/FirstView';
import Workflow from '../components/index/Workflow';
import Works from '../components/index/Works/Works';
import Profile from '../components/index/Profile';

import type { Work, ImageSharp } from '../entities/types';

type JsonEntitiy<T> = {
  edges: [
    {
      node: T,
    },
  ],
};

type Props = {
  data: {
    allWorksJson: JsonEntitiy<Work>,
    firstViewImage: ImageSharp,
    profileImage: ImageSharp,
  },
};

const getList = (json) => json.edges.map((edge) => edge.node);

export default ({ data }: Props) => {
  const {
    allWorkflowsJson,
    allWorksJson,
    projectThumbnails,
    logoImage,
    firstViewImage,
    avatarImage,
    twitterImage,
  } = data;

  return (
    <Layout works={getList(allWorksJson)} logoImage={logoImage}>
      <FirstView image={firstViewImage} />
      <Workflow workflows={getList(allWorkflowsJson)} />
      <Works works={getList(allWorksJson)} images={getList(projectThumbnails)} />
      <Profile avatarImage={avatarImage} twitterImage={twitterImage} />
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
    allWorksJson(filter: { id: { regex: "/2|4/" } }) {
      edges {
        node {
          id
          title
          positionAndDate
        }
      }
    }
    projectThumbnails: allImageSharp(
      filter: { resolutions: { originalName: { regex: "/work_project(2|4)_thumbnail\\.png/" } } }
      sort: { fields: resolutions___originalName }
    ) {
      edges {
        node {
          ...ImgFragment
        }
      }
    }
    firstViewImage: imageSharp(resolutions: { originalName: { eq: "first_view.png" } }) {
      ...ImgFragment
    }
    logoImage: imageSharp(resolutions: { originalName: { eq: "logo.png" } }) {
      ...ImgFragment
    }
    avatarImage: imageSharp(resolutions: { originalName: { eq: "avatar.png" } }) {
      ...ImgFragment
    }
    twitterImage: imageSharp(resolutions: { originalName: { eq: "twitter_icon.png" } }) {
      ...ImgFragment
    }
  }

  fragment ImgFragment on ImageSharp {
    resolutions {
      ...GatsbyImageSharpResolutions
    }
  }
`;

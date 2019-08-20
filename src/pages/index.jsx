// @flow
import * as React from 'react';
import { graphql } from 'gatsby';
import { renderWithMQ } from '../utils/withMediaQuery';

import Layout from '../components/_common/Layout';
import FirstView from '../components/index/FirstView';
import Workflow from '../components/index/Workflow';
import PageLinks from '../components/index/PageLinks/PageLinks';
import Profile from '../components/index/Profile';

import type { WorkLink, ImageSharp } from '../entities/types';

type JsonEntitiy<T> = {
  edges: [
    {
      node: T,
    },
  ],
};

type Props = {
  data: {
    allPageLinksJson: JsonEntitiy<WorkLink>,
    firstViewImage: ImageSharp,
    profileImage: ImageSharp,
  },
};

const getList = (json) => json.edges.map((edge) => edge.node);

export default ({ data }: Props) => {
  const {
    allWorkflowsJson,
    allPageLinksJson,
    pageLinkImages,
    logoImage,
    firstViewImage,
    firstViewWideImage,
    avatarImage,
    twitterImage,
  } = data;

  return (
    <Layout links={getList(allPageLinksJson)} logoImage={logoImage}>
      {renderWithMQ(
        FirstView,
        {
          image: firstViewImage,
        },
        {
          image: firstViewWideImage,
        },
      )}
      <Workflow workflows={getList(allWorkflowsJson)} />
      <PageLinks links={getList(allPageLinksJson)} images={getList(pageLinkImages)} />
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
    allPageLinksJson {
      edges {
        node {
          id
          url
          title
          positionAndDate
        }
      }
    }
    pageLinkImages: allImageSharp(
      filter: { resolutions: { originalName: { regex: "/page_link.*\\.png/" } } }
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
    firstViewWideImage: imageSharp(resolutions: { originalName: { eq: "first_view_wide.png" } }) {
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

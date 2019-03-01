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
    projectThumbnails,
    logoImage,
    firstViewImage,
    avatarImage,
    twitterImage,
    pageTopImage,
    hamburgerImage,
    closeImage,
  } = data;

  const [workflows, workflowImages] = resolveJson(data, allWorkflowsJson);

  return (
    <Layout
      pageTopImage={pageTopImage}
      hamburgerImage={hamburgerImage}
      closeImage={closeImage}
      logoImage={logoImage}
    >
      <FirstView image={firstViewImage} />
      <Workflow workflows={workflows} images={workflowImages} />
      <Works works={getList(allWorksJson)} images={getList(projectThumbnails)} />
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
    pageTopImage: imageSharp(resolutions: { originalName: { eq: "page_top.png" } }) {
      ...ImgFragment
    }
    hamburgerImage: imageSharp(resolutions: { originalName: { eq: "hamburger.png" } }) {
      ...ImgFragment
    }
    closeImage: imageSharp(resolutions: { originalName: { eq: "close.png" } }) {
      ...ImgFragment
    }
    workflow1Image: imageSharp(resolutions: { originalName: { eq: "workflow1.png" } }) {
      ...ImgFragment
    }
    workflow2Image: imageSharp(resolutions: { originalName: { eq: "workflow2.png" } }) {
      ...ImgFragment
    }
    workflow3Image: imageSharp(resolutions: { originalName: { eq: "workflow3.png" } }) {
      ...ImgFragment
    }
    workflow4Image: imageSharp(resolutions: { originalName: { eq: "workflow4.png" } }) {
      ...ImgFragment
    }
  }

  fragment ImgFragment on ImageSharp {
    resolutions {
      ...GatsbyImageSharpResolutions
    }
  }
`;

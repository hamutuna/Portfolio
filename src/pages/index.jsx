// @flow
import * as React from 'react';

import FirstView from '../components/index/FirstView';
import Profile from '../components/index/Profile';
import Skills from '../components/index/Skills/Skills';
import Works from '../components/index/Works/Works';

import type { Work, Skill, ImageSharp } from '../entities/types';

type Props = {
  data: {
    allSkillsJson: {
      edges: [
        {
          node: Skill,
        },
      ],
    },
    allWorksJson: {
      edges: [
        {
          node: Work,
        },
      ],
    },
    firstViewImage: ImageSharp,
    profileImage: ImageSharp,
  },
};

export default (props: Props) => {
  const { allSkillsJson, allWorksJson, firstViewImage } = props.data;

  return (
    <React.Fragment>
      <FirstView image={firstViewImage} />
      <Profile />
      <Skills skills={allSkillsJson.edges.map((edge) => edge.node)} />
      <Works works={allWorksJson.edges.map((edge) => edge.node)} />
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
      resolutions {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`;

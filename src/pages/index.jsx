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
  const {
    allSkillsJson,
    allWorksJson,
    firstViewImage,
    profileImage,
  } = props.data;
  const skills = allSkillsJson.edges.map((edge) => edge.node);
  const skillImages = (() => {
    const imgs = {};
    skills.forEach((skill) => {
      imgs[skill.id] = props.data[`${skill.id}Image`];
    });
    return imgs;
  })();

  return (
    <React.Fragment>
      <FirstView image={firstViewImage} />
      <Profile image={profileImage} />
      <Skills skills={skills} images={skillImages} />
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
  }

  fragment ImgFragment on ImageSharp {
    resolutions {
      ...GatsbyImageSharpResolutions
    }
  }
`;

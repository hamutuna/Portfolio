// @flow
import * as React from 'react';
import smoothscroll from 'smoothscroll-polyfill';

import Header from '../components/_common/Header';
import Footer from '../components/_common/Footer';
import Sprite from '../components/_common/Sprite';

import '../styles/global';

type Props = {
  children: (any) => React.Element<any>,
  data: {},
};

export default class Template extends React.Component<Props> {
  componentDidMount() {
    // windowを触るので、ssr中は実行しないようにここで実行
    smoothscroll.polyfill();
  }

  render() {
    const { children, data } = this.props;

    return (
      <React.Fragment>
        <Sprite />
        <Header />
        <main>
          {children({
            ...this.props,
            data,
          })}
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

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

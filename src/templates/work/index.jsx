// @flow
import * as React from 'react';
import { graphql } from 'gatsby';

import type { Work } from '../../entities/types';
import * as s from '../../styles/templates/work/index';

import Layout from '../../components/_common/Layout';
import { anchors } from '../../components/_common/NaviItem';
import Description from '../../components/work/Description';
import GoodPoints from '../../components/work/GoodPoints';

type Props = {
  pageContext: {
    work: Work,
  },
  data: {},
};

const getDocImages = (documents, json) => documents.map((d) => json[d]);

export default (props: Props) => {
  const { pageContext, data } = props;
  const {
    id,
    title,
    position,
    positionAndDate,
    description,
    goodPoints,
    documents,
  } = pageContext.work;
  const { pageTopImage, hamburgerImage, closeImage, logoImage } = data;
  const image = data[`${id}Image`];
  const docImages = getDocImages(documents, data);

  console.log(pageContext.work);

  return (
    <Layout
      pageTopImage={pageTopImage}
      hamburgerImage={hamburgerImage}
      closeImage={closeImage}
      logoImage={logoImage}
    >
      <s.FirstView image={image}>
        <s.TopImage resolutions={image.resolutions} />
      </s.FirstView>

      <s.Article>
        <s.Title id={anchors.title}>{title}</s.Title>
        <s.Position>{position}</s.Position>
        <s.PositionAndDate>{positionAndDate}</s.PositionAndDate>
        <Description text={description} />
        <GoodPoints goodPoints={goodPoints} />
        <div id={anchors.documents} />
        {docImages.map((d, i) => (
          <s.DocImage resolutions={d.resolutions} alt={`document${i}`} key={d.resolutions.src} />
        ))}
        <h2 id={anchors.members}>Project members</h2>
      </s.Article>
    </Layout>
  );
};

export const query = graphql`
  query GetWorkContents {
    logoImage: imageSharp(resolutions: { originalName: { eq: "logo.png" } }) {
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
    project1_doc1: imageSharp(resolutions: { originalName: { eq: "project1_doc1.png" } }) {
      ...ImgFragment
    }
    project1_doc2: imageSharp(resolutions: { originalName: { eq: "project1_doc2.png" } }) {
      ...ImgFragment
    }
    project2_doc1: imageSharp(resolutions: { originalName: { eq: "project2_doc1.png" } }) {
      ...ImgFragment
    }
    project2_doc2: imageSharp(resolutions: { originalName: { eq: "project2_doc2.png" } }) {
      ...ImgFragment
    }
    project2_doc3: imageSharp(resolutions: { originalName: { eq: "project2_doc3.png" } }) {
      ...ImgFragment
    }
  }
`;

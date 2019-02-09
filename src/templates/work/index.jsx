// @flow
import * as React from 'react';
import { graphql } from 'gatsby';

import type { Work } from '../../entities/types';
import * as s from '../../styles/templates/work/index';

import { anchors } from '../../components/_common/NaviItem';

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
    description,
    position,
    skills,
    detail,
    documents,
  } = pageContext.work;
  const image = data[`${id}Image`];
  const docImages = getDocImages(documents, data);

  return (
    <s.Wrapper>
      <s.FirstView image={image}>
        <s.TopImage resolutions={image.resolutions} />
      </s.FirstView>
      <h1>{title}</h1>
      <p>{description}</p>
      <h2 id={anchors.position}>担当工程/役割</h2>
      <p dangerouslySetInnerHTML={{ __html: position }} />
      <h2>使用skill</h2>
      {skills.map((skill) => <p key={skill.id}>{skill.title}</p>)}
      <h2 id={anchors.detail}>詳細</h2>
      <p dangerouslySetInnerHTML={{ __html: detail }} />
      <h2 id={anchors.documents}>実際の資料</h2>
      {docImages.map((d, i) => (
        <s.DocImage
          resolutions={d.resolutions}
          alt={`document${i}`}
          key={d.resolutions.src}
        />
      ))}
    </s.Wrapper>
  );
};

export const query = graphql`
  query GetWorkContents {
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

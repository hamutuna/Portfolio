// @flow
import * as React from 'react';
import { graphql } from 'gatsby';

import type { Work } from '../../entities/types';
import * as s from '../../styles/templates/work/index';

import Layout from '../../components/_common/Layout';
import { anchors } from '../../components/_common/NaviItem';
import Description from '../../components/work/Description';
import GoodPoints from '../../components/work/GoodPoints';
import Images from '../../components/work/Images';
import Members from '../../components/work/Members';

type Props = {
  pageContext: {
    work: Work,
  },
  data: {},
};

export default (props: Props) => {
  const { pageContext, data } = props;
  const { title, position, positionAndDate, description, goodPoints, members } = pageContext.work;
  const {
    pageTopImage,
    hamburgerImage,
    closeImage,
    logoImage,
    firstViewImage,
    projectImages,
  } = data;

  return (
    <Layout
      pageTopImage={pageTopImage}
      hamburgerImage={hamburgerImage}
      closeImage={closeImage}
      logoImage={logoImage}
    >
      <s.FirstView id={anchors.firstView}>
        <s.FirstViewImage resolutions={firstViewImage.resolutions} />
      </s.FirstView>

      <s.Article>
        <s.Title id={anchors.title}>{title}</s.Title>
        <s.Position>{position}</s.Position>
        <s.PositionAndDate>{positionAndDate}</s.PositionAndDate>
        <Description text={description} />
        <GoodPoints goodPoints={goodPoints} />
        <Images images={projectImages.edges.map((e) => e.node)} />
        <Members text={members} />
      </s.Article>
    </Layout>
  );
};

export const query = graphql`
  query GetWorkContents($firstViewImage: String, $workImages: String) {
    logoImage: imageSharp(resolutions: { originalName: { eq: "logo.png" } }) {
      ...ImgFragment
    }
    pageTopImage: imageSharp(resolutions: { originalName: { eq: "page_top.png" } }) {
      ...ImgFragment
    }
    firstViewImage: imageSharp(resolutions: { originalName: { regex: $firstViewImage } }) {
      ...ImgFragment
    }
    projectImages: allImageSharp(
      filter: { resolutions: { originalName: { regex: $workImages } } }
      sort: { fields: resolutions___originalName }
    ) {
      edges {
        node {
          ...ImgFragment
        }
      }
    }
  }
`;

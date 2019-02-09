// @flow
import React from 'react';

import * as s from '../../styles/components/index/Workflow';
import { anchors } from '../_common/NaviItem';
import fb from '../../assets/images/contact_fb.png';

import type { Workflow } from '../../entities/types';

type Props = {
  workflows: [Workflow],
};

export default ({ workflows }: Props) => (
  <s.Section>
    <s.Title id={anchors.workflows}>Workflow</s.Title>
    <s.Wrapper>
      {workflows.map((w, i) => {
        const isLast = i === workflows.length - 1;
        return (
          <s.ListItem key={w.id} index={i}>
            <s.ItemTitleWrapper>
              <s.ItemTitleMark />
              <s.ItemTitle>{w.title}</s.ItemTitle>
            </s.ItemTitleWrapper>
            <s.ItemDescriptionWrapper>
              <s.VerticalLine isLast={isLast} />
              <s.ItemDescription isLast={isLast}>{w.description}</s.ItemDescription>
            </s.ItemDescriptionWrapper>
          </s.ListItem>
        );
      })}
    </s.Wrapper>
  </s.Section>
);

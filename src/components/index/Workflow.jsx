// @flow
import React from 'react';

import * as s from '../../styles/components/index/Profile';
import { anchors } from '../_common/NaviItem';
import fb from '../../assets/images/contact_fb.png';

import type { Workflow } from '../../entities/types';

type Props = {
  workflows: [Workflow],
};

export default ({ workflows }: Props) => (
  <s.Section>
    <s.Title id={anchors.workflow}>Workflow</s.Title>
    <ul>
      {workflows.map((w) => (
        <li key={w.id}>
          <h2>{w.title}</h2>
          <p>{w.description}</p>
        </li>
      ))}
    </ul>
  </s.Section>
);

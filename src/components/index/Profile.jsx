// @flow
import React from 'react';

import * as s from '../../styles/index/Profile';
import { anchors } from '../_common/NaviItem';
import fb from '../../assets/images/contact_fb.png';

import type { ImageSharp } from '../../entities/types';

type Props = {
  image: ImageSharp,
};

export default ({ image }: Props) => (
  <s.Section>
    <s.Title id={anchors.profile}>Profile</s.Title>
    <s.Image resolutions={image.resolutions} />
    <s.IconWrapper>
      <a href="https://www.facebook.com/tunaoisi4">
        <s.FBIcon src={fb} />
      </a>
      <a href="mailto:tuna.oisi4@gmail.com">
        <s.MailIcon id="mail" />
      </a>
    </s.IconWrapper>
    <s.Description>
      群馬県みどり市出身。大学卒業後、〜の運用〜webデザイナーを経て、
      2017年よりUX業務に携わる。
      常に人間の潜在意識に問いかけるようなデザインを目指している。
    </s.Description>
  </s.Section>
);

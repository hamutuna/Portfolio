// @flow
import React from 'react';

import * as s from '../../styles/components/index/Profile';
import { anchors } from '../_common/NaviItem';
import fb from '../../assets/images/contact_fb.png';

import type { ImageSharp } from '../../entities/types';

type Props = {
  avatarImage: ImageSharp,
  twitterImage: ImageSharp,
};

export default ({ avatarImage, twitterImage }: Props) => (
  <s.Section>
    <hr />
    <s.Title id={anchors.profile} />
    <s.Avatar resolutions={avatarImage.resolutions} />
    <s.IconWrapper>
      <h2>Tuna</h2>
      <a href="https://www.twitter.com/tunaoisi4">
        <s.TwitterIcon resolutions={twitterImage.resolutions} />
      </a>
    </s.IconWrapper>
    <s.Description>
      プロフィール記入。プロフィール記入。プロmmnんフィール記入。プロフィール記入。プロフィール記入。
    </s.Description>
    <h2>今後の展望</h2>
    <p>
      説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります
    </p>
  </s.Section>
);

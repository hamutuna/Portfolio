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
    <s.HorizontalLine id={anchors.profile} />
    <s.Avatar resolutions={avatarImage.resolutions} />
    <s.NameAndSocial>
      <s.Name>tuna</s.Name>
      <s.Social href="https://www.twitter.com/tunaoisi4">
        <s.TwitterIcon resolutions={twitterImage.resolutions} />
        <s.TwitterName>@tunaoisi4</s.TwitterName>
      </s.Social>
    </s.NameAndSocial>
    <s.Description>
      プロフィール記入。プロフィール記入。プロmmnんフィール記入。プロフィール記入。プロフィール記入。
    </s.Description>
    <s.HopeTitle>今後の展望</s.HopeTitle>
    <s.HopeDescription>
      説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります
    </s.HopeDescription>
  </s.Section>
);

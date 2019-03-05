// @flow
import React from 'react';

import * as s from '../../styles/components/index/Profile';
import { anchors } from '../_common/NaviItem';

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
      <s.Social href="https://www.twitter.com/tunaoisi4" onTouchStart={()=>{}}>
        <s.TwitterIcon resolutions={twitterImage.resolutions} />
        <s.TwitterName>@tunaoisi4</s.TwitterName>
      </s.Social>
    </s.NameAndSocial>
    <s.Description>
      1992年生まれ。木のぬくもりが好きで、寄木細工から伝統工芸品や和雑貨に興味をもち、そういう活動を自分のスキルを使って応援したいと模索中です。
    </s.Description>
    <s.HopeTitle>今後の展望</s.HopeTitle>
    <s.HopeDescription>
      ものづくりをしている人達（作り手）の支援をしつつ、何らかの方法で、作り手の技術を発信していきたいと思っています。
    </s.HopeDescription>
    <s.SkillTitle>スキル</s.SkillTitle>
    <s.SkillDescription>
      ・ figma, Adobe XD︎, sketch
      <br />
      ・︎ Abstract, zeplin
      <br />
      ・︎ Adobe Photoshop CC, Illustrator CC
    </s.SkillDescription>
  </s.Section>
);

// @flow
import React from 'react';

import * as s from '../../styles/index/Profile';
import { anchors } from '../_common/NaviItem';
import fb from '../../assets/images/contact_fb.png';
import mail from '../../assets/images/contact_mail.png';
import avatar from '../../assets/images/avatar.png';

export default () => (
  <s.Section>
    <s.Title id={anchors.profile}>Profile</s.Title>
    <s.Image src={avatar} />
    <s.IconWrapper>
      <a href="https://www.facebook.com/tunaoisi4">
        <s.Icon src={fb} />
      </a>
      <a href="mailto:tuna.oisi4@gmail.com">
        <s.Icon src={mail} />
      </a>
    </s.IconWrapper>
    <s.Description>
      群馬県みどり市出身。大学卒業後、〜の運用〜webデザイナーを経て、
      2017年よりUX業務に携わる。
      常に人間の潜在意識に問いかけるようなデザインを目指している。
    </s.Description>
  </s.Section>
);

// @flow
import * as React from 'react';

import * as s from '../../../styles/components/index/PageLinks/PageLink';
import type { PageLink, ImageSharp } from '../../../entities/types';

import { componentWithMQ } from '../../../utils/withMediaQuery';

type Props = {
  index: number,
  pageLink: PageLink,
  image: ImageSharp,
};

const LinkItem = (props: { index: Number, link: PageLink, children: React.Node }) => {
  const { link, index, children } = props;

  if (/^http(s):\/\//.test(link.url)) {
    return (
      <s.WorkExternal href={link.url} index={index} onTouchStart={() => {}}>
        {children}
      </s.WorkExternal>
    );
  }

  return (
    <s.Work to={link.url} index={index} onTouchStart={() => {}}>
      {children}
    </s.Work>
  );
};

export default (props: Props) => {
  const { index, pageLink, image } = props;
  const { url, title, positionAndDate } = pageLink;

  return (
    <LinkItem link={pageLink} index={index} onTouchStart={() => {}}>
      <s.ImageWrapper>
        <s.Image resolutions={image.resolutions} />
      </s.ImageWrapper>

      <s.Captions>
        <s.Title>
          {title}
          {/^http(s):\/\//.test(url) ? <s.ExternalIcon id="externalLink" /> : null}
        </s.Title>
        <s.Description>{positionAndDate}</s.Description>
      </s.Captions>
    </LinkItem>
  );
};

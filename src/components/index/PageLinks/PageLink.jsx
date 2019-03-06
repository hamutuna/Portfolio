// @flow
import * as React from 'react';

import * as s from '../../../styles/components/index/PageLinks/PageLink';
import type { PageLink, ImageSharp } from '../../../entities/types';

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
  const { title, positionAndDate } = pageLink;

  return (
    <LinkItem link={pageLink} index={index} onTouchStart={() => {}}>
      <s.Image resolutions={image.resolutions} />
      <s.Captions>
        <s.Title>{title}</s.Title>
        <s.Description>{positionAndDate}</s.Description>
      </s.Captions>
    </LinkItem>
  );
};

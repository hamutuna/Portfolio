// @flow
import * as React from 'react';
import * as s from '../../styles/components/_common/NaviItem';

export const anchors = {
  firstView: 'firstView',
  profile: 'profile',
  skills: 'skills',
  workflows: 'workflows',
  works: 'works',
  position: 'position',
  detail: 'detail',
  documents: 'documents',
  members: 'members',
  goodPoints: 'goodPoints',
  title: 'title',
};

export type Anchors = $Keys<typeof anchors>;

type Props = {
  children: React.Node,
  targetId: Anchors,
  className?: string,
};

export default (props: Props) => {
  const { children, targetId, className } = props;

  return (
    <li className={className}>
      <s.Item
        href="#"
        onClick={() => {
          const target = document.querySelector(`#${targetId}`);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
            });
          }
        }}
      >
        {children}
      </s.Item>
    </li>
  );
};

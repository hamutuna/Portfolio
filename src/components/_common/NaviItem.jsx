// @flow
import * as React from 'react';

export const anchors = {
  profile: 'profile',
  skills: 'skills',
  works: 'works',
};

type Anchors = $Keys<typeof anchors>;

type Props = {
  children: React.Node,
  targetId: Anchors,
  className: string,
};

export default (props: Props) => {
  const { children, targetId, className } = props;

  return (
    <li className={className}>
      <button
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
      </button>
    </li>
  );
};

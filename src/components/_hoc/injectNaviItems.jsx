// @flow
import * as React from 'react';

import { anchors } from '../_common/NaviItem';

export type NaviItem = {
  id: string,
  text: string,
};

const worksNaviItems = [
  {
    id: anchors.position,
    text: 'Position',
  },
  {
    id: anchors.detail,
    text: 'Detail',
  },
  {
    id: anchors.documents,
    text: 'Documents',
  },
];

const topNaviItems = [
  {
    id: anchors.profile,
    text: 'Profile',
  },
  {
    id: anchors.skills,
    text: 'Skills',
  },
  {
    id: anchors.works,
    text: 'Works',
  },
];

type Props = {
  items: NaviItem[],
};

type LocType = React.ComponentType<Props>;

export default (Loc: LocType) =>
  class extends React.Component<{}> {
    render() {
      const items = (() => {
        if (window.location.href.includes('/works/')) {
          return worksNaviItems;
        }

        return topNaviItems;
      })();

      return <Loc {...this.props} items={items} />;
    }
  };

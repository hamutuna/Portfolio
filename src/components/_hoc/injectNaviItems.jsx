// @flow
import * as React from 'react';

import { anchors } from '../_common/NaviItem';
import type { Anchors } from '../_common/NaviItem';

export type NaviItem = {
  id: Anchors,
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
    id: anchors.workflows,
    text: 'Workflow',
  },
  {
    id: anchors.works,
    text: 'Works',
  },
  {
    id: anchors.profile,
    text: 'Profile',
  },
];

type LocProps = {
  items: NaviItem[],
};

type LocType = React.ComponentType<LocProps>;

type State = {
  location: string,
};

export default (Loc: LocType) => class extends React.Component<{}, State> {
  constructor() {
    super();
    this.state = {
      location: '',
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      location: window.location.href,
    });
  }

  render() {
    const items = (() => {
      if (this.state.location.includes('/works/')) {
        return worksNaviItems;
      }

      return topNaviItems;
    })();

    return <Loc {...this.props} items={items} />;
  }
};

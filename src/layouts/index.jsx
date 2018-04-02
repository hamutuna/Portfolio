// @flow
import * as React from 'react';

import '../styles/global';

type Props = {
  children: () => React.Element<any>
};

export default (props: Props) => <div>{props.children()}</div>;

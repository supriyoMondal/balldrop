import * as React from 'react';

import { GyroscopeViewProps } from './Gyroscope.types';

export default function GyroscopeView(props: GyroscopeViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}

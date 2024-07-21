import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { GyroscopeViewProps } from './Gyroscope.types';

const NativeView: React.ComponentType<GyroscopeViewProps> =
  requireNativeViewManager('Gyroscope');

export default function GyroscopeView(props: GyroscopeViewProps) {
  return <NativeView {...props} />;
}

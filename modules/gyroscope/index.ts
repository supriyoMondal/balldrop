import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to Gyroscope.web.ts
// and on native platforms to Gyroscope.ts
import GyroscopeModule from './src/GyroscopeModule';
import GyroscopeView from './src/GyroscopeView';
import { ChangeEventPayload, GyroscopeViewProps } from './src/Gyroscope.types';

// Get the native constant value.
export const PI = GyroscopeModule.PI;

export function hello(): string {
  return GyroscopeModule.hello();
}

export async function setValueAsync(value: string) {
  return await GyroscopeModule.setValueAsync(value);
}

const emitter = new EventEmitter(GyroscopeModule ?? NativeModulesProxy.Gyroscope);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { GyroscopeView, GyroscopeViewProps, ChangeEventPayload };

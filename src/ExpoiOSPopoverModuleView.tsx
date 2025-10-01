import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoiOSPopoverModuleViewProps } from './ExpoiOSPopoverModule.types';

const NativeView: React.ComponentType<ExpoiOSPopoverModuleViewProps> =
  requireNativeView('ExpoiOSPopoverModule');

export default function ExpoiOSPopoverModuleView(props: ExpoiOSPopoverModuleViewProps) {
  return <NativeView {...props} />;
}

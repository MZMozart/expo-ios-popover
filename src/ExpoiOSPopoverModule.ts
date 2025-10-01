import { NativeModule, requireNativeModule } from 'expo';

import { ExpoiOSPopoverModuleEvents } from './ExpoiOSPopoverModule.types';

declare class ExpoiOSPopoverModule extends NativeModule<ExpoiOSPopoverModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoiOSPopoverModule>('ExpoiOSPopoverModule');

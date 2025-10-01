import { registerWebModule, NativeModule } from 'expo';

import { ExpoiOSPopoverModuleEvents } from './ExpoiOSPopoverModule.types';

class ExpoiOSPopoverModule extends NativeModule<ExpoiOSPopoverModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoiOSPopoverModule, 'ExpoiOSPopoverModule');

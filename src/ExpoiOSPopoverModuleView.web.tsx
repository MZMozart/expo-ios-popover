import * as React from 'react';

import { ExpoiOSPopoverModuleViewProps } from './ExpoiOSPopoverModule.types';

export default function ExpoiOSPopoverModuleView(props: ExpoiOSPopoverModuleViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}

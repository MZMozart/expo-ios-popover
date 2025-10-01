// Reexport the native module. On web, it will be resolved to ExpoiOSPopoverModule.web.ts
// and on native platforms to ExpoiOSPopoverModule.ts
export { default } from './ExpoiOSPopoverModule';
export { default as ExpoiOSPopoverModuleView } from './ExpoiOSPopoverModuleView';
export * from  './ExpoiOSPopoverModule.types';

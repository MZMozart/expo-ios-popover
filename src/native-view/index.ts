import { requireNativeView } from "expo";
import { ComponentType } from "react";
import { Popover } from "../constants";

export const PopoverNativeView: ComponentType<any> = requireNativeView(
  Popover.Module,
  Popover.View
);

export const PopoverNativeTriggerView: ComponentType<any> = requireNativeView(
  Popover.Module,
  Popover.Trigger
);

export const PopoverNativePressableView: ComponentType<any> = requireNativeView(
  Popover.Module,
  Popover.Pressable
);

export const PopoverNativeContentView: ComponentType<any> = requireNativeView(
  Popover.Module,
  Popover.Content
);

import React, { FC } from "react";
import { View, ViewStyle } from "react-native";
import {
  PopoverNativeContentView,
  PopoverNativeTriggerView,
  PopoverNativeView,
} from "../native-view";
import type {
  PopoverProps,
  PopoverTriggerProps,
  PopoverContentProps,
} from "../typings";

// ====================
// Popover Root Component
// ====================
const Popover: FC<PopoverProps> & {
  Trigger: FC<PopoverTriggerProps>;
  Content: FC<PopoverContentProps>;
} = (props: PopoverProps) => {
  return <PopoverNativeView {...props} key={props.id} />;
};

// ====================
// Popover Pressable Component
// ====================

// ====================
// Popover Trigger Component
// ====================
const Trigger: FC<PopoverTriggerProps> = (props: PopoverTriggerProps) => {
  return <PopoverNativeTriggerView {...props} />;
};

// ====================
// Popover Content Component
// ====================
const Content: FC<PopoverContentProps> = (props: PopoverContentProps) => {
  // Extract the style passed by user
  const style: ViewStyle = (props.style as ViewStyle) || {};

  // Extract width, height, backgroundColor from style or fallback defaults
  const width = style.width ?? 200;
  const height = style.height ?? 200;
  const backgroundColor = style.backgroundColor ?? "";

  // Remove backgroundColor from inner View style to avoid overriding native background
  const { backgroundColor: _, ...innerStyle } = style;

  return (
    <PopoverNativeContentView
      {...props}
      width={width}
      height={height}
      backgroundColor={backgroundColor.toString()}
      style={{
        position: "absolute", // native absolute positioning
      }}
    >
      <View style={{ flex: 1, ...innerStyle }}>{props.children}</View>
    </PopoverNativeContentView>
  );
};

// Attach Trigger and Content as static properties
Popover.Trigger = Trigger;
Popover.Content = Content;
// ====================
// Exports
// ====================
export { Popover, Trigger, Content };

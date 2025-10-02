import type { StyleProp, ViewStyle } from "react-native";

export type PopoverProps = {
  id: string;
  arrowEdge?: "top" | "bottom" | "leading" | "trailing";
  children?: React.ReactNode;
};

export type PopoverTriggerProps = {
  children?: React.ReactNode;
};

export type PopoverContentProps = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

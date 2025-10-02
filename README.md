# 🚀 expo-ios-popover

A **native iOS-style Popover** for React Native + Expo.

---

## ⚡ Features

- 🔥 **Native iOS popover style**
- 🛸 **Arrow positions:** `top`, `bottom`, `leading`, `trailing`
- 🎨 **Customizable width, height & background**
- 💎 **Simple API:** `Popover`, `Popover.Trigger`, `Popover.Content`
- ✨ **Easy to integrate** into any Expo project

---

## 🧩 Usage

```tsx
import React from "react";
import { View, Text, Pressable } from "react-native";
import { Popover } from "expo-ios-popover";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Popover id="example" arrowEdge="top">
        <Popover.Trigger>
          <Pressable
            style={{ padding: 12, backgroundColor: "#007AFF", borderRadius: 8 }}
          >
            <Text style={{ color: "white" }}>Open Popover 🚀</Text>
          </Pressable>
        </Popover.Trigger>

        <Popover.Content
          style={{
            width: 220,
            height: 150,
            backgroundColor: "#fff",
            padding: 16,
            borderRadius: 12,
          }}
        >
          <Text>Hello from Popover! ✨</Text>
        </Popover.Content>
      </Popover>
    </View>
  );
}
```

---

## 📝 API

### `Popover`

| Prop        | Type              | Default  | Description                      |             |         |                |
| ----------- | ----------------- | -------- | -------------------------------- | ----------- | ------- | -------------- |
| `id`        | `string`          | —        | Unique identifier                |             |         |                |
| `arrowEdge` | `"top"            | "bottom" | "leading"                        | "trailing"` | `"top"` | Arrow position |
| `children`  | `React.ReactNode` | —        | Should include Trigger & Content |             |         |                |

### `Popover.Trigger` & `Popover.Content`

- 🔘 **Trigger:** pressable element to open popover
- 🎯 **Content:** popover panel; width & height default to `200`

---

## 🚀 Installation

```bash
npm install expo-ios-popover
# or
yarn add expo-ios-popover
```

---

## 🎥 Preview

## 🎨 License

MIT © 2025

import { LinearGradient } from "expo-linear-gradient";
import { ViewProps } from "react-native";

export default function BackgroundTheme({ children }: ViewProps) {
  return (
    <LinearGradient
      colors={["#05163b", "#3c1cdd", "#000000"]}
      style={{ flex: 1 }}
    >
      {children}
    </LinearGradient>
  );
}

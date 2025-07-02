import { PropsWithChildren } from "react";
import { View } from "react-native";

export function Header({ children }: PropsWithChildren) {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 54,
      }}
    >
      {children}
    </View>
  );
}

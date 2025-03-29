// app/settings.tsx
import { Text, View } from "react-native";

export default function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24 }}>Settings</Text>
    </View>
  );
}

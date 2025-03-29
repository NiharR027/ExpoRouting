// app/(tabs)/notifications.tsx
import { Pressable, Text, View } from "react-native";
import { router } from "expo-router";

export default function NotificationsScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Notifications Screen
      </Text>
      {[10, 11, 12].map((id) => (
        <Pressable
          key={id}
          onPress={() =>
            router.push({ pathname: "/modal", params: { id: id.toString() } })
          }
          style={{ marginVertical: 5 }}
        >
          <Text style={{ color: "blue" }}>Notification {id}</Text>
        </Pressable>
      ))}
    </View>
  );
}

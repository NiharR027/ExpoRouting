// app/(tabs)/chat.tsx
import { Pressable, Text, View } from "react-native";
import { router } from "expo-router";

export default function ChatScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Chat Screen</Text>
      {[4, 5, 6].map((id) => (
        <Pressable
          key={id}
          onPress={() =>
            router.push({ pathname: "/modal", params: { id: id.toString() } })
          }
          style={{ marginVertical: 5 }}
        >
          <Text style={{ color: "blue" }}>Chat Item {id}</Text>
        </Pressable>
      ))}
    </View>
  );
}

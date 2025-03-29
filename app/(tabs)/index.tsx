// app/(tabs)/index.tsx
import { Link, router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function HomePage() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Home Page</Text>

      {/* Navigation buttons for extra pages */}
      <Pressable
        onPress={() => router.push("/calendar")}
        style={{ marginVertical: 5 }}
      >
        <Text style={{ color: "blue" }}>Calendar</Text>
      </Pressable>
      <Pressable
        onPress={() => router.push("/contacts")}
        style={{ marginVertical: 5 }}
      >
        <Text style={{ color: "blue" }}>Contacts</Text>
      </Pressable>
      <Pressable
        onPress={() => router.push("/documents")}
        style={{ marginVertical: 5 }}
      >
        <Text style={{ color: "blue" }}>Documents</Text>
      </Pressable>
    </View>
  );
}

// app/(tabs)/newsfeed.tsx
import { Pressable, Text, View } from "react-native";
import { router } from "expo-router";

export default function NewsfeedScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Newsfeed Screen</Text>
      {[7, 8, 9].map((id) => (
        <Pressable
          key={id}
          onPress={() =>
            router.push({ pathname: "/modal", params: { id: id.toString() } })
          }
          style={{ marginVertical: 5 }}
        >
          <Text style={{ color: "blue" }}>Newsfeed Item {id}</Text>
        </Pressable>
      ))}
    </View>
  );
}

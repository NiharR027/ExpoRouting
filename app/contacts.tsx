// app/calendar.tsx
import { Pressable, Text, View } from "react-native";
import { router } from "expo-router";

export default function CalendarScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Contacts</Text>
      {[101, 102, 103].map((id) => (
        <Pressable
          key={id}
          onPress={() =>
            router.push({ pathname: "/modal", params: { id: id.toString() } })
          }
          style={{ marginVertical: 5 }}
        >
          <Text style={{ color: "blue" }}>Contact Event {id}</Text>
        </Pressable>
      ))}
    </View>
  );
}

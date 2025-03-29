// app/modal.tsx
import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export const unstable_settings = {
  presentation: "modal",
};

export default function ModalScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24 }}>Modal Summary</Text>
      <Text style={{ marginVertical: 20 }}>Item ID: {id}</Text>
      <Button title="Close" onPress={() => router.back()} />
    </View>
  );
}

// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Tabs.Screen
        name="chat"
        options={{ title: "Chat", headerShown: false }}
      />
      <Tabs.Screen
        name="newsfeed"
        options={{ title: "Newsfeed", headerShown: false }}
      />
      <Tabs.Screen
        name="notifications"
        options={{ title: "Notifications", headerShown: false }}
      />
    </Tabs>
  );
}

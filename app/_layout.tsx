// app/_layout.tsx
import { Drawer } from "expo-router/drawer";
import { CustomDrawerContent } from "./CustomDrawerContent";

export default function RootLayout() {
  return (
    <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
      {/* 
        If you don’t want other routes to appear in the drawer,
        you can hide them with drawerItemStyle: { display: "none" }.
        In this case, we hide the auto‑generated item for the bottom tabs.
      */}
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: "",
          drawerItemStyle: { display: "none" },
        }}
      />
    </Drawer>
  );
}

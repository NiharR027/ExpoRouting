// app/CustomDrawerContent.tsx
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";

export function CustomDrawerContent(props: any) {
  // You could use props.navigation or other props if needed.
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    username: "johnny_d",
    // Optionally add a profile image:
    image: "https://via.placeholder.com/80",
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileContainer}>
        <Image source={{ uri: user.image }} style={styles.profileImage} />
        <Text style={styles.profileName}>{user.name}</Text>
        <Text style={styles.profileEmail}>{user.email}</Text>
      </View>
      {/* You can add additional static items here if needed */}
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    padding: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileEmail: {
    fontSize: 14,
    color: "gray",
  },
});

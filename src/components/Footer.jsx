import React, { useState } from "react";
import { View, Pressable, Image, Text, StyleSheet, ScrollView } from "react-native";
import HomePage from "./HomePage";
import OrderDetails from "../screens/OrderDetail";
import Chat from "../screens/Chat";

const Footer = () => {
  const [selectedAction, setSelectedAction] = useState("Home");

  const handleActionPress = (actionName) => {
    setSelectedAction(actionName);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {selectedAction === "Home" && <HomePage />}
        {selectedAction === "Profile" && <ProfileScreen />}
        {selectedAction === "Cart" && <OrderDetails />}
        {selectedAction === "Chat" && <Chat />}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.actionFooter}>
          <Pressable
            style={[
              styles.iconBottom,
              selectedAction === "Home" && styles.selectedAction,
            ]}
            onPress={() => handleActionPress("Home")}
          >
            <Image source={require("../../assets/Home.png")} />
            {selectedAction === "Home" ? <Text style={styles.textAction}>Home</Text> : null}
          </Pressable>
          <Pressable
            style={[
              styles.iconBottom,
              selectedAction === "Profile" && styles.selectedAction,
            ]}
            onPress={() => handleActionPress("Profile")}
          >
            <Image
              source={require("../../assets/Home/Profile.png")}
              style={styles.iconPerson}
            />
            {selectedAction === "Profile" ? <Text style={styles.textAction}>Profile</Text> : null}
          </Pressable>
          <Pressable
            style={[
              styles.iconBottom,
              selectedAction === "Cart" && styles.selectedAction,
            ]}
            onPress={() => handleActionPress("Cart")}
          >
            <Image source={require("../../assets/Buy.png")} />
            {selectedAction === "Cart" ? <Text style={styles.textAction}>Cart</Text> : null}
          </Pressable>
          <Pressable
            style={[
              styles.iconBottom,
              selectedAction === "Chat" && styles.selectedAction,
            ]}
            onPress={() => handleActionPress("Chat")}
          >
            <Image source={require("../../assets/Chat.png")} />
            {selectedAction === "Chat" ? <Text style={styles.textAction}>Chat</Text> : null}
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  actionFooter: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: 355,
    height: 74,
    borderRadius: 22,
    backgroundColor: "#FFF",
    shadowColor: "rgba(90, 108, 234, 0.10)",
    elevation: 10,
    position: "absolute",
    bottom: 0,
  },

  iconBottom: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "transparent",
    padding: 10,
  },

  selectedAction: {
    backgroundColor: "#6B50F6",
    opacity: 0.1,
    borderRadius: 10,
  },

  textAction: {
    color: '#6B50F6',
    opacity: 1.0,
  }
});

export default Footer;

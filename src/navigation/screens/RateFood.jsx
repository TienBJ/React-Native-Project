import React from "react";
import { SafeAreaView, View, Image, Text, Pressable, ImageBackground, TextInput } from "react-native";
import { styles } from "./CallFinish";

export const RateFood = ({ navigation }) => {
    return (
        <ImageBackground>
            <SafeAreaView style={styles.container}>
                <View style={styles.imageProfile}>
                    <View style={{ backgroundColor: "#FFF", width: 197, height: 191, borderColor: "#6B50F6", borderRadius: 129, justifyContent: "center", alignItems: "center", borderWidth: 8, marginTop: -20 }}>
                        <Image
                            source={require('../../../assets/Home/mage.png')}
                            style={{ height: 100, width: 141 }}
                        />
                    </View>
                </View>
                <View style={{ gap: 20, alignItems: 'center' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.userName}>Thank You!</Text>
                        <Text style={styles.userName}>Order Completed</Text>
                    </View>
                    <Text style={{ opacity: 0.3 }}>Please rate your last Driver</Text>
                </View>
                <Image
                    source={require('../../../assets/Message/star.png')}
                />
                <View style={{ flexDirection: "row", gap: 10, width: 325, height: 55, backgroundColor: "#FFF", alignItems: 'center', paddingHorizontal: 20, borderRadius: 15 }}>
                    <Image
                        source={require("../../../assets/Message/editIcon.png")}
                    />
                    <TextInput
                        placeholder="Leave feedback"
                    />
                </View>
                <View style={{ flexDirection: "row", gap: 10 }}>
                    <Pressable style={styles.actionSubmit}>
                        <Text>Submit</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => navigation.navigate("RateRestaurant")}
                        style={styles.actionSkip}>
                        <Text>Skip</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}
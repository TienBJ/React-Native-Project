import React from "react";
import { SafeAreaView, View, Image, Text, Pressable, StyleSheet, TouchableOpacity} from "react-native";

export const ChatScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={require('../../../assets/iconBack.png')} />
            </TouchableOpacity>
            <Text style={styles.chatTitle}>Chat</Text>
            <Pressable 
            onPress={() => navigation.navigate("ChatDetailScreen")}
            style={styles.chatDetail}>
                <Image
                source={require("../../../assets/Message/Louis.png")}
                />
                <View style={styles.userInformation}>
                    <Text style={styles.userName}>Louis Kelly</Text>
                    <Text style={styles.moreInform}>Your Order Just Arrived!</Text>
                </View>
                <Text style={styles.timeActive}>20:00</Text>
            </Pressable>
            <Pressable style={styles.chatDetail}>
                <Image
                source={require("../../../assets/Message/Paul.png")}
                />
                <View style={styles.userInformation}>
                    <Text style={styles.userName}>Paul Koch</Text>
                    <Text style={styles.moreInform}>Your Order Just Arrived!</Text>
                </View>
                <Text style={styles.timeActive}>20:00</Text>
            </Pressable>
            <Pressable style={styles.chatDetail}>
                <Image
                source={require("../../../assets/Message/Louis.png")}
                />
                <View style={styles.userInformation}>
                    <Text style={styles.userName}>Carla Klein</Text>
                    <Text style={styles.moreInform}>Your Order Just Arrived!</Text>
                </View>
                <Text style={styles.timeActive}>20:00</Text>
            </Pressable>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        gap: 20,
        padding: 20,
    },
    chatTitle: {
        fontSize: 25,
        fontWeight: "bold",
    },
    chatDetail: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#E5E5E5",
        height: 81,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 15,
    },
    userInformation: {
        flex: 1,
        marginLeft: 20,
    },
    userName: {
        fontSize: 15,
        fontWeight: "bold",
    },
    moreInform: {
        fontSize: 14,
        opacity: 0.3,
    },
    timeActive: {
        opacity: 0.3,
        marginBottom: 30,
        fontSize: 14,
    }
})
import React from "react";
import { SafeAreaView, View, Image, Text, Pressable, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

export const ChatDetailScreen = ({ navigation }) => {
    return (
        <ImageBackground>
            <SafeAreaView style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                    <Image source={require('../../../assets/iconBack.png')} />
                </TouchableOpacity>
                <Text style={styles.chatTitle}>Chat</Text>
                <View style={styles.chatDetail}>
                    <Image
                        source={require("../../../assets/Message/Louis.png")}
                    />
                    <View style={styles.userInformation}>
                        <Text style={styles.userName}>Louis Kelly</Text>
                        <Text style={styles.userStatus}>Online</Text>
                    </View>
                    <Pressable
                        onPress={() => navigation.navigate("CallScreen")}
                    >
                        <Image
                            source={require('../../../assets/Message/IconCall.png')}
                            style={styles.actionCall}
                        />
                    </Pressable>
                </View>
                <View style={styles.messageContainer}>
                    <View style={styles.messageContent}>
                        <View style={styles.content}>
                            <Text style={styles.contentLeft}>Just to order</Text>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.contentRight}>Okay, for what level of spiciness?</Text>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.contentLeft}>Okay, wait a minute 👍</Text>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.contentRight}>Okay I'm waiting  👍</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
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
    userStatus: {
        fontSize: 14,
        opacity: 0.3,
    },
    messageContent: {
        flex: 1,
        gap: 20,
    },
    messageContainer: {
        flex: 1,
        
    },
    content: {
        backgroundColor: "blue",
        height: 41,
        paddingBottom: 10,
        borderRadius: 13,
        justifyContent: 'center',
        padding: 12,

    },
    contentLeft: {
        textAlign: 'left',
    },
    contentRight: {
        textAlign: 'right',
    },
})
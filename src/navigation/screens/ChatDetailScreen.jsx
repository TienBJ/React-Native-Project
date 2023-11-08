import React from "react";
import { SafeAreaView, View, Image, Text, Pressable, StyleSheet, TouchableOpacity, ImageBackground, TextInput } from "react-native";

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
                <View style={styles.listContents}>
                    <View style={styles.content}>
                        <View style={styles.left}>
                            <Text style={styles.contentLeft}>Just to order</Text>
                        </View>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.right}>
                            <Text style={styles.contentRight}>Okay, for what level of spiciness?</Text>
                        </View>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.left}>
                            <Text style={styles.contentLeft}>Okay, wait a minute 👍</Text>
                        </View>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.right}>
                            <Text style={styles.contentRight}>Okay I'm waiting  👍</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.inputMessage}>
                    <View style={{ flexDirection: 'row', gap: 120 }}>
                        <TextInput
                            style={styles.inputText}
                            placeholder={"Okay I'm waiting  👍"}
                        />
                        <Image
                            source={require('../../../assets/Message/iconSend.png')}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        gap: 20,
        paddingHorizontal: 20,
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
    listContents: {
        gap: 20,
    },
    content: {
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
        color: '#FFF',
    },
    left: {
        backgroundColor: "#F6F6F6",
        height: 41,
        justifyContent: 'center',
        borderRadius: 13,
        paddingHorizontal: 20,
    },
    right: {
        backgroundColor: "#6B50F6",
        height: 41,
        justifyContent: 'center',
        borderRadius: 13,
        paddingHorizontal: 20,
    },
    inputMessage: {
        backgroundColor: "#FFF",
        height: 74,
        borderRadius: 22,
        justifyContent: 'center',
        paddingHorizontal: 25,
        marginTop: 160,
    }
})
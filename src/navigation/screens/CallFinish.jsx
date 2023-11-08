import React from "react";
import { SafeAreaView, View, Image, Text, Pressable, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

export const CallFinishScreen = ({ navigation }) => {
    return (
        <ImageBackground>
            <SafeAreaView style={styles.container}>
                <View style={styles.imageProfile}>
                    <Image
                        source={require('../../../assets/ImageProfile.png')}
                    />
                </View>
                <View style={{ gap: 20, alignItems: 'center' }}>
                    <Text style={styles.userName}>Richard Lewis</Text>
                    <Text style={{ opacity: 0.3 }}>15.23 Min</Text>
                </View>
                <View style={styles.statusCall}>
                    <View style={styles.speakerIcon}>
                        <Image
                            source={require("../../../assets/Message/VolumeOff.png")}
                        />
                    </View>
                    <Pressable
                    onPress={() => navigation.navigate('CallThanksScreen')}
                    >
                        <Image
                            source={require("../../../assets/cancelCall.png")}
                        />
                    </Pressable>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

export const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        gap: 45,
        padding: 20,
        marginTop: 114,
    },
    statusCall: {
        flexDirection: "row",
        gap: 20,
        marginTop: 97,
    },
    speakerIcon: {
        backgroundColor: "#6B50F6",
        height: 78,
        width: 78,
        backgroundColor: 'rgba(63, 218, 133, 0.1)',
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 120,
    },
    userName: {
        fontSize: 25,
        fontWeight: "bold",
    },
    actionSkip: {
        width: 82,
        height: 57,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "grey",
    },
    actionSubmit: {
        backgroundColor: "#6B50F6",
        width: 233,
        height: 57,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: "center",
    }

})
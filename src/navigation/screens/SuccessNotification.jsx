import React from "react";
import { ImageBackground } from "react-native";
import { SafeAreaView, View, Image, Text, Pressable, StyleSheet, TouchableOpacity } from "react-native";

export const SuccessNotification = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../../assets/SignupSuccessNotification.png')}>

            </ImageBackground>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
                <Image style={styles.icon} source={require('../../../assets/illustration.png')}></Image>
            </TouchableOpacity>
            <Text style={styles.title}>Congrats!</Text>
            <View style={styles.textButton}>
                <Text style={styles.textTitle}>Password reset succesful</Text>
                <View style={styles.buttonAction}>
                    <Pressable>
                        <Text style={styles.titleButton}>Back</Text>
                    </Pressable>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 38,
        gap: 20,
        padding: 25,
    },
    icon: {
        marginLeft: 120,
        marginTop: 227,
    },
    title: {
        color: "#6B50F6",
        fontSize: 30,
        textAlign: "center"
    },
    textTitle: {
        color: "#22242E",
        fontSize: 23,
        textAlign: "center"
    },
    buttonAction: {
        backgroundColor: "#6B50F6",
        height: 57,
        width: 157,
        boxShadow: '0px 0px 50px 0px rgba(90, 108, 234, 0.07)',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',

    },

    titleButton: {
        fontSize: 14,
        fontWeight: "bold",
        color: '#FFF'
    },
    textButton:{
        gap:200
    }

})
import React from "react";
import { SafeAreaView, View, Image, Text, Pressable, StyleSheet, TouchableOpacity } from "react-native";

export const VerificationCodeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
                <Image source={require('../../../assets/iconBack.png')} />
            </TouchableOpacity>
            <Text style={styles.Title}>Enter 4-digit Verification code</Text>
            <Text style={styles.textTile}>Code send to +123456**** . This code will expired in 01:30 </Text>
            <View style={styles.codeNumber}>
               <Text style={styles.code}>1</Text>
               <Text style={styles.code}>4</Text>
               <Text style={styles.code}>2</Text>
               <Text style={styles.code}>1</Text>
            </View>
            <View style={styles.buttonAction}>
                <Pressable>
                    <Text style={styles.titleButton}>Next</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 38,
        gap: 30,
        padding: 25,
        backgroundColor: "#FAFAFA"
    },
    Title: {
        fontSize: 25,
        fontWeight: "bold",
        width: 280,
        color: '#22242E',
    },
    textTile: {
        width: 239,
        
    },
    avata: {
        paddingTop: 44,
        alignItems: "center",

    },
    avt: {
        borderRadius: 20,
    },
    icon: {
        width: 31,
        height: 31,
        marginLeft: 200,

    },
    codeNumber: {
        flexDirection:'row',
        gap: 100,
        backgroundColor: "#FFF",
        padding: 50,
        borderRadius: 22,
        shadowColor: "#FAFAFA",
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    code: {
        color: "#22242E",
        fontSize: 28,
        fontWeight: "bold",
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
        color: '#FFF',

    },

})
import React from "react";
import { SafeAreaView, View, Image, Text, Pressable, StyleSheet, TouchableOpacity } from "react-native";

export const UploadPreviewScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
                <Image source={require('../../../assets/iconBack.png')} />
            </TouchableOpacity>
            <Text style={styles.Title}>Upload Your Photo Profile</Text>
            <Text style={styles.textTile}>This data will be displayed in your account profile for security </Text>
            <View style={styles.avata}>
                <TouchableOpacity onPress={() => navigation.navigate('PaymentScreen')}>
                    <Image style={styles.icon} source={require('../../../assets/close-button.png')} />
                </TouchableOpacity>
                <Image style={styles.avt} source={require('../../../assets/avataMan.png')}></Image>

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
        gap: 20,
        padding: 25,
    },
    Title: {
        fontSize: 25,
        fontWeight: "bold",
        width: 280,
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
        marginLeft:200,
        
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

})
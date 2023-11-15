import React from "react";
import { SafeAreaView, View, Image, Text, Pressable, StyleSheet, TouchableOpacity } from "react-native";

export const ViaMethodScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
                <Image source={require('../../../assets/iconBack.png')} />
            </TouchableOpacity>
            <Text style={styles.Title}>Forgot Password?</Text>
            <Text style={styles.textTile}>Select which contact details should we use to reset your password</Text>
            <View style={styles.iconContact}>
                <Text>
                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                        <Image source={require('../../../assets/Message.png')} />
                    </TouchableOpacity>
                </Text>
                <View style={styles.via}>
                    <Text style={styles.text}>Via sms:</Text>
                    <View style={styles.number}>
                        <Text style={styles.numberItem}>.... </Text> 
                        <Text style={styles.numberItem}>.... </Text> 
                        <Text  style={styles.numberItem}>2456</Text>
                    </View>
                </View>



            </View>
            <View style={styles.iconContact}>
                <Text style={styles.code}>
                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                        <Image source={require('../../../assets/Email.png')} />
                    </TouchableOpacity>
                </Text>
                <View style={styles.via}>
                    <Text style={styles.text}>Via email:</Text>
                    <View style={styles.number}>
                        <Text style={styles.numberItem}>......</Text> 
                        <Text style={styles.numberItem}>@madeofzero.com</Text> 
                       
                    </View>
                </View>

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
        fontSize: 30,
        fontWeight: "bold",
        width: 280,
        color: '#22242E',
    },
    textTile: {
        width: 239,

    },
    iconContact: {
        flexDirection: 'row',
        backgroundColor: "#FFF",
        padding: 40,
        borderRadius: 22,
        gap:10
    },
    text: {
        fontSize: 16,

    },
    number: {
       flexDirection:'row',
        gap:14,
        
    },
    numberItem:{
        fontSize:16,
        fontWeight:'bold'
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
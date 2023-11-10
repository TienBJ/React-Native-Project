import React from "react";
import { SafeAreaView, View, Image, Text, Pressable, StyleSheet, TouchableOpacity } from "react-native";

export const SetLocationProfileScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
                <Image source={require('../../../assets/iconBack.png')} />
            </TouchableOpacity>
            <Text style={styles.Title}>Set Your Location </Text>
            <Text style={styles.textTile}>This data will be displayed in your account profile for security</Text>
    
                <View style={styles.setlocation}>
                    <View style={styles.text}>
                        <Image source={require('../../../assets/Maps/iconLocation.png')}></Image>
                        <Text style={styles.texts}>Your Location</Text>
                    </View>
                    <View style={styles.buttonSetlocaton}>
                        <Pressable>
                            <TouchableOpacity onPress={() => navigation.navigate('')}>
                                <Text style={styles.titleButtonSetLocation}>SetLocation</Text>
                            </TouchableOpacity>

                        </Pressable>
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
        marginLeft: 200,

    },
    buttonAction: {
        backgroundColor: "#6B50F6",
        height: 57,
        width: 157,
        boxShadow: '0px 0px 50px 0px rgba(90, 108, 234, 0.07)',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 328,

    },

    titleButton: {
        fontSize: 14,
        fontWeight: "bold",
        color: '#FFF'
    },
    text: {
        flexDirection: 'row',
    },
    texts: {
       margin:5
    },
    buttonSetlocaton: {
        backgroundColor: "#F6F6F6",
        height: 57,
        boxShadow: '0px 0px 50px 0px rgba(90, 108, 234, 0.07)',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },

    titleButtonSetLocation: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#22242E",
    },
    setlocation: {
        gap:20
    },


})
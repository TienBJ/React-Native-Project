import * as React from "react";
import { View, Text, Pressable, StyleSheet, SafeAreaView, Image, ImageBackground, TextInput } from "react-native";

export default function SetLacationScreen() {
    return (
        <ImageBackground
            source={require('../../../assets/Maps/Maps.png')}
            style={styles.imageBackground}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.actionSearch}>
                    <Pressable style={styles.itemSearch}>
                        <Image
                            source={require('../../../assets/IconSearch.png')}
                        />
                        <TextInput
                            style={styles.inputText}
                            placeholder={'Find Your Lacation'}
                            placeholderTextColor={'#6B50F6'}
                        />
                    </Pressable>
                </View>
                <View style={styles.location}>
                    <Image
                        source={require('../../../assets/Maps/iconLocation.png')}
                    />
                    <View style={styles.coverLocation}></View>
                </View>
                <View style={styles.actionLocation}>
                    <Text style={{ opacity: 0.3 }}>Your Location</Text>
                    <View style={styles.locationDetail}>
                        <Image
                            source={require("../../../assets/Maps/locatonButtom.png")}
                        />
                        <Text style={styles.locationAddress}>4517 Washington Ave. Manchester, Kentucky 39495</Text>
                    </View>
                    <View style={styles.buttonAction}>
                        <Pressable>
                            <Text style={styles.titleButton}>Set Location</Text>
                        </Pressable>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    actionSearch: {
        backgroundColor: "#FFF",
        height: 69,
        width: 324,
        marginTop: 100,
        paddingHorizontal: 20,
        justifyContent: 'center',
        borderRadius: 22,
    },
    itemSearch: {
        flexDirection: 'row',
        gap: 20,
    },
    location: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //marginTop: -100,
    },
    coverLocation: {
        backgroundColor: "#6B50F6",
        width: 216,
        height: 216,
        borderRadius: 120,
        opacity: 0.1,
        position: 'absolute',
    },
    locationDetail: {
        flexDirection: 'row',
        gap: 13,
    },
    actionLocation: {
        backgroundColor: "#FFF",
        height: 181,
        borderRadius: 22,
        paddingHorizontal: 20,
        marginBottom: 20,
        justifyContent: 'center',
        gap: 10,
    },
    locationAddress: {
        fontSize: 15,
        fontWeight: "bold",
    },
    buttonAction: {
        backgroundColor: "#6B50F6",
        height: 57,
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
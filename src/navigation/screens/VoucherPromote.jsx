import React from "react";
import { SafeAreaView, View, Image, Text, Pressable, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from "react-native";

export const VoucherPromote = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={require('../../../assets/iconBack.png')} />
            </TouchableOpacity>
            <Text style={styles.voucherTitle}>Voucher Promo</Text>
            <View style={styles.listEvents}>
                <View style={styles.event}>
                    <ImageBackground
                        source={require('../../../assets/Voucher/Voucher1.png')}
                        style={styles.backgroundEvent}
                    />
                    <View style={styles.content}>
                        <Text style={styles.titleEvent}>Special Deal For October</Text>
                        <Pressable style={styles.actionSubmit}>
                            <Text style={styles.textSubmit1}>Order Now</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.event}>
                    <ImageBackground
                        source={require('../../../assets/Voucher/Voucher2.png')}
                        style={styles.backgroundEvent}
                    />
                    <View style={styles.content}>
                        <Text style={styles.titleEvent2}>Special Deal For October</Text>
                        <Pressable style={styles.actionSubmit}>
                            <Text style={styles.textSubmit2}>Order Now</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
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
    voucherTitle: {
        fontSize: 25,
        fontWeight: "bold",
    },
    listEvents: {
        gap: 20,
    },
    backgroundEvent: {
        height: 122,
    },
    actionSubmit: {
        backgroundColor: '#FFF',
        height: 32,
        width: 82,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
    },
    titleEvent: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#FFF',
        width: 142,
    },
    titleEvent2: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#6B3A5B',
        width: 142,
    },
    content: {
        position: 'absolute',
        paddingHorizontal: 173,
        gap: 10,
        flexDirection: "column",
        marginTop: 17,
    },
    textSubmit2: {
        color: "#6B3A5B",
        fontSize: 10,
        fontWeight: "bold",
    },
    textSubmit1: {
        color: "#009C51",
        fontSize: 10,
        fontWeight: "bold",
    }

})
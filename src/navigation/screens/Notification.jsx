import React from "react";
import { SafeAreaView, View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

export const NotificationScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={require('../../../assets/iconBack.png')} />
            </TouchableOpacity>
            <Text style={styles.NotificationTitle}>Notification</Text>
            <View style={styles.listNotifacation}>
                <View style={styles.itemList}>
                    <View style={styles.item}>
                        <Image
                            source={require('../../../assets/Notification/Checked.png')}
                        />
                        <View style={styles.itemTitle}>
                            <Text style={styles.detailTitle}>Your order has been taken by the driver</Text>
                            <Text style={styles.moreTitle}>Recently</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.itemList}>
                    <View style={styles.item}>
                        <Image
                            source={require('../../../assets/Notification/Money.png')}
                        />
                        <View style={styles.itemTitle}>
                            <Text style={styles.detailTitle}>Topup for $100 was successful</Text>
                            <Text style={styles.moreTitle}>10.00 Am</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.itemList}>
                    <View style={styles.item}>
                        <Image
                            source={require('../../../assets/Notification/X-Button.png')}
                        />
                        <View style={styles.itemTitle}>
                            <Text style={styles.detailTitle}>Your order has been canceled</Text>
                            <Text style={styles.moreTitle}>22 Juny 2021</Text>
                        </View>
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
    NotificationTitle: {
        fontSize: 25,
        fontWeight: "bold",
    },
    listNotifacation: {
        flex: 1,
    },
    itemList: {
        paddingBottom: 20,
    },
    item: {
        backgroundColor: '#FFF',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        height: 105,
        borderRadius: 22,
    },
    detailTitle: {
        color: "#22242E",
        fontWeight: "bold",
        fontSize: 15,
        width: 234,
    },
    moreTitle: {
        opacity: 0.3,
        fontSize: 14,
    },

})
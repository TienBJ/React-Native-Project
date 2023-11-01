import React from "react";
import { SafeAreaView, View, Image, Text, Pressable, StyleSheet, TouchableOpacity } from "react-native";

export const EditPaymentScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('PaymentScreen')}>
                <Image source={require('../../../assets/iconBack.png')} />
            </TouchableOpacity>
            <Text style={styles.confirmOrder}>Payment</Text>
            <View style={styles.actionList}>
                <View style={styles.actionPayment}>
                    <View style={styles.editAction}>
                        <Image
                            source={require('../../../assets/Payments/paypal.png')}
                        />
                        <Text style={styles.addressDetail}>2121 6352 8465 ****</Text>
                    </View>
                    
                </View>
                <View style={styles.actionPayment}>
                    <View style={styles.editAction}>
                        <Image
                            source={require('../../../assets/Payments/visa.png')}
                        />
                        <Text style={styles.addressDetail}>2121 6352 8465 ****</Text>
                    </View>
                    
                </View>
                <View style={styles.actionPayment}>
                    <View style={styles.editAction}>
                        <Image
                            source={require('../../../assets/Payments/Payoneer.png')}
                        />
                        <Text style={styles.addressDetail}>2121 6352 8465 ****</Text>
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
    actionPayment: {
        flexDirection: "column",
        backgroundColor: "#FFF",
        height: 73,
        justifyContent: "center",
        borderRadius: 22,
        paddingHorizontal: 20,
        gap: 10,
    },
    actionList: {
        gap: 20,
    },
    confirmOrder: {
        fontSize: 25,
        fontWeight: "bold",
    },
    editAction: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    editTitle: {
        color: "#6B50F6",
        fontSize: 14,
        fontWeight: "bold"
    },
    nameAction: {
        opacity: 0.3,
    },
    addressDetail: {
        fontSize: 15,
        fontWeight: "bold",
    }

})
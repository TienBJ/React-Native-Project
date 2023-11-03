import React from "react";
import { SafeAreaView, View, Image, Text, Pressable, StyleSheet, TouchableOpacity } from "react-native";

export const EditLocationScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('PaymentScreen')}>
                <Image source={require('../../../assets/iconBack.png')} />
            </TouchableOpacity>
            <Text style={styles.confirmOrder}>Shipping</Text>
            <View style={styles.actionList}>
                <View style={styles.location}>
                    <View style={styles.editAction}>
                        <Text style={styles.nameAction}>Order Location</Text>
                    </View>
                    <View style={styles.editAction}>
                        <Image
                            source={require('../../../assets/Payments/location.png')}
                        />
                        <Text style={styles.addressDetail}>8502 Preston Rd. Inglewood, Maine 98380</Text>
                    </View>
                </View>
                <View style={styles.location2}>
                    <View style={styles.editAction}>
                        <Text style={styles.nameAction}>Deliver To</Text>
                    </View>
                    <View style={styles.editAction}>
                        <Image
                            source={require('../../../assets/Payments/location.png')}
                        />
                        <View style={styles.detaiLocation}>
                            <Text style={styles.addressDetail}>4517 Washington Ave. Manchester, Kentucky 39495</Text>
                            <Pressable
                            onPress={() => navigation.navigate("SetLacationScreen")}
                            >
                                <Text style={styles.setLocation}>set location</Text>
                            </Pressable>
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
    location: {
        flexDirection: "column",
        backgroundColor: "#FFF",
        height: 108,
        justifyContent: "center",
        borderRadius: 22,
        paddingHorizontal: 20,
        gap: 10,
    },
    location2: {
        flexDirection: "column",
        backgroundColor: "#FFF",
        height: 141,
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
    },
    setLocation: {
        color: "#6B50F6",
    },
    detaiLocation: {
        gap: 20,
    }

})
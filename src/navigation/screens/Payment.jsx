import React from "react";
import { SafeAreaView, View, Image, Text, Pressable, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from "react-native";
import TotalPrice from "../../components/TotalPrice";

export const PaymentScreen = ({ totalPrice, navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <Image source={require('../../../assets/iconBack.png')} />
            </TouchableOpacity>
            <Text style={styles.confirmOrder}>Confirm Order</Text>
            <View style={styles.actionList}>
                <View style={styles.actionPayment}>
                    <View style={styles.editAction}>
                        <Text style={styles.nameAction}>Deliver To</Text>
                        <Pressable
                            onPress={() => navigation.navigate('EditLocationScreen')}
                        >
                            <Text style={styles.editTitle}>Edit</Text>
                        </Pressable>
                    </View>
                    <View style={styles.editAction}>
                        <Image
                            source={require('../../../assets/Payments/location.png')}
                        />
                        <Text style={styles.addressDetail}>4517 Washington Ave. Manchester, Kentucky 39495</Text>
                    </View>
                </View>
                <View style={styles.actionPayment}>
                    <View style={styles.editAction}>
                        <Text style={styles.nameAction}>Payment Method</Text>
                        <Pressable
                            onPress={() => navigation.navigate('EditPaymentScreen')}
                        >
                            <Text style={styles.editTitle}>Edit</Text>
                        </Pressable>
                    </View>
                    <View style={styles.editAction}>
                        <Image
                            source={require('../../../assets/Payments/paypal.png')}
                        />
                        <Text style={styles.addressDetail}>2121 6352 8465 ****</Text>
                    </View>
                </View>
            </View>
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <ImageBackground
                    source={require('../../../assets/OrderDetails/backgroundTotal.png')}
                    style={styles.backgroundContainer}
                >
                    {/*<TotalPrice totalPrice={totalPrice} navigation={navigation} />*/}
                    <View style={styles.totalHandle}>
                        <View style={styles.totalDetail}>
                            <View style={styles.contentLeft}>
                                <Text style={styles.textWhite}>Sub-Total</Text>
                                <Text style={styles.textWhite}>Delivery Charge</Text>
                                <Text style={styles.textWhite}>Discount</Text>
                                <Text style={styles.textTotal}>Total</Text>
                            </View>
                            <View style={styles.contentRight}>
                                <Text style={styles.textWhite}>120 $</Text>
                                <Text style={styles.textWhite}>10 $</Text>
                                <Text style={styles.textWhite}>20 $</Text>
                                <Text style={styles.textSumPrice}>150 $</Text>
                            </View>
                        </View>
                        <View style={styles.buttonSubmit}>
                            <Pressable
                                onPress={() => navigation.navigate('OrderScreen')}
                                style={styles.actionButton}
                            >
                                <Text style={styles.textAction}>Place My Order</Text>
                            </Pressable>
                        </View>
                    </View>
                </ImageBackground>
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
    textWhite: {
        color: "#FFF"
    },
    actionPayment: {
        flexDirection: "column",
        backgroundColor: "#FFF",
        height: 108,
        justifyContent: "center",
        borderRadius: 22,
        paddingHorizontal: 20,
        gap: 10,
    },
    actionList: {
        gap: 20,
        marginBottom: 120,
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
    backgroundContainer: {
        flex: 1,
        resizeMode: 'cover',
        height: 216,
        width: 346,
    },

    totalHandle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 20,
        color: '#FFF',
        marginTop: 20,
    },

    totalDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    textTotal: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
        marginTop: 10,
    },


    contentLeft: {
        marginLeft: 24,
    },

    contentRight: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 24,
    },

    textSumPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
        marginTop: 10,
    },

    buttonSubmit: {
        marginTop: 20,
    },

    actionButton: {
        backgroundColor: '#FFF',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 15,
    },

    textAction: {
        color: '#6B50F6',
        fontSize: 14,
        fontWeight: 'bold',
    },

})
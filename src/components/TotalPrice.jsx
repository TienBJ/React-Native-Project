import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, ImageBackground, SafeAreaView } from 'react-native';
import Search from './Search';

function TotalPrice({totalPrice, navigation}) {
    return (
        <View style={styles.totalHandle}>
            <View style={styles.totalDetail}>
                <View style={styles.contentLeft}>
                    <Text style={styles.textWhite}>Sub-Total</Text>
                    <Text style={styles.textWhite}>Delivery Charge</Text>
                    <Text style={styles.textWhite}>Discount</Text>
                    <Text style={styles.textTotal}>Total</Text>
                </View>
                <View style={styles.contentRight}>
                    <Text style={styles.textWhite}>{totalPrice} $</Text>
                    <Text style={styles.textWhite}>10 $</Text>
                    <Text style={styles.textWhite}>20 $</Text>
                    <Text style={styles.textSumPrice}>{totalPrice+10+20}</Text>
                </View>
            </View>
            <View style={styles.buttonSubmit}>
                <Pressable
                    onPress={() => navigation.navigate('PaymentScreen')}
                    style={styles.actionButton}
                >
                    <Text style={styles.textAction}>Place My Order</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    totalHandle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 20,
        color: '#FFF',
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

export default TotalPrice;
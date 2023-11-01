import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet, ScrollView } from "react-native";
import Header from "../../components/Header";

const OrderScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <Header navigation={navigation}/>
                <View style={styles.listItem}>
                    <Pressable style={styles.item}>
                        <Image
                            source={require('../../../assets/OrderDetails/product2.png')}
                        />
                        <View style={styles.itemDetail}>
                            <Text style={styles.itemMune}>Herbal Pancake</Text>
                            <Text style={styles.itemRestaurant}>Warung Herbal</Text>
                            <Text style={styles.itemPrice}>$ 35</Text>
                        </View>
                        <Pressable
                            style={styles.actionBuy}
                        >
                            <Text style={styles.buyTitle}>Proccess</Text>
                        </Pressable>
                    </Pressable>
                    <Pressable style={styles.item}>
                        <Image
                            source={require('../../../assets//OrderDetails/product3.png')}
                        />
                        <View style={styles.itemDetail}>
                            <Text style={styles.itemMune}>Fruit Salad</Text>
                            <Text style={styles.itemRestaurant}>Wijie Resto</Text>
                            <Text style={styles.itemPrice}>$ 35</Text>
                        </View>
                        <Pressable
                            style={styles.actionBuy}
                        >
                            <Text style={styles.buyTitle}>Proccess</Text>
                        </Pressable>
                    </Pressable>
                    <Pressable style={styles.item2}>
                        <Image source={require('../../../assets/Home/HerbalPancake.png')} />
                        <View style={styles.itemDetail}>
                            <Text style={styles.itemMune}>Herbal Pancake</Text>
                            <Text style={styles.itemRestaurant}>Warung Herbal</Text>
                            <Text style={styles.itemPrice}>$ 35</Text>
                        </View>
                        <Pressable style={styles.actionBuy}>
                            <Text style={styles.buyTitle}>Process</Text>
                        </Pressable>
                    </Pressable>
                    <Pressable style={styles.item2}>
                        <Image
                            source={require('../../../assets//OrderDetails/product4.png')}
                        />
                        <View style={styles.itemDetail}>
                            <Text style={styles.itemMune}>Fruit Salad</Text>
                            <Text style={styles.itemRestaurant}>Wijie Resto</Text>
                            <Text style={styles.itemPrice}>$ 35</Text>
                        </View>
                        <Pressable
                            style={styles.actionBuy}
                        >
                            <Text style={styles.buyTitle}>Proccess</Text>
                        </Pressable>
                    </Pressable>
                </View>
                <Pressable style={styles.actionSubmit}>
                    <Text style={styles.titleSubmit}>Check out</Text>
                </Pressable>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 16,
    },
    listItem: {
        flexDirection: "column",
        justifyContent: "space-between",

    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#FFF",
        borderRadius: 10,
        marginBottom: 16,
    },
    item2: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#D9D9D9",
        borderRadius: 10,
        marginBottom: 16,
    },
    itemDetail: {
        flex: 1,
        marginLeft: 26,
    },
    itemMenu: {
        fontSize: 15,
        fontWeight: "bold",
    },
    itemRestaurant: {
        fontSize: 14,
        opacity: 0.3,
    },
    itemPrice: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#6B50F6",
    },
    popularTitle: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    textViewMore: {
        color: '#6B50F6',
    },
    actionBuy: {
        height: 29,
        width: 79,
        backgroundColor: "#6B50F6",
        borderRadius: 17.5,
        paddingHorizontal: 11,
        justifyContent: "center",
    },
    buyTitle: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 12,
    },
    actionSubmit: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: "#6B50F6",
        borderRadius: 15,
        height: 57,
        justifyContent: "center",
        alignItems: "center",
    },
    titleSubmit: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#FFFFFF"
    }
})

export default OrderScreen;
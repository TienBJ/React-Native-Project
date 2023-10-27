import React, { useState } from "react";
import { Alert } from "react-native";
import { View, Text, Image, Pressable, ImageBackground, StyleSheet } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

export const CartScreen = () => {
    const [counts, setCounts] = useState([0, 0, 0]);

    const handlePlus = (index) => {
        const newCounts = [...counts];
        newCounts[index]++;
        setCounts(newCounts);
    };

    const handleMinus = (index) => {
        if (counts[index] > 0) {
            const newCounts = [...counts];
            newCounts[index]--;
            setCounts(newCounts);
        }
        else {
           Alert.alert('Error', 'The number cannot be less than 0');
        }
    };


    const ProductList = [
        { image: "1", name: "Spicy fresh crab", information: "Waroenk kita", price: "$35" },
        { image: "2", name: "Delicious shrimp", information: "Seafood Palace", price: "$25" },
        { image: "3", name: "Spicy fresh crab", information: "Waroenk kita", price: "$35" },
    ];

    return (
        <View style={styles.orderPage}>
            <Text style={styles.textOrderPage}>Order details</Text>
            <View style={styles.itemContainer}>
                <SwipeListView
                    data={ProductList}
                    renderItem={({ item, index }) => (
                        <View style={styles.items}>
                            <Image
                                source={require("../../../assets/OrderDetails/product1.png")}
                                style={styles.itemImage}
                            />
                            <View style={styles.itemDetail}>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text style={styles.itemInformation}>{item.information}</Text>
                                <Text style={styles.itemPrice}>{item.price}</Text>
                            </View>
                            <View style={styles.itemHandle}>
                                <Pressable onPress={() => handleMinus(index)}>
                                    <Image
                                        source={require('../../../assets/OrderDetails/IconMinus.png')}
                                        style={styles.iconMinus}
                                    />
                                </Pressable>
                                <Text style={styles.itemQuantity}>{counts[index]}</Text>
                                <Pressable onPress={() => handlePlus(index)}>
                                    <Image
                                        source={require('../../../assets/OrderDetails/IconPlus.png')}
                                        style={styles.iconPlus}
                                    />
                                </Pressable>
                            </View>
                        </View>
                    )}
                    renderHiddenItem={() => (
                        <View style={styles.actionDelete}>
                            <Pressable>
                                <Image
                                    source={require('../../../assets/OrderDetails/trash.png')}
                                    style={styles.iconDelete}
                                />
                            </Pressable>
                        </View>
                    )}
                    rightOpenValue={-75}
                />
            </View>
            <ImageBackground
                source={require('../../../assets/OrderDetails/backgroundTotal.png')}
                style={styles.backgroundContainer}
            >
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
                        <Pressable style={styles.actionButton}>
                            <Text style={styles.textAction}>Place My Order</Text>
                        </Pressable>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};


const styles = StyleSheet.create({
    textWhite: {
        color: "#FFF",
    },

    orderPage: {
        flex: 1,
        gap: 30,
    },

    itemContainer: {
        flexDirection: "column",
        gap: 40,
    },

    textOrderPage: {
        fontSize: 25,
        fontWeight: "bold",
    },
    items: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: "#FFF",
        borderRadius: 24,
    },

    itemHandle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
    },

    itemPrice: {
        color: "#6B50F6",
        fontWeight: 'bold',
        fontSize: 19,
    },

    itemInformation: {
        color: "#22242E",
        opacity: 0.5,
        fontSize: 14,
    },

    itemName: {
        color: "#22242E",
        fontWeight: 'bold',
        fontSize: 15,
    },

    backgroundContainer: {
        flex: 1,
        resizeMode: 'cover',
        height: 206,
        marginTop: 100,
        marginBottom: 100,
    },

    totalHandle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingBottom: 50,
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
    actionDelete: {
        backgroundColor: '#6B50F6',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 22,
        marginRight: 14,
        marginLeft: 14,
    },
    iconDelete: {
        marginRight: 25,
    },

})

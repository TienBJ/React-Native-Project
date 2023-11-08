import React, { useEffect, useState,map} from "react";
import { Alert } from "react-native";
import { View, Text, Image, Pressable, ImageBackground, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import TotalPrice from "../../components/TotalPrice";

export const CartScreen = ({ navigation }) => {
    const [counts, setCounts] = useState([1, 1, 1]);
    const [totalPrice, setTotalPrice] = useState(0);
    const totalItemPrice=0;
    useEffect(() => {
        const initialTotalPrice = ProductList.reduce((total, item, index) => {
            const itemPrice = parseFloat(item.price);
            return total + (counts[index] * itemPrice);
        }, 0);
        setTotalPrice(initialTotalPrice);
    }, []);

    const handlePlus = (index) => {
        const newCounts = [...counts];
        newCounts[index]++;
        setCounts(newCounts);


        const itemPrice = parseFloat(ProductList[index].price);
        const subtotal = newCounts[index] * itemPrice;


        const newTotalPrice = totalPrice + subtotal;
        setTotalPrice(newTotalPrice);
    };

    const handleMinus = (index) => {
        if (counts[index] > 0) {
            const newCounts = [...counts];
            newCounts[index]--;
            setCounts(newCounts);

            const itemPrice = parseFloat(ProductList[index].price);
            const subtotal = newCounts[index] * itemPrice;
    
    
            const newTotalPrice = totalPrice - subtotal;
            setTotalPrice(newTotalPrice);
        }
        else {
            Alert.alert('Error', 'The number cannot be less than 1');
        }
    };

    const ProductList = [
        { image: "1", name: "Spicy fresh crab", information: "Waroenk kita", price: 35 },
        { image: "2", name: "Delicious shrimp", information: "Seafood Palace", price: 25 },
        { image: "3", name: "Spicy fresh crab", information: "Waroenk kita", price: 35 },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={require('../../../assets/iconBack.png')} />
            </TouchableOpacity>
            <Text style={styles.textOrderPage}>Order details</Text>
            <ScrollView>

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
                                <Text style={styles.itemPrice}>${item.price}</Text>
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
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <ImageBackground
                        source={require('../../../assets/OrderDetails/backgroundTotal.png')}
                        style={styles.backgroundContainer}
                    >
                        
                        <TotalPrice totalPrice={totalPrice} navigation={navigation} />
                        {/* <View style={styles.totalHandle}>
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
                                    onPress={() => navigation.navigate('PaymentScreen')}
                                    style={styles.actionButton}
                                >
                                    <Text style={styles.textAction}>Place My Order</Text>
                                </Pressable>
                            </View>
                        </View> */}
                    </ImageBackground>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    textWhite: {
        color: "#FFF",
    },

    container: {
        flex: 1,
        paddingTop: 50,
        gap: 20,
        padding: 20,
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
        height: 103,
        marginBottom: 20,
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
        marginBottom: 80,
        width: 346,
    },


    actionDelete: {
        backgroundColor: '#6B50F6',
        flexDirection: "row",
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 22,
        marginRight: 14,
        marginLeft: 14,
        height: 103,
    },
    iconDelete: {
        marginRight: 25,
    },

})

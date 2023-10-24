import { View, Text, Image, Pressable, ImageBackground, StyleSheet } from "react-native";

export const OrderDetails = () => {
    return (
        <View style={styles.orderPage}>
            <Text style={styles.textOrderPage}>Order details</Text>
            <View style={styles.itemContainer}>
                <View style={styles.items}>
                    <Image
                        source={require('../../assets/OrderDetails/product1.png')}
                        style={styles.itemImage}
                    />
                    <View style={styles.itemDetail}>
                        <Text style={styles.itemName}>Spacy fresh crab</Text>
                        <Text style={styles.itemInformation}>Waroenk kita</Text>
                        <Text style={styles.itemPrice}>$ 35</Text>
                    </View>
                    <View style={styles.itemHandle}>
                        <Image
                            source={require('../../assets/OrderDetails/IconMinus.png')}
                            style={styles.iconMinus}
                        />
                        <Text style={styles.itemQuantity}>1</Text>
                        <Image
                            source={require('../../assets/OrderDetails/IconPlus.png')}
                            style={styles.iconMinus}
                        />
                    </View>
                </View>
                <View style={styles.items}>
                    <Image
                        source={require('../../assets/OrderDetails/product2.png')}
                        style={styles.itemImage}
                    />
                    <View style={styles.itemDetail}>
                        <Text style={styles.itemName}>Spacy fresh crab</Text>
                        <Text style={styles.itemInformation}>Waroenk kita</Text>
                        <Text style={styles.itemPrice}>$ 35</Text>
                    </View>
                    <View style={styles.itemHandle}>
                        <Image
                            source={require('../../assets/OrderDetails/IconMinus.png')}
                            style={styles.iconMinus}
                        />
                        <Text style={styles.itemQuantity}>1</Text>
                        <Image
                            source={require('../../assets/OrderDetails/IconPlus.png')}
                            style={styles.iconMinus}
                        />
                    </View>
                </View>
                <View style={styles.items}>
                    <Image
                        source={require('../../assets/OrderDetails/product3.png')}
                        style={styles.itemImage}
                    />
                    <View style={styles.itemDetail}>
                        <Text style={styles.itemName}>Spacy fresh crab</Text>
                        <Text style={styles.itemInformation}>Waroenk kita</Text>
                        <Text style={styles.itemPrice}>$ 35</Text>
                    </View>
                    <View style={styles.itemHandle}>
                        <Image
                            source={require('../../assets/OrderDetails/IconMinus.png')}
                            style={styles.iconMinus}
                        />
                        <Text style={styles.itemQuantity}>1</Text>
                        <Image
                            source={require('../../assets/OrderDetails/IconPlus.png')}
                            style={styles.iconMinus}
                        />
                    </View>
                </View>
            </View>
            <ImageBackground
                source={require('../../assets/OrderDetails/backgroundTotal.png')}
                style={styles.backgroundContainer}
            >
                <View style={styles.totalHandle}>
                    <View style={styles.totalDetail}>
                        <View style={styles.contentLeft}>
                            <Text style={[whiteColor.color]}>Sub-Total</Text>
                            <Text style={[whiteColor.color]}>Delivery Charge</Text>
                            <Text style={[whiteColor.color]}>Discount</Text>
                            <Text style={styles.textTotal}>Total</Text>
                        </View>
                        <View style={styles.contentRight}>
                            <Text>120 $</Text>
                            <Text>10 $</Text>
                            <Text>20 $</Text>
                            <Text style={styles.textSumPrice}>150$</Text>
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

    )
}

const whiteColor = {
    color: 'white',
}

const styles = StyleSheet.create({
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
    }
    ,
    items: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 25,
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
        marginTop: 108,
    },

    totalHandle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20,
        color: '#FFF'
    },

    totalDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    textTotal: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },

    textSubtotal: {
        color: '#FFF'
    },

    contentRight: {
        flex: 1,
        alignItems: 'flex-end',
    },

    textSumPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
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

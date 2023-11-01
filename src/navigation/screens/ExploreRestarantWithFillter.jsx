import * as React from "react";
import { View, ImageBackground, Text, Image, Pressable, FlatList, StyleSheet } from "react-native";
import Header from "../../components/Header";

const data = [
    { id: "1", name: "Vegan Resto", image: require("../../../assets/Home/mage.png") },
    { id: "2", name: "Healthy Food", image: require("../../../assets/Home/luamach.png") },
    { id: "3", name: "Good Food", image: require("../../../assets/Home/GoodFoot.png") },
    { id: "4", name: "Smart Resto", image: require("../../../assets/Home/SmartResto.png") },
    { id: "5", name: "Dianne Russell", image: require("../../../assets/Home/DianneRussell.png") },
    { id: "6", name: "Spacy fresh crab", image: require("../../../assets/Home/luamach.png") },
    { id: "7", name: "Spacy fresh crab", image: require("../../../assets/Home/luamach.png") },
    { id: "8", name: "Green Noddle", image: require("../../../assets/Home/luamach.png") },
];

export default function ExploreRestarantWithFillter({ navigation }) {
    const renderItem = ({ item }) => {
        return (
            <View style={styles.productContainer}>
                <Image source={item.image} style={styles.productImage} />
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.textMin}>12 Mins</Text>
            </View>
        );
    };

    return (

        <View style={styles.mainContent}>
            <Header />
            <View style={{ flexDirection: 'row', gap: 20, paddingHorizontal: 20 }}>
                <Pressable
                    onPress={() => navigation.navigate('ExploreMenuWithFillter')}
                    style={styles.item}>
                    <View style={styles.location}>
                        <Text style={styles.titleItem}>&gt;</Text>
                        <Text style={styles.titleItem}>10 Km X</Text>
                    </View>
                </Pressable>
                <Pressable style={styles.itemSoup}>
                    <Text style={styles.titleItem}>Soup X</Text>
                </Pressable>
            </View>
            <View style={styles.nearestRestuarant}>
                <Text style={styles.textRestaurant}>Nearest Restaurant</Text>
            </View>

            <FlatList
                data={data}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />

        </View>

    )
}

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        backgroundColor: "#FEFEFF",
    },

    textMin: {
        opacity: 0.5,
    },

    contentImage: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    backgroundMainContent: {
        width: 325,
        height: 150,
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },

    spectialText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },

    contentBackground: {
        width: 145,
        flexDirection: 'column',
        gap: 10,
    },

    actionBuyNow: {
        backgroundColor: '#FFF',
        width: 82,
        height: 32,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textBuyNow: {
        color: '#6B50F6',
        fontWeight: 'bold',
    },

    textRestaurant: {
        color: '#22242E',
        fontSize: 15,
        fontWeight: 'bold',
    },

    nearestRestuarant: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },

    textViewMore: {
        color: '#6B50F6',
    },
    productContainer: {
        flex: 1,
        margin: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#FFF",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    productImage: {
        resizeMode: "cover",
        alignSelf: "center",
    },
    productName: {
        textAlign: "center",
        marginTop: 5,
        fontWeight: "bold",
    },
    item: {
        backgroundColor: "rgba(0, 255, 102, 0.1)",
        height: 44,
        paddingHorizontal: 20,
        borderRadius: 15,
        marginBottom: 20,
        width: 112,
        justifyContent: 'center',
    },
    titleItem: {
        fontSize: 15,
        color: "#6B50F6",
    },
    itemSoup: {
        backgroundColor: "rgba(0, 255, 102, 0.1)",
        height: 44,
        paddingHorizontal: 20,
        borderRadius: 15,
        marginBottom: 20,
        width: 92,
        justifyContent: 'center',
    },
    titleItem: {
        fontSize: 15,
        color: "#6B50F6",
    },
    location: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
})

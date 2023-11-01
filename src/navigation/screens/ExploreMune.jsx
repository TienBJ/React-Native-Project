import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet } from "react-native";
import Header from "../../components/Header";

const ExploreMenu = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation}/>
            <View style={styles.popularTitle}>
                <Text style={styles.title}>Popular Menu</Text>
            </View>

            <View style={styles.listItem}>
                <Pressable style={styles.item}>
                    <Image
                        source={require('../../../assets/Home/HerbalPancake.png')}
                    />
                    <View style={styles.itemDetail}>
                        <Text style={styles.itemMune}>Herbal Pancake</Text>
                        <Text style={styles.itemRestaurant}>Warung Herbal</Text>
                    </View>
                    <Text style={styles.itemPrice}>$7</Text>
                </Pressable>
                <Pressable style={styles.item}>
                    <Image
                        source={require('../../../assets/Home/FruitSalad.png')}
                    />
                    <View style={styles.itemDetail}>
                        <Text style={styles.itemMune}>Fruit Salad</Text>
                        <Text style={styles.itemRestaurant}>Wijie Resto</Text>
                    </View>
                    <Text style={styles.itemPrice}>$5</Text>
                </Pressable>
                <Pressable style={styles.item}>
                    <Image
                        source={require('../../../assets/Home/GreenNoddle.png')}
                    />
                    <View style={styles.itemDetail}>
                        <Text style={styles.itemMune}>Green Noddle</Text>
                        <Text style={styles.itemRestaurant}>Noodle Home</Text>
                    </View>
                    <Text style={styles.itemPrice}>$15</Text>
                </Pressable>
            </View>
        </SafeAreaView>
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
})

export default ExploreMenu;
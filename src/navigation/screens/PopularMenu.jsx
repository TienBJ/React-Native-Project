import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet, onPress } from "react-native";

const PopularMenu = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.popularTitle}>
                <Text style={styles.title}>Popular Menu</Text>
                <Pressable
                onPress={() => navigation.navigate('ExploreMenu')}
                >
                    <Text style={styles.textViewMore}>View More</Text>
                </Pressable>
            </View>

            <View style={styles.listItem}>
                <Pressable 
                onPress={() => navigation.navigate('DetailMenuScreen')}
                style={styles.item}>
                    <Image
                        source={require('../../../assets/Home/HerbalPancake.png')}
                    />
                    <View style={styles.itemDetail}>
                        <Text style={styles.itemMune}>Herbal Pancake</Text>
                        <Text style={styles.itemRestaurant}>Warung Herbal</Text>
                    </View>
                    <Text style={styles.itemPrice}>$7</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 31,
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 16,
    },
    listItem: {
        flexDirection: "column",
        justifyContent: "space-between",
        paddingBottom: 120,
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#f0f0f0",
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

export default PopularMenu;
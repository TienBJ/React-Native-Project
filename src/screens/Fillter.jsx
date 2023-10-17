import React from "react";
import { View, SafeAreaView, Text, StyleSheet, Pressable } from "react-native";

export const Filter = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Type</Text>
            <View style={styles.keywordItem}>
                <Pressable style={styles.item}>
                    <Text style={styles.titleItem}>Restaurant</Text>
                </Pressable>
                <Pressable style={styles.item}>
                    <Text style={styles.titleItem}>Menu</Text>
                </Pressable>
            </View>
            <Text style={styles.title}>Location</Text>
            <View style={styles.keywordItem}>
                <Pressable style={styles.item}>
                    <Text style={styles.titleItem}>1 Km</Text>
                </Pressable>
                <Pressable style={styles.item}>
                    <View style={styles.location}>
                        <Text style={styles.titleItem}>&gt;</Text>
                        <Text style={styles.titleItem}>10 Km</Text>
                    </View>
                </Pressable>
                <Pressable style={styles.item}>
                    <View style={styles.location}>
                        <Text style={styles.titleItem}>&lt;</Text>
                        <Text style={styles.titleItem}>10 Km</Text>
                    </View>
                </Pressable>
            </View>
            <Text style={styles.title}>Food</Text>
            <View style={styles.keywordItem}>
                <Pressable style={styles.item}>
                    <Text style={styles.titleItem}>Cake</Text>
                </Pressable>
                <Pressable style={styles.item}>
                    <Text style={styles.titleItem}>Soup</Text>
                </Pressable>
                <Pressable style={styles.item}>
                    <Text style={styles.titleItem}>Main Course</Text>
                </Pressable>
                <Pressable style={styles.item}>
                    <Text style={styles.titleItem}>Appetizer</Text>
                </Pressable>
                <Pressable style={styles.item}>
                    <Text style={styles.titleItem}>Dessert</Text>
                </Pressable>
            </View>
            <Pressable style={styles.bottomAction}>
                <Text style={styles.bottomTitle}>Search</Text>
            </Pressable>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        padding: 20,
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 10,
    },
    keywordItem: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    item: {
        backgroundColor: "rgba(0, 255, 102, 0.1)",
        height: 44,
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 15,
        marginRight: 10,
        marginBottom: 10,
    },
    location: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    titleItem: {
        fontSize: 15,
        color: "#6B50F6",
    },
    text: {
        fontSize: 15,
    },
    bottomAction: {
        marginTop:80,
        backgroundColor: "#6B50F6",
        height: 57,
        width:325,
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    bottomTitle: {
        fontSize: 14,
        color: "#FEFEFF",
        fontWeight: "bold",
    }
});

export default Filter;

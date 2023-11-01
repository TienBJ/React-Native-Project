import React from "react";
import { View, Text, SafeAreaView, Pressable, StyleSheet, Image, ImageBackground } from "react-native";
import ParallaxScrollView from 'react-native-parallax-scroll-view';

export default function ProfileScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ParallaxScrollView
                parallaxHeaderHeight={320}
                renderForeground={() => (
                    <ImageBackground
                        source={require('../../../assets/Profile/profilePhoto.png')}
                        style={styles.imageProfile}
                    />
                )}

            >

                <View style={styles.detailProfile}>
                    <View style={styles.actionScrool}>
                        <View style={styles.scrollToll}></View>
                    </View>
                    <View style={styles.memberTitle}>
                        <Text style={styles.textMember}>Member Gold</Text>
                    </View>
                    <View style={styles.profileName}>
                        <View style={styles.information}>
                            <Text style={styles.name}>Arash Ranjbaran</Text>
                            <Text style={styles.email}>awdesign.ar@gmail.com</Text>
                        </View>
                        <Image
                            source={require('../../../assets/Profile/iconEdit.png')}
                            style={styles.iconEdit}
                        />
                    </View>
                    <View style={styles.voucher}>
                        <Image
                            source={require('../../../assets/Profile/iconDiscount.png')}
                        />
                        <Text>You Have 3 Voucher</Text>
                    </View>
                    <Text style={styles.favarite}>Favorite</Text>
                    <View style={styles.listItems}>
                        <View style={styles.item}>
                            <Image
                                source={require('../../../assets/Profile/menu1.png')}
                            />
                            <View style={styles.itemDetail}>
                                <Text style={styles.itemName}>Spacy fresh crab</Text>
                                <Text style={styles.itemDescribe}>Waroenk kita</Text>
                                <Text style={styles.itemPrice}>$ 35</Text>
                            </View>
                            <Pressable
                                style={styles.actionBuy}
                            >
                                <Text style={styles.buyTitle}>Buy Again</Text>
                            </Pressable>
                        </View>
                        <View style={styles.item}>
                            <Image
                                source={require('../../../assets/Profile/menu3.png')}
                            />
                            <View style={styles.itemDetail}>
                                <Text style={styles.itemName}>Spacy fresh crab</Text>
                                <Text style={styles.itemDescribe}>Waroenk kita</Text>
                                <Text style={styles.itemPrice}>$ 35</Text>
                            </View>
                            <Pressable
                                style={styles.actionBuy}
                            >
                                <Text style={styles.buyTitle}>Buy Again</Text>
                            </Pressable>
                        </View>
                        <View style={styles.item}>
                            <Image
                                source={require('../../../assets/OrderDetails/product4.png')}
                            />
                            <View style={styles.itemDetail}>
                                <Text style={styles.itemName}>Spacy fresh crab</Text>
                                <Text style={styles.itemDescribe}>Waroenk kita</Text>
                                <Text style={styles.itemPrice}>$ 35</Text>
                            </View>
                            <Pressable
                                style={styles.actionBuy}
                            >
                                <Text style={styles.buyTitle}>Buy Again</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </ParallaxScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    actionScrool: {
        alignItems: "center",
        marginBottom: 10,
        marginTop: -20,
    },
    scrollToll: {
        backgroundColor: "#FEF6ED",
        height: 5,
        borderRadius: 12,
        width: 58,

    },
    detailProfile: {
        flexDirection: "column",
        gap: 20,
        paddingTop: 34,
        paddingHorizontal: 20,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: "#FFF",
        marginTop: -35,
    },
    imageProfile: {
        flex: 1,
    },
    memberTitle: {
        backgroundColor: "#0F6",
        height: 34,
        borderRadius: 18.5,
        width: 121,
        opacity: 0.3,
        justifyContent: "center",
    },
    textMember: {
        color: "#6B50F6",
        paddingHorizontal: 17,
    },
    profileName: {
        flexDirection: "row",
        gap: 80,
    },
    name: {
        fontSize: 27,
        fontWeight: "bold",
    },
    email: {
        fontSize: 14,
        opacity: 0.3,
    },
    voucher: {
        flexDirection: "row",
        alignItems: "center",
        gap: 25,
    },
    favarite: {
        fontSize: 15,
        fontWeight: "bold",
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#F6F6F6",
        paddingHorizontal: 10,
        borderRadius: 22,
        height: 103,
    },
    listItems: {
        flexDirection: 'column',
        gap: 20,
    },
    itemName: {
        fontSize: 15,
        fontWeight: "bold",
    },
    itemDescribe: {
        fontSize: 14,
        opacity: 0.3,
    },
    itemPrice: {
        color: "6B50F6",
        fontSize: 19,
        fontWeight: 'bold',
    },

    actionBuy: {
        height: 29,
        width: 85,
        backgroundColor: "#6B50F6",
        borderRadius: 17.5,
        paddingHorizontal: 11,
        justifyContent: "center",
    },
    buyTitle: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 12,
    }

})
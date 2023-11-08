import React from "react";
import { View, Text, SafeAreaView, Pressable, StyleSheet, Image, ImageBackground, ScrollView } from "react-native";
import ParallaxScrollView from 'react-native-parallax-scroll-view';

export default function DetailMenuScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ParallaxScrollView
                parallaxHeaderHeight={442}
                renderForeground={() => (
                    <ImageBackground
                        source={require('../../../assets/DetailMenu/menuPhoto.png')}
                        style={styles.imageBackground}
                    />
                )}

            >

                <View style={styles.detailProfile}>
                    <View style={styles.actionScrool}>
                        <View style={styles.scrollToll}></View>
                    </View>
                    <View style={styles.topTitle}>
                        <View style={{ backgroundColor: "#3FDA85", width: 76, height: 34, borderRadius: 18.5, justifyContent: "center", alignItems: "center", backgroundColor: 'rgba(63, 218, 133, 0.1)' }}>
                            <Text style={{ color: "#6B50F6" }}>Popular</Text>
                        </View>
                        <View style={{ flexDirection: "row", gap: 10, alignItems: 'center' }}>
                            <Image
                                source={require("../../../assets/DetailProduct/IconLocation.png")}
                            />
                            <Image
                                source={require("../../../assets/DetailProduct/IconLove.png")}
                            />
                        </View>
                    </View>
                    <Text style={{ fontSize: 27, fontWeight: "bold" }}>Rainbow Sandwich Sugarless</Text>
                    <View style={{ flexDirection: "row", gap: 20 }}>
                        <View style={{ flexDirection: "row", gap: 10, alignItems: 'center' }}>
                            <Image
                                source={require("../../../assets/DetailProduct/Iconmappin.png")}
                            />
                            <Text style={{ opacity: 0.3 }}>19 Km</Text>
                        </View>
                        <View style={{ flexDirection: "row", gap: 10, alignItems: 'center' }}>
                            <Image
                                source={require("../../../assets/DetailProduct/IconStar.png")}
                            />
                            <Text style={{ opacity: 0.3 }}>4,8 Rating</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 13, }}>Nulla occaecat velit laborum exercitation ullamco. Elit labore eu aute elit nostrud culpa velit excepteur deserunt sunt. Velit non est cillum consequat cupidatat ex Lorem laboris labore aliqua ad duis eu laborum.

                        Strowberry
                        Cream
                        wheat

                        Nulla occaecat velit laborum exercitation ullamco. Elit labore eu aute elit nostrud culpa velit excepteur deserunt sunt.</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Popular Menu</Text>
                        <Pressable>
                            <Text style={{ color: "#6B50F6", }}>View All</Text>
                        </Pressable>
                    </View>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>Testimonials</Text>
                    <View style={{ gap: 20 }}>
                        <View style={styles.listReview}>
                            <View style={styles.review}>
                                <Image
                                    source={require("../../../assets/DetailProduct/user1.png")}
                                />
                                <View style={{ gap: 20 }}>
                                    <View style={{}}>
                                        <View style={{ flexDirection: 'row', gap: 59 }}>
                                            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Dianne Russell</Text>
                                            <View style={{ flexDirection: 'row', gap: 2, backgroundColor: "#6B50F6", width: 53, height: 33, backgroundColor: 'rgba(107, 80, 246, 0.1)', borderRadius: 18.5, justifyContent: 'center', alignItems: "center" }}>
                                                <Image
                                                    source={require('../../../assets/DetailProduct/IconStar2.png')}
                                                />
                                                <Text style={{ color: "#6B50F6", fontSize: 16, fontWeight: "bold" }}>5</Text>
                                            </View>
                                        </View>
                                        <Text style={{ opacity: 0.3, marginTop: -15, fontSize: 12 }}>12 April 2021</Text>
                                    </View>
                                    <Text style={{ fontSize: 12 }}>This Is great, So delicious! You Must Here, With Your family . . </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.listReview}>
                            <View style={styles.review}>
                                <Image
                                    source={require("../../../assets/DetailProduct/user1.png")}
                                />
                                <View style={{ gap: 20 }}>
                                    <View style={{}}>
                                        <View style={{ flexDirection: 'row', gap: 59 }}>
                                            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Dianne Russell</Text>
                                            <View style={{ flexDirection: 'row', gap: 2, backgroundColor: "#6B50F6", width: 53, height: 33, backgroundColor: 'rgba(107, 80, 246, 0.1)', borderRadius: 18.5, justifyContent: 'center', alignItems: "center" }}>
                                                <Image
                                                    source={require('../../../assets/DetailProduct/IconStar2.png')}
                                                />
                                                <Text style={{ color: "#6B50F6", fontSize: 16, fontWeight: "bold" }}>5</Text>
                                            </View>
                                        </View>
                                        <Text style={{ opacity: 0.3, marginTop: -15, fontSize: 12 }}>12 April 2021</Text>
                                    </View>
                                    <Text style={{ fontSize: 12 }}>This Is great, So delicious! You Must Here, With Your family . . </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ParallaxScrollView>
            <View style={styles.bottomButton}>
                <View style={styles.addToCartButton}>
                    <Pressable>
                        <Text style={styles.addToCartButtonText}>Add To Cart</Text>
                    </Pressable>
                </View>
            </View>
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
        backgroundColor: "#F6F6F6",
        marginTop: -35,
    },

    imageBackground: {
        flex: 1,
    },

    topTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    listItems: {
        flexDirection: "row",
        gap: 20,
    },

    item: {
        backgroundColor: "cyan",
        width: 147,
        height: 171,
        flexDirection: 'column',
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 22,
    },
    listReview: {
        backgroundColor: "#FFF",
        borderRadius: 22,
        justifyContent: 'center',
        height: 128,
        paddingHorizontal: 10,
    },

    review: {
        flexDirection: 'row',
        gap: 20,
        width: 223,
    },

    bottomButton: {
        alignItems: 'center',
    },

    addToCartButton: {
        position: 'absolute',
        bottom: 20,
        height: 57,
        width: 326,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6B50F6',
        borderRadius: 15,
    },

    addToCartButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },


})
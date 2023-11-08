import { View, ImageBackground, Text, Image, Pressable, FlatList, StyleSheet } from "react-native"

const MainContent = ({ navigation }) => {
    const data = [
        { id: "1", name: "Vegan Resto", image: require("../../../assets/Home/mage.png") },
        { id: "2", name: "Healthy Food", image: require("../../../assets/Home/luamach.png") },
    ];

    const renderItem = ({ item }) => {
        return (
            <Pressable
                onPress={() => navigation.navigate('ProductDetaiScreen')}
                style={styles.productContainer}>
                <Image source={item.image} style={styles.productImage} />
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.textMin}>12 Mins</Text>
            </Pressable>
        );
    };

    return (

        <View style={StyleSheet.mainContent}>
            <View style={styles.contentImage}>
                <ImageBackground
                    source={require('../../../assets/Home/protion.png')}
                    style={styles.backgroundMainContent}
                >
                    <View style={styles.contentBackground}>
                        <Text style={styles.spectialText}>Spectial Deal For October</Text>
                        <Pressable
                            onPress={() => navigation.navigate('VoucherPromote')}
                            style={styles.actionBuyNow}>
                            <Text style={styles.textBuyNow}>
                                Buy Now
                            </Text>
                        </Pressable>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.nearestRestuarant}>
                <Text style={styles.textRestaurant}>Nearest Restaurant</Text>
                <Pressable
                    onPress={() => navigation.navigate('ViewMoreRes')}
                >
                    <Text style={styles.textViewMore}>View More</Text>
                </Pressable>
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
        justifyContent: 'center',
    },

    spectialText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },

    contentBackground: {
        gap: 20,
        width: 150,
        position: 'absolute',
        left: '52%'
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
        color: "#FFF"
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
        alignItems: 'center'
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
})

export default MainContent;
import { View, ImageBackground, Text, Image, Pressable, FlatList, StyleSheet } from "react-native"

const MainContent = () => {
    const data = [
        { id: "1", name: "Vegan Resto", image: require("../../assets/Home/luamach.png") },
        { id: "2", name: "Healthy Food", image: require("../../assets/Home/luamach.png") },
        { id: "3", name: "Good Food", image: require("../../assets/Home/luamach.png") },
        { id: "4", name: "Smart Resto", image: require("../../assets/Home/luamach.png") },
        { id: "5", name: "Dianne Russell", image: require("../../assets/Home/luamach.png") },
        { id: "6", name: "Spacy fresh crab", image: require("../../assets/Home/luamach.png") },
        { id: "7", name: "Spacy fresh crab", image: require("../../assets/Home/luamach.png") },
        { id: "8", name: "Green Noddle", image: require("../../assets/Home/luamach.png") },
    ];

    const renderItem = ({ item }) => {
        return (
            <View style={styles.productContainer}>
                <Image source={item.image} style={styles.productImage} />
                <Text style={styles.productName}>{item.name}</Text>
            </View>
        );
    };

    return (
        <View style={StyleSheet.mainContent}>
            <ImageBackground
                source={require('../../assets/Home/protion.png')}
                style={styles.backgroundMainCOntent}
            >
                <Text style={styles.spectialText}>Spectial Deal For October</Text>
                <Pressable style={styles.actionBuyNow}>
                    <Text style={styles.textBuyNow}>
                        Buy Now
                    </Text>
                </Pressable>
            </ImageBackground>
            <View style={styles.nearestRestuarant}>
                <Text style={styles.textRestaurant}>Nearest Restaurant</Text>
                <Pressable>
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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    backgroundMainCOntent: {
        width: 325,
        height: 150,
    },

    spectialText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF'

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
    },

    textRestaurant: {
        color: '#22242E',
        fontSize: 15,
        fontWeight: 'bold',
    },

    nearestRestuarant: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },

    textViewMore: {
        color: '#6B50F6',
    },
    productContainer: {
        flex: 1,
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 5,
        backgroundColor: "#fff",
      },
      productImage: {
        width: 100,
        height: 100,
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
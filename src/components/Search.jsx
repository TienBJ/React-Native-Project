import React from "react"
import { View, TextInput, Image, StyleSheet } from "react-native"

const Search = () => {
    return (
        <View style={styles.Search}>
            <View style={styles.searchItem}>
                <Image
                    style={styles.iconSearch}
                    source={require('../../assets/Home/Search.png')}
                />
                <TextInput
                    style={styles.inputText}
                    placeholder={'What do you want to order?'}
                    placeholderTextColor={'#6B50F6'}
                />
            </View>
            <View style={styles.filterItem}>
                <Image
                style={styles.iconFilter}
                source={require('../../assets/Home/Filter.png')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Search: {
        flexDirection: 'row',
        gap: 10,
        top: -40,
    },

    searchItem: {
        borderRadius: 15,
        backgroundColor: 'rgba(107, 80, 246, 0.1)',
        height: 50,
        width: 267,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 20,
    },

    inputText: {
        fontSize: 14,
        color: '#6B50F6',
        opacity: 0.4,
    },

    filterItem: {
        backgroundColor: '#f0f8ff',
        width: 50,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
})

export default Search;

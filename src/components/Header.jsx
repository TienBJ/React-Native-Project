import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, ImageBackground } from 'react-native';
import { Search } from "./Search";

export const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.headerText}>
                <View style={styles.textLogo}>
                    <Text style={styles.textLogo}>Find Your  </Text>
                    <Text style={styles.textLogo}>Favorite Food  </Text>
                </View>
                <View style={styles.Notification}>
                    <Image style={styles.iconBell} source={require('../../assets/Home/Notification.png')} />
                </View>
            </View>
            <Search />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
      top: 30,
      padding: 15,
    },

    headerText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
        
    },

    textLogo: {
        color: '#22242E',
        fontSize: 31,
        fontStyle: 'normal',
        fontWeight: 'bold'
    },

    Notification: {
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

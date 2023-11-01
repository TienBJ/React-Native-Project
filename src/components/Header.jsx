import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, ImageBackground, SafeAreaView } from 'react-native';
import Search from './Search';

function Header({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.headerText}>
                <View style={styles.textLogo}>
                    <Text style={styles.textLogo}>Find Your  </Text>
                    <Text style={styles.textLogo}>Favorite Food  </Text>
                </View>
                <Pressable 
                onPress={() => navigation.navigate('NotificationScreen')}
                style={styles.Notification}>
                    <Image style={styles.iconBell} source={require('../../assets/Home/Notification.png')} />
                </Pressable>
            </View>
            <Search navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 60,
    },

    headerText: {
        flexDirection: "row",
        justifyContent: "space-between",
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

export default Header;
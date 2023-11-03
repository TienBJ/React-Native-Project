import React from 'react';
import { StyleSheet, ImageBackground, ScrollView, SafeAreaView } from 'react-native';
import Header from "../../components/Header";
import MainContent from './MainPage';
import PopularMenu from './PopularMenu';

export const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../../assets/Home/Homebackground.png')}
                style={styles.backgroundImage}
            >
                <Header navigation={navigation} />
                <ScrollView>
                    <MainContent navigation={navigation} />
                    <PopularMenu navigation={navigation} />
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: "#FEFEFF",
    },

    backgroundImage: {
        resizeMode: 'cover',
        justifyContent: 'center',
    },
});

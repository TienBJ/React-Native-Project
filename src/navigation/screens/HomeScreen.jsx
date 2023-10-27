import React from 'react';
import { StyleSheet, ImageBackground, ScrollView, Button } from 'react-native';
import Header from "../../components/Header";
import MainContent from './MainPage';
import PopularMenu from './PopularMenu';

export const HomeScreen = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../../../assets/Home/Homebackground.png')}
            style={styles.backgroundImage}
        >
            <Header />
            <ScrollView>
                <MainContent navigation={navigation} />
                <PopularMenu />
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
});

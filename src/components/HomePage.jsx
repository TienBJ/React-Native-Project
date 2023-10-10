import React from 'react';
import { StyleSheet, View, ScrollView, ImageBackground } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import MainContent from '../screens/MainPage';

const HomePage = () => {
    return (
        <ImageBackground
            source={require('../../assets/Home/Homebackground.png')}
            style={styles.backgroundImage}
        >
            <Header />
            <ScrollView style={styles.scrollView}>
                <MainContent />
            </ScrollView>
            <Footer />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    scrollView: {
        flex: 1,
    }
},
);

export default HomePage;

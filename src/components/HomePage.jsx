import React from 'react';
import { StyleSheet, ImageBackground, ScrollView } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import MainContent from '../screens/MainPage';
import PopularMenu from './PopularMenu';
import { Filter } from '../screens/Fillter';
import { Chat } from '../screens/Chat';

const HomePage = () => {
    return (
        <ImageBackground
            source={require('../../assets/Home/Homebackground.png')}
            style={styles.backgroundImage}
        >
            <Header />
            <ScrollView>
                {/*<MainContent />
                <PopularMenu />*/}
                <Filter/>
                <Chat/>
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
},
);

export default HomePage;

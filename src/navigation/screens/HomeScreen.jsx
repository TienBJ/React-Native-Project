import React from 'react';
import { StyleSheet, ImageBackground, ScrollView, Button } from 'react-native';
import { Header } from "../../components/Header";
import MainContent from './MainPage';

export const HomeScreen = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../../../assets/Home/Homebackground.png')}
            style={styles.backgroundImage}
        >
            {/*<Header />*/}
            {/*<ScrollView>
                <MainContent />
            </ScrollView>*/}
            <Button
                title='Profile Page'
                onPress={() => navigation.navigate('Profile')}
            />
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

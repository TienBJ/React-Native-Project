import React from 'react';
import { StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { Navigation } from "react-native-navigation";
import Header from './Header';
import Footer from './Footer';
import MainContent from '../screens/MainPage';
import PopularMenu from './PopularMenu';
import { Filter } from '../screens/Fillter';
import { Chat } from '../screens/Chat';
import { OrderDetails } from '../screens/OrderDetail';

Navigation.registerComponent("HomePage", () => HomePage);
Navigation.registerComponent("chat", () => Chat);
Navigation.registerComponent("Filter", () => Filter);
Navigation.registerComponent("OrderDetails", () => OrderDetails);
Navigation.registerComponent("PupularMenu", () => PopularMenu);

Navigation.events().registerComponentListener(async () => {
    Navigation.setRoot({
        root: {
            stack: {
                children: {
                    component: {
                        name: 'HomePage'
                    }
                }
            }
        }
    });
});


const HomePage = () => {
    return (
        <ImageBackground
            source={require('../../assets/Home/Homebackground.png')}
            style={styles.backgroundImage}
        >
            <Header />
            <ScrollView>
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
},
);

export default HomePage;





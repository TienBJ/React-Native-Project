import * as React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from "./screens/HomeScreen";
import Ionicons from '@expo/vector-icons/Ionicons';
import { CartScreen } from "./screens/CartScreen";
import { ChatScreen } from "./screens/Chat";
import ProfileScreen from "./screens/ProfilesScreen";
import ViewMoreRes from "./screens/ViewMoreRes";

const homeName = "Home";
const cartName = "Cart";
const chatName = "Chat";
const profileName = "Profile";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <HomeStack.Screen
                name={homeName}
                component={HomeScreen}
            />
            <HomeStack.Screen
                name={profileName}
                component={ProfileScreen}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name="ViewMoreRes"
                component={ViewMoreRes}
                options={{ headerShown: false }}
            />
            
        </HomeStack.Navigator>
    )
};

const Tab = createBottomTabNavigator();
export default function MainContainer() {
    return (

        <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let rn = route.name;

                    if (rn === homeName) {
                        imageSource = require('../../assets/Home/Home.png');
                    } else if (rn === profileName) {
                        imageSource = require('../../assets/Home/Profile.png');
                    } else if (rn === cartName) {
                        imageSource = require('../../assets/Home/Buy.png');
                    } else if (rn === chatName) {
                        imageSource = require('../../assets/Home/Chat.png');
                    }
                    return <Image source={imageSource} size={size} color={color} style={{ width: size, height: size, tintColor: focused ? "tomato" : "grey" }} />

                },
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "grey",
                tabBarStyle: {
                    display: "flex",
                    paddingBottom: 10,
                    fontSize: 10,
                    height: 74,
                },
            })}>

            <Tab.Screen name={homeName} component={HomeStackScreen} options={{ headerShown: false }} />
            <Tab.Screen name={profileName} component={ProfileScreen} />
            <Tab.Screen
                name={cartName}
                component={CartScreen}
                options={({ navigation }) => ({
                    headerTitle: () => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                                <Image source={require('../../assets/iconBack.png')} />
                            </TouchableOpacity>
                        );
                    },
                })}
            />
            <Tab.Screen name={chatName} component={ChatScreen} />

        </Tab.Navigator>
    )
}
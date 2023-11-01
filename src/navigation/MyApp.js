import * as React from "react";
import { Text, Image, View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from "./screens/HomeScreen";
import Ionicons from '@expo/vector-icons/Ionicons';
import { CartScreen } from "./screens/CartScreen";
import { ChatScreen } from "./screens/Chat";
import ProfileScreen from "./screens/ProfilesScreen";
import ViewMoreRes from "./screens/ViewMoreRes";
import { ChatDetailScreen } from "./screens/ChatDetailScreen";
import { Filter } from "../navigation/screens/Fillter";
import ExploreMenu from "./screens/ExploreMune";
import { NotificationScreen } from "./screens/Notification";
import { PaymentScreen } from "./screens/Payment";
import { EditPaymentScreen } from "./screens/EditPayment";
import { EditLocationScreen } from "./screens/EditLacation";
import OrderScreen from "./screens/Order";
import { VoucherPromote } from "./screens/VoucherPromote";
import styles from "react-native-parallax-scroll-view/src/styles";
import { ExploreMenuWithFillter } from "./screens/ExploreMenuWithFillter";
import ExploreRestarantWithFillter from "./screens/ExploreRestarantWithFillter";

const homeName = "Home";
const cartName = "Cart";
const chatName = "Chat";
const profileName = "Profile";

const HomeStack = createNativeStackNavigator();
const ChatStack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Profile" component={ProfileScreen} />
            <HomeStack.Screen name="ViewMoreRes" component={ViewMoreRes} />
            <HomeStack.Screen name="Filter" component={Filter} />
            <HomeStack.Screen name="ExploreMenu" component={ExploreMenu} />
            <HomeStack.Screen name="NotificationScreen" component={NotificationScreen} />
            <HomeStack.Screen name="VoucherPromote" component={VoucherPromote} />
            <HomeStack.Screen name="ExploreMenuWithFillter" component={ExploreMenuWithFillter}/>
            <HomeStack.Screen name="ExploreRestarantWithFillter" component={ExploreRestarantWithFillter}/>

        </HomeStack.Navigator>
    )
};

function ChatStackScreen() {
    return (
        <ChatStack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <ChatStack.Screen name="Chat" component={ChatScreen} />
            <ChatStack.Screen name="ChatDetailScreen" component={ChatDetailScreen} />

        </ChatStack.Navigator>
    )
};

function CartStackScreen() {
    return (
        <CartStack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <CartStack.Screen name="Cart" component={CartScreen} />
            <CartStack.Screen name="PaymentScreen" component={PaymentScreen} />
            <CartStack.Screen name="EditPaymentScreen" component={EditPaymentScreen} />
            <CartStack.Screen name="EditLocationScreen" component={EditLocationScreen} />
            <CartStack.Screen name="OrderScreen" component={OrderScreen} />

        </CartStack.Navigator>
    )
}

const Tab = createBottomTabNavigator();
export default function MainContainer() {
    return (

        <Tab.Navigator

            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let rn = route.name;
                    let imageSource;

                    if (rn === homeName) {
                        imageSource = require('../../assets/Home/Home.png');
                    } else if (rn === profileName) {
                        imageSource = require('../../assets/Home/Profile.png');
                    } else if (rn === cartName) {
                        imageSource = require('../../assets/Home/Buy.png');
                    } else if (rn === chatName) {
                        imageSource = require('../../assets/Home/Chat.png');
                    }
                    return (
                        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-around" }}>
                            <Image
                                source={imageSource}
                                size={size}
                                color={color}
                                style={{
                                    width: size,
                                    height: size,
                                    tintColor: focused ? "#6B50F1" : "grey",
                                }}
                            />
                            {focused && <Text style={{ color: '#6B50F1', marginLeft: 8, fontWeight: 'bold' }}>{route.name}</Text>}
                        </View>
                    );
                },
                tabBarLabel: () => {
                    return null;
                },
                tabBarActiveTintColor: "#6B50F1",
                tabBarInactiveTintColor: "grey",
                tabBarStyle: {
                    height: 74,
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeStackScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Cart" component={CartStackScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Chat" component={ChatStackScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

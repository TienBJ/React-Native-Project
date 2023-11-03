import * as React from "react";
import { Text, Image, View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from "./screens/HomeScreen";
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
import { ExploreMenuWithFillter } from "./screens/ExploreMenuWithFillter";
import ExploreRestarantWithFillter from "./screens/ExploreRestarantWithFillter";
import { NavigationContainer } from "@react-navigation/native";
import SetLacationScreen from "./screens/SetLocation";

const homeName = "Home";
const cartName = "Cart";
const chatName = "Chat";
const profileName = "Profile";

export default function MyApp() {

    const Tab = createBottomTabNavigator();

    const BottomTab = () => {

        return (
            <Tab.Navigator

                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    key: route.name,
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
                            <View style={focused ? { backgroundColor: "#6B50F6", borderRadius: 12, flexDirection: "row", alignItems: 'center', paddingHorizontal: 10, opacity: 0.3, height: 44 } : null}>
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
                        borderRadius: 15,
                        borderTopRightRadius: 15, backgroundColor: 'white', position: 'absolute',
                        width: 350,
                        marginLeft: 5,
                        paddingHorizontal: 15,
                    },
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
                <Tab.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
                <Tab.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }} />
            </Tab.Navigator>
        );
    }

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="BottomTab" key="Home" component={BottomTab} />
                <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="ViewMoreRes" component={ViewMoreRes} />
                <Stack.Screen name="Filter" component={Filter} />
                <Stack.Screen name="ExploreMenu" component={ExploreMenu} />
                <Stack.Screen name="VoucherPromote" component={VoucherPromote} />
                <Stack.Screen name="ExploreMenuWithFillter" component={ExploreMenuWithFillter} />
                <Stack.Screen name="ExploreRestarantWithFillter" component={ExploreRestarantWithFillter} />
                <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
                <Stack.Screen name="EditPaymentScreen" component={EditPaymentScreen} />
                <Stack.Screen name="EditLocationScreen" component={EditLocationScreen} />
                <Stack.Screen name="OrderScreen" component={OrderScreen} />
                <Stack.Screen name="ChatDetailScreen" component={ChatDetailScreen} />
                <Stack.Screen name="SetLacationScreen" component={SetLacationScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
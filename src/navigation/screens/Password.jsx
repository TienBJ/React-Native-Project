import React,{useState} from "react";
import { SafeAreaView, Image, Text,  TouchableOpacity } from "react-native";

import { StyleSheet, Pressable, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useTogglePasswordVisibility } from '../../../src/navigation/screens/useTogglePasswordVisibility';
export const PasswordScreen = ({ navigation }) => {
    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
        useTogglePasswordVisibility();
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
                <Image source={require('../../../assets/iconBack.png')} />
            </TouchableOpacity>
            <Text style={styles.Title}>Reset your password here</Text>
            <Text style={styles.textTile}>Select which contact details should we use to reset your password</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputField}
                    name="password"
                    placeholder="New password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="newPassword"
                    secureTextEntry={passwordVisibility}
                    value={password}
                    enablesReturnKeyAutomatically
                    onChangeText={text => setPassword(text)}
                />
                <Pressable onPress={handlePasswordVisibility}>
                    <MaterialCommunityIcons name={rightIcon} size={22} color="#6B50F6" />
                </Pressable>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputField}
                    name="password"
                    placeholder="Confirm password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="newPassword"
                    secureTextEntry={passwordVisibility}
                    value={password}
                    enablesReturnKeyAutomatically
                    onChangeText={text => setPassword(text)}
                />
                <Pressable onPress={handlePasswordVisibility}>
                    <MaterialCommunityIcons name={rightIcon} size={22} color="#6B50F6" />
                </Pressable>
            </View>


            <View style={styles.buttonAction}>
                <Pressable>
                    <Text style={styles.titleButton}>Next</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 38,
        gap: 30,
        padding: 25,
        backgroundColor: "#FAFAFA"
    },
    Title: {
        fontSize: 30,
        fontWeight: "bold",
        width: 280,
        color: '#22242E',
    },
    textTile: {
        width: 239,

    },
    inputContainer:{
        flexDirection: "row",
        width:'100%',
        backgroundColor:'#FFF',
        alignItems:'center',
        borderRadius: 20,
    },
    buttonAction: {
        backgroundColor: "#6B50F6",
        height: 57,
        width: 157,
        boxShadow: '0px 0px 50px 0px rgba(90, 108, 234, 0.07)',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },

    titleButton: {
        fontSize: 14,
        fontWeight: "bold",
        color: '#FFF',

    },
    inputField: {
        fontSize: 18,
        width: '90%',
        padding:14,
       
    }
})
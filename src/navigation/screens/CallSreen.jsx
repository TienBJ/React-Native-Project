import * as React from "react";
import { SafeAreaView, View, Image, Text, Pressable, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "./CallFinish";

export const CallScreen = ({ navigation }) => {

    const [isSmallVolume, setIsSmallVolume] = React.useState(true);

    const ImageChange = () => {
        setIsSmallVolume(!isSmallVolume);
    };

    return (
        <ImageBackground>
            <SafeAreaView style={styles.container}>
                <View style={styles.imageProfile}>
                    <Image
                        source={require('../../../assets/ImageProfile.png')}
                    />
                </View>
                <View style={{ gap: 20, alignItems: 'center' }}>
                    <Text style={styles.userName}>Richard Lewis</Text>
                    <Text style={{ opacity: 0.3 }}>Ringing . . .</Text>
                </View>
                <View style={styles.statusCall}>
                    <Pressable onPress={ImageChange}>
                        {isSmallVolume ? (
                            <View style={styles.speakerIcon}>
                                <Image
                                    source={require("../../../assets/Message/iconSpeaker.png")}
                                />
                            </View>) : (
                            <View style={styles.speakerIcon}>
                                <Image
                                    source={require("../../../assets/Message/VolumeOff.png")}
                                />
                            </View>
                        )}

                    </Pressable>
                    <Pressable
                        onPress={() => navigation.navigate('CallFinishScreen')}
                    >
                        <Image
                            source={require("../../../assets/cancelCall.png")}
                        />
                    </Pressable>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

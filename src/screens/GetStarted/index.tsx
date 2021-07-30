import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Dimensions, Text, Pressable, SafeAreaView, StyleSheet } from "react-native";
import Video from "react-native-video";
import { Typography, MainColor } from '../../theme';
import styles from "./styles";

import InstagramSvg from '../../assets/images/insta.svg';

const screen = Dimensions.get("screen");


const GetStarted : React.FC = () => {

    const navigation = useNavigation();

    return (
        <View style={{ width: '100%', height:'100%' }}>
          <Video
            source={require("../../assets/video/videomain.mp4")}
            style={styles.backgroundVideo}
            muted={true}
            repeat={false}
            resizeMode={"cover"}
            rate={1.0}
            ignoreSilentSwitch={"obey"}
          />
          <View style={styles.contentWrapper}>
            <Text style={{ fontSize: 50 }}>adfda</Text>
          </View>
        </View>
    )
}

export default GetStarted;

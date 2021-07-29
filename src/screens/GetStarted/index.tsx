import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Dimensions, Text, Pressable, SafeAreaView, StyleSheet } from "react-native";
import Video from "react-native-video";
import { Typography, MainColor } from '../../theme';
// import styles from "./styles";

import InstagramSvg from '../../assets/images/insta.svg';

const screen = Dimensions.get("screen");


const GetStarted : React.FC = () => {

    const navigation = useNavigation();

    return (
        <View style={{ width: '100%', height:'100%' }}>
          <Video
            source={require("../../assets/videomain.mp4")}
            style={styles.backgroundVideo}
            muted={true}
            repeat={false}
            resizeMode={"cover"}
            rate={1.0}
            ignoreSilentSwitch={"obey"}
          />
          <View style={{width: '100%', height:'100%', justifyContent: 'center' }}>
            <Text style={{ fontSize: 50 }}>adfda</Text>
          </View>
        </View>
    )
}

export default GetStarted;

const styles = StyleSheet.create({
  backgroundVideo: {
    height: '100%',
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0
  }
});

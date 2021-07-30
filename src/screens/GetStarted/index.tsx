import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Pressable } from "react-native";
import Video from "react-native-video";
import styles from "./styles";

import ArrowRight from '../../assets/images/arrow-right.svg';
import FacebookIcon from '../../assets/images/socialsicons/facebook.svg';
import InstagramIcon from '../../assets/images/socialsicons/instagram.svg';
import TwitterIcon from '../../assets/images/socialsicons/twitter.svg';

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
            <Pressable style={styles.startBtn} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.startBtnText}>Start</Text>
              <ArrowRight/>
            </Pressable>
            <View style={styles.socialBtns}>
              <Pressable style={{ marginRight: 11 }}>
                <FacebookIcon/>
              </Pressable>
              <Pressable style={{ marginRight: 11 }}>
                <InstagramIcon/>
              </Pressable>
              <Pressable>
                <TwitterIcon/>
              </Pressable>
            </View>
            <Text style={styles.copyText}>Easy2Eat Mobile App © 2021 All rights reserved</Text>
          </View>
        </View>
    )
}

export default GetStarted;

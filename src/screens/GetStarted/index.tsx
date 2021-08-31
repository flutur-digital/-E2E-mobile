import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { View, Text, Pressable, Animated } from "react-native";
import Video from "react-native-video";
import styles from "./styles";

import { getUserProfileById } from "../../services";
import { updateUserData } from '../../store/modules/auth.reducer';

import ArrowRight from '../../assets/images/arrow-right.svg';
import FacebookIcon from '../../assets/images/socialsicons/facebook.svg';
import InstagramIcon from '../../assets/images/socialsicons/instagram.svg';
import TwitterIcon from '../../assets/images/socialsicons/twitter.svg';
import { useDispatch, useSelector } from "react-redux";

const GetStarted: React.FC = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const moveButton = useRef(new Animated.Value(1000)).current;
  const moveFB = useRef(new Animated.Value(1000)).current;
  const moveTwitter = useRef(new Animated.Value(1000)).current;
  const moveIG = useRef(new Animated.Value(1000)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.spring(moveButton, {
        toValue: 0,
        velocity: 8,
        delay: 3000,
        tension: 7,
        friction: 5,
        useNativeDriver: true,
        isInteraction: false

      }),
    ]).start();

  }, [moveButton]);

  useEffect(() => {
    Animated.sequence([
      Animated.spring(moveFB, {
        toValue: 0,
        velocity: 8,
        delay: 3300,
        tension: 5,
        friction: 4,
        useNativeDriver: true,
        isInteraction: false

      }),
    ]).start();

  }, [moveFB]);
  useEffect(() => {
    Animated.sequence([
      Animated.spring(moveTwitter, {
        toValue: 0,
        velocity: 8,
        delay: 3400,
        tension: 5,
        friction: 4,
        useNativeDriver: true,
        isInteraction: false

      }),
    ]).start();

  }, [moveTwitter]);
  useEffect(() => {
    Animated.sequence([
      Animated.spring(moveIG, {
        toValue: 0,
        velocity: 8,
        delay: 3500,
        tension: 5,
        friction: 4,
        useNativeDriver: true,
        isInteraction: false

      }),
    ]).start();

  }, [moveIG]);

  const { isAuthenticated, user } = useSelector(
    (state: any) => state.authReducer
  );

  const getUserData = (userId: number) => {
    getUserProfileById(userId).then((res) => {
      if (res.data) {
        dispatch(updateUserData({ user: res.data.data }));
      }
    });
  }

  useEffect(() => {
    if (isAuthenticated) {
      getUserData(user.id);
    }
  }, [])

  return (
    <View style={{ width: '100%', height: '100%' }}>
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
        <Animated.View style={{ transform: [{ translateY: moveButton }] }}>
          <Pressable style={styles.startBtn} onPress={() => isAuthenticated ? navigation.navigate('BottomNavigation', { screen: 'Stack1', params: { screen: 'Search' } }) : navigation.navigate('Search')}>
            <Text style={styles.startBtnText}>Start</Text>
            <ArrowRight />
          </Pressable>
        </Animated.View>
        <View style={styles.socialBtns}>
          <Animated.View style={{ transform: [{ translateY: moveFB }] }}>
            <Pressable style={{ marginRight: 11 }}>
              <FacebookIcon />
            </Pressable>
          </Animated.View>
          <Animated.View style={{ transform: [{ translateY: moveTwitter }] }}>
            <Pressable style={{ marginRight: 11 }}>
              <InstagramIcon />
            </Pressable>
          </Animated.View>
          <Animated.View style={{ transform: [{ translateY: moveIG }] }}>
            <Pressable>
              <TwitterIcon />
            </Pressable>
          </Animated.View>
        </View>
        <Text style={styles.copyText}>Easy2Eat Mobile App © 2021 All rights reserved</Text>
      </View>
    </View>
  )
}

export default GetStarted;

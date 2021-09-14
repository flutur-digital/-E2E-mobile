import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef } from "react";
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import { View, Text, Pressable, Animated } from "react-native";
import FastImage from "react-native-fast-image";
import styles from "./styles";
import DurationSvg from "./assets/images/time.svg";
import DurationYellowSvg from './assets/images/timecolored.svg';
import HeartSvg from "./assets/images/heart3.svg";
import { hapticOptions } from "../../config";
import GreenBoxSvg from './assets/images/greenBox.svg';

interface RecipeInfo {
  id: number,
  title: string;
  image: string;
  time: string;
  likes?: number;
  isNew?: boolean;

}

const Recipe: React.FC<RecipeInfo> = ({ id, title, image, time, likes, isNew = false }) => {

  const moveRecipe = useRef(new Animated.Value(500)).current;
  const navigation = useNavigation();
  useEffect(() => {
    Animated.sequence([
      Animated.spring(moveRecipe, {
        toValue: 0,
        velocity: 11,
        delay: 400,
        tension: 5,
        friction: 4,
        useNativeDriver: true,
        isInteraction: false

      })
    ]).start();

  }, [moveRecipe]);


  return (
    <Animated.View style={{ transform: [{ translateX: moveRecipe }] }}>
      <Pressable style={isNew ? [styles.recipeBox, {backgroundColor: '#ffc900' }] : styles.recipeBox} onPress={() => {ReactNativeHapticFeedback.trigger("impactLight", hapticOptions); navigation.navigate("RecipeScreen", { id: id })}}>
        <FastImage style={styles.recipeImage} resizeMode={FastImage.resizeMode.cover} source={{ uri: image }} />
        <View style={styles.wrapper}>
          <Text numberOfLines={3} style={isNew ? [styles.recipeTitle, {color : '#fff'}] : styles.recipeTitle}>{title}</Text>

          <View style={styles.recipeInfoAlign}>
            <View style={styles.timeInfo}>
              {
                isNew ? <DurationYellowSvg width={18} height={18} /> :  <DurationSvg width={18} height={18} />
              }

              <Text style={styles.timeTxt}>{time}</Text>
            </View>
            {
              likes ?

                <View style={styles.timeInfo}>
                  <HeartSvg width={18} height={18} />
                  <Text style={[styles.timeTxt, { color: "#cacaca" }]}>{likes}</Text>
                </View>

                : null
            }
          </View>
        </View>
        {
          isNew ?
              <View style={{bottom : 0, right : 0, position : 'absolute'}}>
                  <View style={{position : 'relative'}}>
                    <GreenBoxSvg width={62} height={52}/>
                    <Text style={styles.newTxt}>
                      New
                    </Text>
                  </View>
              </View>
              : null
        }
      </Pressable>
    </Animated.View>
  );
};

export default Recipe;

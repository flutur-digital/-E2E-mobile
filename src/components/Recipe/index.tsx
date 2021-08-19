import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useRef } from 'react';
import {View, Text, Pressable, Image, Animated} from 'react-native';
import styles from './styles';
import DurationSvg from './assets/images/time.svg';
import HeartSvg from './assets/images/heart3.svg';

interface RecipeInfo {
    id: number,
    title : string;
    image : string;
    time : string;
    likes? : number;

}

const Recipe : React.FC<RecipeInfo> = ({id,title, image, time, likes}) => {

    const moveRecipe = useRef(new Animated.Value(500)).current;
    const navigation = useNavigation();
    useEffect(() => {
        Animated.sequence([
            Animated.spring(moveRecipe, {
                toValue: 0,
                velocity: 11,
                delay : 400,
                tension : 5,
                friction : 4,
                useNativeDriver: true,
                isInteraction: false

            }),
        ]).start();

    },[moveRecipe]);


    return (
        <Animated.View style={{transform: [{translateX: moveRecipe}]}}>
        <Pressable style={styles.recipeBox} onPress={()=> navigation.navigate('RecipeScreen', {id: id})}>
                <Image style={styles.recipeImage} source={{uri: image}}/>
            <View style={styles.wrapper}>
               <Text numberOfLines={3} style={styles.recipeTitle}>{title}</Text>

            <View style={styles.recipeInfoAlign}>
                <View style={styles.timeInfo}>
                    <DurationSvg width={18} height={18}/>
                    <Text style={styles.timeTxt}>{time}</Text>
                </View>
                {
                    likes ?

                        <View style={styles.timeInfo}>
                            <HeartSvg width={18} height={18}/>
                            <Text style={[styles.timeTxt, {color: '#cacaca'}]}>{likes}</Text>
                        </View>

                        : null
                }
            </View>
            </View>

        </Pressable>
        </Animated.View>
    )
};

export default Recipe;

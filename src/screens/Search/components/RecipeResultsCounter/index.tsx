import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useRef } from 'react';
import {View, Text, Pressable, Image, Animated, Easing} from 'react-native';
import styles from './styles';
import {IngredientType} from "../../../../types";
import PrimarySmallBtn from "../../../../components/PrimarySmallBtn";
import AddIcon from './assets/addicon.svg';
import ArrowRightYellow from './assets/images/arrow-right-yell.svg';

interface RecipeCounter {
  recipesFound: number;
  onClick: () => void;
}

const RecipeResultsCounter : React.FC<RecipeCounter> = ({recipesFound, onClick}) => {

    const bounceAnim = useRef(new Animated.Value(200)).current;

    const navigation = useNavigation();


    useEffect(() => {
            Animated.sequence([
                Animated.spring(bounceAnim, {
                    toValue: 0,
                    velocity: 2,
                    bounciness : 12,
                    useNativeDriver: true,

                }),
            ]).start();

    },[bounceAnim]);

    return (
        <Animated.View style={[styles.alertWrapper, {transform: [{translateY: bounceAnim}]}]}>
            <Pressable onPress={onClick} style={styles.alertBox}>
                <Text style={styles.alertTxt}>
                    You have
                </Text>
                <View style={styles.counter}>
                    <Text style={styles.alertTxt}>
                        {recipesFound}
                    </Text>
                </View>
                <Text style={styles.alertTxt}>
                    new recipes
                </Text>
                <ArrowRightYellow style={{marginLeft : 24}} width={13} height={22}/>
            </Pressable>
        </Animated.View>

    )
};

export default RecipeResultsCounter;

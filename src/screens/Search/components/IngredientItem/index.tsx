import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useRef } from 'react';
import {View, Text, Pressable, Image, Animated} from 'react-native';
import styles from './styles';
import {IngredientType} from "../../../../types";
import PrimarySmallBtn from "../../../../components/PrimarySmallBtn";
import AddIcon from './assets/addicon.svg';

interface Props {
  ingredient: IngredientType
}

const IngredientItem : React.FC<Props> = ({ingredient}) => {

    const moveIngredient = useRef(new Animated.Value(-200)).current;


    useEffect(() => {
        Animated.sequence([
            Animated.spring(moveIngredient, {
                toValue: 0,
                velocity: 2,
                delay : ingredient.id*100,
                bounciness : 12,
                useNativeDriver: true,
                isInteraction: false

            }),
        ]).start();

    },[moveIngredient]);

    const navigation = useNavigation();

    return (
        <View style={styles.ingredientContainer}>
            <Animated.View style={[styles.ingredientInfo, {transform: [{translateX: moveIngredient}]}]}>
                <View style={styles.ingredientImageBox}>
                  <Image style={styles.ingredientImage} source={{ uri: 'https://easy2eat.co/storage/ingr/OeHz72IuvqX6CmqYTI8ECVK70PUZcIi711xawOL3.png' }}/>
                </View>
                <Text style={styles.ingredientName}>{ingredient.name}</Text>
            </Animated.View>
            <View style={styles.ingredientActions}>
                <PrimarySmallBtn icon={<AddIcon/>} bgColor={'#fff'}/>
            </View>
        </View>
    )
}

export default IngredientItem;

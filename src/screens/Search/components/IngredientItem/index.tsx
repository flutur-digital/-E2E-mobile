import React, { useEffect, useRef } from 'react';
import {View, Text, Pressable, Animated} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import {IngredientType} from "../../../../types";
import SelectedIngredientIcon from './assets/selectedIngredientIcon.svg';
import UnselectedIngredientIcon from './assets/unselectedIngredientIcon.svg';

interface Props {
  ingredient: IngredientType,
  onSelect: (id: number) => void;
  unSelect: (id: number) => void;
  selected: boolean;
}

const IngredientItem : React.FC<Props> = ({ingredient, onSelect,unSelect, selected}) => {

    const moveIngredient = useRef(new Animated.Value(-200)).current;

    useEffect(() => {
        Animated.sequence([
            Animated.spring(moveIngredient, {
                toValue: 0,
                velocity: 2,
                delay : 100,
                bounciness : 12,
                useNativeDriver: true,
                isInteraction: false

            }),
        ]).start();

    },[moveIngredient]);

    return (
        <View style={styles.ingredientContainer}>
            <Animated.View style={[styles.ingredientInfo, {transform: [{translateX: moveIngredient}]}]}>
                <View style={styles.ingredientImageBox}>
                  <FastImage style={styles.ingredientImage} resizeMode={FastImage.resizeMode.contain} source={{ uri: ingredient.image }}/>
                </View>
                <Text numberOfLines={1} style={styles.ingredientName}>{ingredient.name}</Text>
            </Animated.View>
            <View style={styles.ingredientActions}>
              {
                selected ? <Pressable onPress={() => unSelect(ingredient.id)}><SelectedIngredientIcon width={44} height={44}/></Pressable> :
                  <Pressable onPress={() => onSelect(ingredient.id)}><UnselectedIngredientIcon width={44} height={44}/></Pressable>
              }
            </View>
        </View>
    )
}

export default IngredientItem;

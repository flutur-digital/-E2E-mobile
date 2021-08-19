import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, Pressable, Image} from "react-native";
import { Dimensions } from 'react-native';

import UnselectedIcon from './assets/images/unselectedIcon.svg';

import {IngredientType} from "../../../../../types";
import styles from "./styles";

interface Props {
    ingredient: IngredientType
}

const windowWidth = Dimensions.get('window').width;

const Ingredient : React.FC<Props> = ({ingredient}) => {

    const isChecked = true;
    const navigation = useNavigation();

    return (
        <View style={{ width: (windowWidth-68)/3, height:100, paddingTop : 13, position : 'relative', paddingBottom : 19 }}>
            <Pressable style={styles.notChecked}>
                <UnselectedIcon/>
            </Pressable>
            <Pressable style={styles.ingredientWrapper}>
                <Image style={styles.ingredientImage} source={{ uri: ingredient.image}}/>
                <Text style={styles.ingredientName}>{ingredient.name}</Text>
            </Pressable>
        </View>
    )
};

export default Ingredient

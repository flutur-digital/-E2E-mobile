import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, Pressable, Image} from "react-native";
import { Dimensions } from 'react-native';
import Video from "react-native-video";

import ArrowRight from '../../assets/images/arrow-right.svg';
import FacebookIcon from '../../assets/images/socialsicons/facebook.svg';
import InstagramIcon from '../../assets/images/socialsicons/instagram.svg';
import TwitterIcon from '../../assets/images/socialsicons/twitter.svg';

import CheckSvg from '../../../../assets/images/check.svg';
import {IngredientType} from "../../../../types";
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
            <Pressable style={isChecked ? styles.isChecked : styles.notChecked}>
                <CheckSvg width={16} height={12}/>
            </Pressable>
            <Pressable style={styles.ingredientWrapper}>
                <Image style={styles.ingredientImage} source={{ uri: ingredient.image}}/>
                <Text style={styles.ingredientName}>{ingredient.name}</Text>
            </Pressable>
        </View>
    )
};

export default Ingredient

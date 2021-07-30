import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import styles from './styles';
import {IngredientType} from "../../../../types";
import PrimarySmallBtn from "../../../../components/PrimarySmallBtn";
import AddIcon from './assets/addicon.svg';

interface Props {
  ingredient: IngredientType
}

const IngredientItem : React.FC<Props> = ({ingredient}) => {

    const navigation = useNavigation();

    return (
        <View style={styles.ingredientContainer}>
            <View style={styles.ingredientInfo}>
                <View style={styles.ingredientImageBox}>
                  <Image style={styles.ingredientImage} source={{ uri: ingredient.image }}/>
                </View>
                <Text style={styles.ingredientName}>{ingredient.name}</Text>
            </View>
            <View style={styles.ingredientActions}>
                <PrimarySmallBtn icon={<AddIcon/>} bgColor={'#fff'}/>
            </View>
        </View>
    )
}

export default IngredientItem;

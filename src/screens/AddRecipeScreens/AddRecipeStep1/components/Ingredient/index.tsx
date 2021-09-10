import React from 'react';
import {View, Text, Pressable, Image} from "react-native";
import { Dimensions } from 'react-native';

import {IngredientType} from "../../../../../types";
import styles from "./styles";

const windowWidth = Dimensions.get('window').width;

interface Props {
  ingredient: IngredientType,
  index: number,
  onSelect: (id: number) => void;
  unSelect: (id: number) => void;
  selected: boolean;
}


const Ingredient : React.FC<Props> = ({ingredient,index, onSelect,unSelect, selected}) => {

    return (
        <Pressable onPress={() => selected ? unSelect(ingredient.id) : onSelect(ingredient.id)} style={[{ width: (windowWidth-68)/3, height:100, paddingTop : 13, position : 'relative', paddingBottom : 19, borderRightWidth: 1, borderStyle: 'solid', borderRightColor: '#e8e8e8' }, index <=2 ? { borderBottomColor: '#e8e8e8', borderBottomWidth: 1} : null]}>
          {
            selected ? <View style={styles.selectBtn}><Image style={{ width: 24, height: 24,}} source={require('./assets/images/selectedIcon.png')}/></View>
            : <View style={styles.selectBtn}><Image style={{ width: 24, height: 24,}} source={require('./assets/images/unselectedIcon.png')}/></View>
          }

            <View style={styles.ingredientWrapper}>
                <Image style={styles.ingredientImage} source={{ uri: ingredient.image}}/>
                <Text numberOfLines={1} style={styles.ingredientName}>{ingredient.name}</Text>
            </View>
        </Pressable>
    )
};

export default React.memo(Ingredient);

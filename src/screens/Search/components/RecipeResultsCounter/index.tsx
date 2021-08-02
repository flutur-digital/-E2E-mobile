import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import styles from './styles';
import {IngredientType} from "../../../../types";
import PrimarySmallBtn from "../../../../components/PrimarySmallBtn";
import AddIcon from './assets/addicon.svg';
import ArrowRightYellow from './assets/images/arrow-right-yell.svg';

interface RecipeCounter {
  recipesFound: number
}

const RecipeResultsCounter : React.FC<RecipeCounter> = ({recipesFound}) => {

    const navigation = useNavigation();

    return (
        <Pressable style={styles.alertWrapper}>
            <View style={styles.alertBox}>
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
            </View>
        </Pressable>

    )
};

export default RecipeResultsCounter;

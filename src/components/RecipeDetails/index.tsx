import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import styles from './styles';
import TimeSvg from './assets/images/time.svg';

const RecipeDetails : React.FC = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.recipeBox}>
            <Image
                style={styles.recipeImage}
                source={{uri : 'https://i.pinimg.com/originals/83/c6/3a/83c63a5986cbd3b47638bd2bea8bfa02.jpg'}}
            />
            <View style={styles.recipeTitleWrapper}>
                <Text style={styles.title}>
                    Eggs with roast beef & avocado
                </Text>
                <View style={styles.timeBlock}>
                    <Text style={styles.timeTxt}>
                        Time to prepare
                    </Text>
                    <TimeSvg width={18} height={18} style={{marginLeft : 8, marginRight : 7}}/>
                    <Text style={styles.timeTxt}>
                        15 min
                    </Text>
                </View>
            </View>
            <View style={styles.recipeContentTxt}>
                <Text style={styles.test}>
                <View style={styles.stepBox}>
                    <Text style={styles.step}>
                        1
                    </Text>
                </View>
                <Text style={styles.contentTxt}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </Text>
                </Text>
            </View>
            <Image
                style={styles.recipeMedia}
                source={{uri : 'https://i.pinimg.com/originals/83/c6/3a/83c63a5986cbd3b47638bd2bea8bfa02.jpg'}}
            />
        </View>
    )
}

export default RecipeDetails;

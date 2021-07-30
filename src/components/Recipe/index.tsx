import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import styles from './styles';
import DurationSvg from './assets/images/time.svg';
import HeartSvg from './assets/images/heart3.svg';

interface RecipeInfo {
    title : string;
    image : string;
    time : string;
    likes? : number;
}

const Recipe : React.FC<RecipeInfo> = ({title, image, time, likes}) => {

    const navigation = useNavigation();

    return (
        <Pressable style={styles.recipeBox}>
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
    )
}

export default Recipe;

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Dimensions, Text, Pressable, SafeAreaView, StyleSheet, ScrollView, Image} from "react-native";
import Video from "react-native-video";
import {Typography, MainColor, SecondColor, Layouts} from '../../theme';
import styles from "./styles";
import Recipe from "../../components/Recipe";

import InstagramSvg from '../../assets/images/insta.svg';
import PrimarySmallBtn from "../../components/PrimarySmallBtn";
import ArrowLeft from "../../assets/images/arrow-left.svg";

const screen = Dimensions.get("screen");


const RecipeScreen : React.FC = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ width: '100%', height:'100%',backgroundColor : SecondColor }}>
            <View style={Layouts.spaceBetween}>
                <PrimarySmallBtn icon={<ArrowLeft width={9} height={16}/>} bgColor={MainColor}/>
                <Image source={require('../../assets/images/logoBtn.png')} style={{width : 60, height : 60}}/>
            </View>
            <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
                <Text allowFontScaling={false} adjustsFontSizeToFit numberOfLines={2} style={Typography.title}>
                    Look! We have{"\n"}
                    4 dishes for you 😊
                </Text>
                <Recipe
                    title={'Eggs with roast beef & avocado'}
                    image={'https://i.pinimg.com/originals/83/c6/3a/83c63a5986cbd3b47638bd2bea8bfa02.jpg'}
                    time={'15 min'}
                />
                <Recipe
                    title={'Eggs with roast beef & avocado'}
                    image={'https://i.pinimg.com/originals/83/c6/3a/83c63a5986cbd3b47638bd2bea8bfa02.jpg'}
                    time={'15 min'}
                />


            </ScrollView>
        </SafeAreaView>
    )
};

export default RecipeScreen;

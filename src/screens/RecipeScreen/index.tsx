import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Dimensions, Text, Pressable, SafeAreaView, StyleSheet, ScrollView, Image} from "react-native";
import Video from "react-native-video";
import {Typography, MainColor, SecondColor, Layouts} from '../../theme';
import styles from "./styles";
import Recipe from "../../components/Recipe";
import HeartSvg from '../../assets/images/heart.svg';
import PrimarySmallBtn from "../../components/PrimarySmallBtn";
import ArrowLeft from "../../assets/images/arrow-left.svg";

const screen = Dimensions.get("screen");
import RecipeDetails from "../../components/RecipeDetails";

const RecipeScreen : React.FC = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ width: '100%', height:'100%',backgroundColor : SecondColor }}>
            <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
            <View style={[Layouts.spaceBetween, {paddingLeft: 8, paddingRight: 6}]}>
                <PrimarySmallBtn icon={<ArrowLeft width={9} height={16}/>} bgColor={MainColor}/>
                <PrimarySmallBtn icon={<HeartSvg width={23} height={19}/>} bgColor={'#ffffff'}/>
            </View>

                <RecipeDetails/>

            </ScrollView>
        </SafeAreaView>
    )
};

export default RecipeScreen;

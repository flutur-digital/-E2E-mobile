import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Dimensions, Text, Pressable, SafeAreaView, StyleSheet, ScrollView, Image} from "react-native";
import Video from "react-native-video";
import {Typography, MainColor, SecondColor, Layouts} from '../../theme';
import styles from "./styles";
import Recipe from "../../components/Recipe";
import PrimarySmallBtn from "../../components/PrimarySmallBtn";
import ArrowLeft from "../../assets/images/arrow-left.svg";
import SettingsSvg from '../../assets/images/settings.svg';

const screen = Dimensions.get("screen");


const UserRecipes : React.FC = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ width: '100%', height:'100%',backgroundColor : SecondColor }}>
            <View style={[Layouts.spaceBetween, {paddingTop : 15}]}>
                <View style={{width: 38.7, height: 38.7,}}>

                </View>
                <Pressable style={styles.settingsBtn}>
                    <SettingsSvg width={22} height={22}/>
                </Pressable>

            </View>
            <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
                <Image style={styles.userAvatar}
                       source={{uri : 'https://lh3.googleusercontent.com/proxy/zjtYbjTqfTUOImpno68A6EISaOjkWXYRu4tthjB2ijfXgSLQJgGhCz11Kby67tufSbreX9596DWdRLVkybhb04kY'}}
                />
                <Text style={styles.userName}>
                    Dorin
                </Text>
                <Text style={styles.userBio}>
                    Hello, please enjoy my recipes
                </Text>
                <Recipe
                    title={'Raviolli with ricotta in sauce'}
                    image={'https://i.pinimg.com/originals/83/c6/3a/83c63a5986cbd3b47638bd2bea8bfa02.jpg'}
                    time={'15 min'}
                    likes={250}
                />
                <Recipe
                    title={'Eggs with roast beef & avocado'}
                    image={'https://i.pinimg.com/originals/83/c6/3a/83c63a5986cbd3b47638bd2bea8bfa02.jpg'}
                    time={'25 min'}
                    likes={143}
                />


            </ScrollView>
        </SafeAreaView>
    )
};

export default UserRecipes;

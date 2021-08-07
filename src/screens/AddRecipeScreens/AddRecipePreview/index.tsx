import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, Pressable, SafeAreaView, ScrollView} from "react-native";
import {Layouts, MainColor, SecondColor} from "../../../theme";
import styles from "../../RecipeScreen/styles";
import PrimarySmallBtn from "../../../components/PrimarySmallBtn";
import ArrowLeft from "../../../assets/images/arrow-left.svg";
import HeartSvg from "../../../assets/images/heart.svg";
import RecipeDetails from "../../../components/RecipeDetails";
import CheckSvg from '../../../assets/images/check.svg';

const AddRecipePreview : React.FC = () => {

    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ width: '100%', height:'100%',backgroundColor : SecondColor }}>
            <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
                <View style={[Layouts.spaceBetween, {paddingLeft: 8, paddingRight: 6, paddingTop : 15}]}>
                    <PrimarySmallBtn icon={<ArrowLeft width={9} height={16}/>} bgColor={MainColor} onClick={()=>navigation.goBack()}/>
                    <PrimarySmallBtn onClick={()=> navigation.navigate('AddRecipeSuccess')} icon={<CheckSvg width={20} height={14}/>} bgColor={'#00e96b'}/>
                </View>

                <RecipeDetails/>

            </ScrollView>

        </SafeAreaView>
    )
}

export default AddRecipePreview;

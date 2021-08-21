import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import {View, Text, Pressable, SafeAreaView, ScrollView} from "react-native";
import {Layouts, MainColor, SecondColor} from "../../../theme";
import styles from "../../RecipeScreen/styles";
import PrimarySmallBtn from "../../../components/PrimarySmallBtn";
import ArrowLeft from "../../../assets/images/arrow-left.svg";
import HeartSvg from "../../../assets/images/heart.svg";
import RecipeDetails from "../../../components/RecipeDetails";
import CheckSvg from '../../../assets/images/check.svg';
import { useSelector } from "react-redux";

const AddRecipePreview : React.FC = () => {

    const navigation = useNavigation();

    const {currentStep, step1, step2} = useSelector(
      (state: any) => state.addRecipeReducer
    );

    const [recipeDetailsPreview, setRecipeDetailsPreview] = useState<any>(null);

    // console.log(step2);

    const initializeRecipePreview = (dataStep1: any,dataStep2: any) => {
        // console.log(dataStep1.recipeImage.uri)
        const previewData = {
            prepare_time: dataStep1.preparationTime,
            name: dataStep1.title,
            image: dataStep1.recipeImage.uri,
            description: []
        };

        setRecipeDetailsPreview(previewData);
    }

    useEffect(() => {
        // Return the function to unsubscribe from the event so it gets removed on unmount
        return navigation.addListener('focus', () => {
            if(step1 && step2){
                initializeRecipePreview(JSON.parse(step1),JSON.parse(step2));
            }
        });
    },[navigation]);

    return (
        <SafeAreaView style={{ width: '100%', height:'100%',backgroundColor : SecondColor }}>
            <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
                <View style={[Layouts.spaceBetween, {paddingLeft: 8, paddingRight: 6, paddingTop : 15}]}>
                    <PrimarySmallBtn icon={<ArrowLeft width={9} height={16}/>} bgColor={MainColor} onClick={()=>navigation.goBack()}/>
                    <PrimarySmallBtn onClick={()=> navigation.navigate('AddRecipeSuccess')} icon={<CheckSvg width={20} height={14}/>} bgColor={'#00e96b'}/>
                </View>
                {
                    recipeDetailsPreview && <RecipeDetails recipeDetails={recipeDetailsPreview} isRecipePreview={true}/>
                }
            </ScrollView>

        </SafeAreaView>
    )
}

export default AddRecipePreview;

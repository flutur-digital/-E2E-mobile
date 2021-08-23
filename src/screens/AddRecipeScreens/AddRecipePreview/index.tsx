import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import {View, SafeAreaView, ScrollView, Platform} from "react-native";
import {Layouts, MainColor, SecondColor} from "../../../theme";
import styles from "../../RecipeScreen/styles";
import PrimarySmallBtn from "../../../components/PrimarySmallBtn";
import ArrowLeft from "../../../assets/images/arrow-left.svg";
import CheckSvg from '../../../assets/images/check.svg';
import { useSelector } from "react-redux";
import {userSaveRecipe, userSaveRecipeStep} from "../../../services";
import RecipeDetails from "../../../components/RecipeDetails";

const AddRecipePreview : React.FC = () => {

    const navigation = useNavigation();

    const {currentStep, step1, step2} = useSelector(
      (state: any) => state.addRecipeReducer
    );

    const [recipeDetailsPreview, setRecipeDetailsPreview] = useState<any>(null);

    const initializeRecipePreview = (dataStep1: any,dataStep2: any) => {

        console.log(dataStep1.selectedIngredients)
        const descriptionArray : Array<any> = [];
        dataStep2.steps.map((item: any) => {
            descriptionArray.push({
                text: item.description,
                file: item?.file,
                fileUri: item?.file?.uri
            })
        });
        const previewData = {
            prepare_time: dataStep1.preparationTime,
            name: dataStep1.title,
            image: dataStep1.recipeImage.uri,
            imagefile: dataStep1.recipeImage,
            ingredients: dataStep1.selectedIngredients,
            description: descriptionArray
        };
        setRecipeDetailsPreview(previewData);
    }

    // console.log(recipeDetailsPreview)

    useEffect(() => {
        // Return the function to unsubscribe from the event so it gets removed on unmount
        return navigation.addListener('focus', () => {
            if(step1 && step2){
                initializeRecipePreview(JSON.parse(step1),JSON.parse(step2));
            }
        });
    },[navigation]);

    const saveRecipe = () => {

        const formData = new FormData();
        formData.append('name', recipeDetailsPreview.name);
        formData.append('preparation_time', recipeDetailsPreview.prepare_time);
        formData.append('image', {
            name: recipeDetailsPreview.imagefile.fileName,
            type: recipeDetailsPreview.imagefile.type,
            uri: Platform.OS === "android" ? recipeDetailsPreview.imagefile.uri : recipeDetailsPreview.imagefile.uri.replace("file://", "")
        });
        formData.append('ingredients', JSON.stringify(recipeDetailsPreview.ingredients));

        userSaveRecipe(formData).then((res) => {
            console.log(res.data);
            if(res.data && res.data.id){
                saveRecipeSteps(res.data.id, recipeDetailsPreview.description)
            }
        })

    }

    const saveRecipeSteps = (recipeId: number, steps: Array<any>) => {
        // console.log(steps);
        steps.map((step: any, index: number) => {
            const formData = new FormData();
            formData.append('recipe', recipeId);
            formData.append('step', index);
            formData.append('text', step.text);
            if(step.file) {
                formData.append('file', {
                    name: step.file.fileName,
                    type: step.file.type,
                    uri: Platform.OS === "android" ? step.file.uri : step.file.uri.replace("file://", "")
                });
            }
            userSaveRecipeStep(formData).then((res) => {
                console.log(res.data);
            })
        })
    }

    return (
        <SafeAreaView style={{ width: '100%', height:'100%',backgroundColor : SecondColor }}>
            <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
                <View style={[Layouts.spaceBetween, {paddingLeft: 8, paddingRight: 6, paddingTop : 15}]}>
                    <PrimarySmallBtn icon={<ArrowLeft width={9} height={16}/>} bgColor={MainColor} onClick={()=>navigation.goBack()}/>
                    <PrimarySmallBtn onClick={()=> saveRecipe()} icon={<CheckSvg width={20} height={14}/>} bgColor={'#00e96b'}/>
                </View>
                {
                    recipeDetailsPreview && <RecipeDetails recipeDetails={recipeDetailsPreview} isRecipePreview={true}/>
                }
            </ScrollView>

        </SafeAreaView>
    )
}

export default AddRecipePreview;

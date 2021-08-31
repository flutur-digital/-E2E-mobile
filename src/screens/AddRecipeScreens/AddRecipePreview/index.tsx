import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, Platform, SafeAreaView, ScrollView, View } from "react-native";
import { Layouts, MainColor, SecondColor } from "../../../theme";
import styles from "../../RecipeScreen/styles";
import PrimarySmallBtn from "../../../components/PrimarySmallBtn";
import ArrowLeft from "../../../assets/images/arrow-left.svg";
import CheckSvg from "../../../assets/images/check.svg";
import { useDispatch, useSelector } from "react-redux";
import { userSaveRecipe, userSaveRecipeStep } from "../../../services";
import RecipeDetails from "../../../components/RecipeDetails";
import { setCurrentStep, resetAddRecipeState } from "../../../store/modules/addRecipe.reducer";
import LoaderOverlay from "../../../components/LoaderOverlay";

const AddRecipePreview : React.FC = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    // dispatch(resetAddRecipeState());

    const {currentStep, step1, step2} = useSelector(
      (state: any) => state.addRecipeReducer
    );

    const goPrevStep = () => {
        dispatch(setCurrentStep({step: 2}));
        return navigation.goBack()
    }

    const [loading, setLoading] = useState<boolean>(false);
    const [recipeDetailsPreview, setRecipeDetailsPreview] = useState<any>(null);

    const initializeRecipePreview = (dataStep1: any,dataStep2: any) => {
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

    useEffect(() => {
        return navigation.addListener('focus', () => {
            if(step1 && step2){
                initializeRecipePreview(JSON.parse(step1),JSON.parse(step2));
            }
        });
    },[navigation]);

    const saveRecipeSteps = async (recipe: any, steps: Array<any>) => {
        return await Promise.all(steps.map(async (step: any, index: number): Promise<number> => {
            const formData = new FormData();
            formData.append('recipe', recipe.id);
            formData.append('step', index);
            formData.append('text', step.text);
            if (step.file) {
                formData.append('file', {
                    name: step.file.fileName,
                    type: step.file.type,
                    uri: Platform.OS === "android" ? step.file.uri : step.file.uri.replace("file://", "")
                });
            }
            return userSaveRecipeStep(formData).then((res) => {
                return index + 1;
            });
        }));
    }

    const saveRecipe = () => {
        setLoading(true);
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
            if(res.data && res.data.id){
                saveRecipeSteps(res.data, recipeDetailsPreview.description).then((result) => {
                    setLoading(false);
                    if(result){
                        return navigation.navigate('AddRecipeSuccess', {recipe: res.data});
                    } else {
                        Alert.alert(`Please check all steps if they are completed!`);
                    }
                })
            } else {
                setLoading(false);
                Alert.alert(`Whoops, looks like something went wrong!`);
            }
        })

    }

    return (
        <SafeAreaView style={{ width: '100%', height:'100%',backgroundColor : SecondColor }}>
            <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
                <View style={[Layouts.spaceBetween, {paddingLeft: 8, paddingRight: 6, paddingTop : 15}]}>
                    <PrimarySmallBtn icon={<ArrowLeft width={9} height={16}/>} bgColor={MainColor} onClick={() => goPrevStep()}/>
                    <PrimarySmallBtn onClick={()=> saveRecipe()} icon={<CheckSvg width={20} height={14}/>} bgColor={'#00e96b'}/>
                </View>
                {
                    recipeDetailsPreview && <RecipeDetails recipeDetails={recipeDetailsPreview} isRecipePreview={true}/>
                }
            </ScrollView>
            <LoaderOverlay loading={loading}/>
        </SafeAreaView>
    )
}

export default AddRecipePreview;

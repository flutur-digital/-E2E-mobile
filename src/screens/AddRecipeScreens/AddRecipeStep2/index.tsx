import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import { View, Text, Pressable, SafeAreaView, TextInput, Image, ScrollView } from "react-native";
import {Layouts, MainColor} from "../../../theme";
import styles from './styles';
import PrimarySmallBtn from "../../../components/PrimarySmallBtn";
import ArrowRight from "../../../assets/images/arrow-right.svg";
import ArrowLeft from '../../../assets/images/arrow-left-gray.svg';
import ArrowDown from "../AddRecipeStep1/assets/images/arrow-down.svg";
import { useDispatch, useSelector } from "react-redux";
import { IngredientType } from "../../../types";

interface StepType{
    id: number;
    description?: string;
    image?: any;
    video?: any;
}

const AddRecipeStep2 : React.FC = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const {currentStep} = useSelector(
      (state: any) => state.addRecipeReducer
    )

    const checkAddRecipeStep = () => {
        if(currentStep){
            if(currentStep === 1){
                return navigation.navigate("AddRecipeStep1");
            } else if(currentStep === 2){
                return navigation.navigate("AddRecipeStep2");
            }
        }
    }

    const [steps, setSteps] = useState<Array<StepType>>([]);

    const initializeSteps = () => {
        let step : StepType = {
            id: 1,
            description: ''
        };
        setSteps([step]);
    }

    useEffect(() => {
        initializeSteps();
    },[])

    useEffect(() => {
        // Return the function to unsubscribe from the event so it gets removed on unmount
        return navigation.addListener('focus', () => {
            checkAddRecipeStep();
        });
    },[navigation]);

    const addNewStep = () => {
        let lastElement: StepType = steps[steps.length - 1];
        let newStep : StepType = {
            id: lastElement.id+1,
            description: ''
        };
        setSteps(steps.concat([newStep]));
    }

    const updateStepDescription = (stepId: number, value: string) => {
        let localArray = [...steps];
        let stepIndex = localArray.findIndex(item => item.id === stepId);
        localArray[stepIndex].description = value;
        setSteps(localArray);

    }

    return (
        <SafeAreaView style={{ width: '100%', height:'100%',flex : 1 }}>
            <View style={[Layouts.spaceBetween, {paddingLeft: 20, paddingRight: 20,paddingTop : 15}]}>
                <PrimarySmallBtn onClick={()=>navigation.goBack()} icon={<ArrowLeft width={11} height={18}/>} bgColor={'#fff'}/>
                <Text style={styles.title}>Please, write{'\n'} or upload video{'\n'} recipe 🥬</Text>
                <PrimarySmallBtn onClick={()=> navigation.navigate('AddRecipePreview')} icon={<ArrowRight width={11} height={18}/>} bgColor={MainColor}/>
            </View>
            <Text style={styles.description}>Set name, import photo of your dish,{"\n"} and check ingredients</Text>
            <ScrollView contentContainerStyle={styles.container}>
                <ArrowDown width={25} height={25}/>
                {
                    steps.map((step: StepType, index: number) => {
                        return (
                          <View key={index} style={styles.addRecipeBox}>
                              <View style={styles.stepAlign}>
                                  <View style={styles.stepBox}>
                                      <Text style={styles.step}>{step.id}</Text>
                                  </View>
                                  <TextInput
                                    placeholder={"Your dish name"}
                                    multiline
                                    onChangeText={text => updateStepDescription(step.id,text)}
                                    value={step.description}
                                    style={[styles.contentTxt]}
                                  />
                              </View>
                              <View style={styles.recipeAddButtons}>
                                  <Pressable onPress={() => addNewStep()}><Image style={{width : 73, height : 35}} source={require('./assets/images/add-step-img.png')}/></Pressable>
                                  <Pressable><Image style={{width : 58, height : 37}} source={require('./assets/images/add-image.png')}/></Pressable>
                                  <Pressable><Image style={{width : 63, height : 36}} source={require('./assets/images/add-vidoe.png')}/></Pressable>
                              </View>
                          </View>
                        )
                    })
                }
            </ScrollView>

        </SafeAreaView>

    )
}

export default AddRecipeStep2;

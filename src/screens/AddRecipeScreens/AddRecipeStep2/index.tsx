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
import * as ImagePicker from "react-native-image-picker";
import { setRecipeStep2, setCurrentStep, setRecipeStep1 } from "../../../store/modules/addRecipe.reducer";
import {imagePickerOptions, videoPickerOptions} from "../../../config";
import Video from "react-native-video";

interface StepType{
    id: number;
    description?: string;
    file?: any;
    fileType?: string;
}

const AddRecipeStep2 : React.FC = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const {currentStep} = useSelector(
      (state: any) => state.addRecipeReducer
    );

    const goPrevStep = () => {
        dispatch(setCurrentStep({step: 1}));
    }
    const checkAddRecipeStep = () => {
        if(currentStep){
            if(currentStep === 1){
                return navigation.navigate("AddRecipeStep1");
            } else if(currentStep === 3){
                return navigation.navigate("AddRecipePreview");
            }
        }
    }

    useEffect(() => {
        checkAddRecipeStep();
    },[currentStep])

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

    const updateStepImage = (stepId: number) => {
        let localArray = [...steps];
        let stepIndex = localArray.findIndex(item => item.id === stepId);

        // @ts-ignore
        ImagePicker.launchImageLibrary(imagePickerOptions, (response) => {
            if (response.didCancel) {
                console.log("cancel");
            } else if (response.errorCode) {
                console.log("error");
            } else if (response.assets) {
                localArray[stepIndex].file = response.assets[0];
                localArray[stepIndex].fileType = 'image';
                setSteps(localArray);
            }
        });
    }

    const updateStepVideo = (stepId: number) => {
        let localArray = [...steps];
        let stepIndex = localArray.findIndex(item => item.id === stepId);

        // @ts-ignore
        ImagePicker.launchImageLibrary(videoPickerOptions, (response) => {
            if (response.didCancel) {
                console.log("cancel");
            } else if (response.errorCode) {
                console.log("error");
            } else if (response.assets) {
                localArray[stepIndex].file = response.assets[0];
                localArray[stepIndex].fileType = 'video';
                setSteps(localArray);
            }
        });
    }

    const nextStep = () => {
        //TODO check if not empty steps
        const stepData = {
            steps
        };

        dispatch(setRecipeStep2({step2: JSON.stringify(stepData)}));
        dispatch(setCurrentStep({step: 3}));
        return navigation.navigate("AddRecipePreview");
    }

    return (
        <SafeAreaView style={{ width: '100%', height:'100%',flex : 1 }}>
            <View style={[Layouts.spaceBetween, {paddingLeft: 20, paddingRight: 20,paddingTop : 15}]}>
                <PrimarySmallBtn onClick={() => goPrevStep()} icon={<ArrowLeft width={11} height={18}/>} bgColor={'#fff'}/>
                <Text style={styles.title}>Please, write{'\n'} or upload video{'\n'} recipe 🥬</Text>
                <PrimarySmallBtn onClick={()=> nextStep()} icon={<ArrowRight width={11} height={18}/>} bgColor={MainColor}/>
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
                              {(step.file && step.fileType == 'image') &&
                                  <View style={{ width: '100%', height: 200, marginBottom: 15 }}>
                                      <Image style={{ width: '100%', height: 200, resizeMode: 'stretch' }}
                                             source={{ uri: step.file.uri }} />
                                  </View>
                              }
                              {(step.file && step.fileType == 'video') &&
                                  <View style={{ width: '100%', height: 200 }}>
                                      <Video
                                        source={{ uri: step.file.uri }}
                                        controls={true}
                                        style={{width: '100%', height: 200}}
                                        muted={false}
                                        repeat={false}
                                        paused={true}
                                        resizeMode={"cover"}
                                        rate={1.0}

                                      />
                                  </View>
                              }
                              <View style={styles.recipeAddButtons}>
                                  <Pressable onPress={() => addNewStep()}><Image style={{width : 73, height : 35}} source={require('./assets/images/add-step-img.png')}/></Pressable>
                                  <Pressable onPress={() => !step.file ? updateStepImage(step.id) : null}><Image style={{width : 58, height : 37}} source={require('./assets/images/add-image.png')}/></Pressable>
                                  <Pressable onPress={() => !step.file ? updateStepVideo(step.id) : null}><Image style={{width : 63, height : 36}} source={require('./assets/images/add-vidoe.png')}/></Pressable>
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

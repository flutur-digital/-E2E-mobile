import React, { useEffect, useState, useRef } from "react";
import {
    View,
    Text,
    Pressable,
    SafeAreaView,
    TextInput,
    Image,
    FlatList,
    Alert
} from "react-native";
import {Layouts, MainColor} from "../../../theme";
import styles from './styles';
import PrimarySmallBtn from "../../../components/PrimarySmallBtn";
import ArrowRight from "../../../assets/images/arrow-right.svg";
import ArrowLeft from '../../../assets/images/arrow-left-gray.svg';
import ArrowDown from "../EditRecipeStep1/assets/images/arrow-down.svg";
import { useDispatch } from "react-redux";
import * as ImagePicker from "react-native-image-picker";
import { setRecipeStep2 } from "../../../store/modules/editRecipe.reducer";
import {imagePickerOptions, videoPickerOptions} from "../../../config";
import Video from "react-native-video";
import { checkIfInputIsEmpty, isFileImage } from "../../../util/util";

interface StepType{
    id: number;
    description?: string;
    file?: any;
    fileUri?: string | null;
    fileType?: string | null;
}

//@ts-ignore
const EditRecipeStep2 : React.FC = ({ route, navigation }) => {

    const dispatch = useDispatch();
    const { recipeForEdit } = route.params;
    const scrollViewRef = useRef<any>();

    const [steps, setSteps] = useState<Array<StepType>>([]);


    const initializeSteps = () => {
        let stepsArray: Array<StepType> = [];

        recipeForEdit.description.map((item: any, index: number) => {
            let step : StepType = {
                id: index+1,
                description: item.text,
                fileUri: item.file ? item.file : null,
                fileType: item.file ? (isFileImage(item.file) ? 'image' : 'video') : null
            };
            stepsArray.push(step);
        })

        setSteps(stepsArray);
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
        scrollViewRef.current?.scrollToEnd()
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
                localArray[stepIndex].fileUri = response.assets[0].uri;
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
                localArray[stepIndex].fileUri = response.assets[0].uri;
                localArray[stepIndex].fileType = 'video';
                setSteps(localArray);
            }
        });
    }

    const checkIsContainEmptyStep = async (steps: Array<StepType>) => {
        let temp: number = 0;
        let results = await Promise.all(steps.map(async (step: StepType, index: number): Promise<number> => {
            if(checkIfInputIsEmpty(step.description)){
                temp++;
            }
            return index+1;
        }));

        return temp > 0;
    }

    const nextStep = async () => {
        if(await checkIsContainEmptyStep(steps)){
            Alert.alert(`Please check all steps if they are completed!`);
        } else {
            const stepData = {
                steps
            };

            dispatch(setRecipeStep2({step2: JSON.stringify(stepData)}));
            return navigation.navigate("EditRecipePreview");
        }
    }

    return (
        <SafeAreaView style={{ width: '100%', height:'100%',flex : 1 }}>
            <View style={[Layouts.spaceBetween, {paddingLeft: 20, paddingRight: 20,paddingTop : 15}]}>
                <PrimarySmallBtn onClick={() => navigation.goBack()} icon={<ArrowLeft width={11} height={18}/>} bgColor={'#fff'}/>
                <Text style={styles.title}>Edit recipe {'\n'} steps, write{'\n'} or upload video{'\n'} recipe 🥬</Text>
                <PrimarySmallBtn onClick={()=> nextStep()} icon={<ArrowRight width={11} height={18}/>} bgColor={MainColor}/>
            </View>
            <Text style={styles.description}>Set name, import photo of your dish,{"\n"} and check ingredients</Text>
            <View style={styles.container}>
                <ArrowDown width={25} height={25}/>
                <FlatList
                  ref={scrollViewRef}
                  style={{ width: '100%', paddingLeft : 14, paddingRight : 15 }}
                  data={steps}
                  renderItem={({item}) => {
                      return (
                        <View style={styles.addRecipeBox}>
                            <View style={styles.stepAlign}>
                                <View style={styles.stepBox}>
                                    <Text style={styles.step}>{item.id}</Text>
                                </View>
                                <TextInput
                                  placeholder={"Your dish name"}
                                  multiline
                                  autoCorrect={false}
                                  onChangeText={text => updateStepDescription(item.id,text)}
                                  value={item.description}
                                  style={[styles.contentTxt]}
                                />
                            </View>
                            {(item.fileUri && item.fileType == 'image') &&
                                <View style={{ width: '100%', height: 200, marginBottom: 15 }}>
                                    <Image style={{ width: '100%', height: 200, resizeMode: 'cover' }}
                                           source={{ uri: item.fileUri }} />
                                </View>
                            }
                            {(item.fileUri && item.fileType == 'video') &&
                                <View style={{ width: '100%', height: 200 }}>
                                    <Video
                                      source={{ uri: item.fileUri }}
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
                                <Pressable onPress={() => !item.file ? updateStepImage(item.id) : null}><Image style={{width : 58, height : 37}} source={require('./assets/images/add-image.png')}/></Pressable>
                                <Pressable onPress={() => !item.file ? updateStepVideo(item.id) : null}><Image style={{width : 63, height : 36}} source={require('./assets/images/add-vidoe.png')}/></Pressable>
                            </View>
                        </View>
                      )
                  }}
                  keyExtractor={item => String(item.id)}
                />
            </View>

        </SafeAreaView>

    )
}

export default EditRecipeStep2;

import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Pressable, SafeAreaView, TextInput, Image} from "react-native";
import {Layouts, MainColor} from "../../../theme";
import styles from './styles';
import PrimarySmallBtn from "../../../components/PrimarySmallBtn";
import ArrowRight from "../../../assets/images/arrow-right.svg";
import ArrowLeft from '../../../assets/images/arrow-left-gray.svg';
import ArrowDown from "../AddRecipeStep1/assets/images/arrow-down.svg";

import AddStepSvg from './assets/images/add-step.svg';
import AddImageSvg from './assets/images/add-image.svg';
import AddVideoSvg from './assets/images/add-video.svg';

const AddRecipeStep2 : React.FC = () => {

    const [value, onChangeText] = useState('');

    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ width: '100%', height:'100%',flex : 1 }}>
            <View style={[Layouts.spaceBetween, {paddingLeft: 20, paddingRight: 20}]}>
                <PrimarySmallBtn onClick={()=> navigation.navigate('AddRecipeStep1')} icon={<ArrowLeft width={11} height={18}/>} bgColor={'#fff'}/>
                <Text style={styles.title}>
                    Please, write{'\n'} or upload video{'\n'} recipe 🥬
                </Text>
                <PrimarySmallBtn onClick={()=> navigation.navigate('AddRecipePreview')} icon={<ArrowRight width={11} height={18}/>} bgColor={MainColor}/>
            </View>
            <Text style={styles.description}>
                Set name, import photo of your dish,{"\n"} and check ingredients
            </Text>
            <View style={styles.container}>
                <ArrowDown width={25} height={25}/>
                <View style={styles.addRecipeBox}>
                    <View style={styles.stepAlign}>
                        <View style={styles.stepBox}>
                            <Text style={styles.step}>
                                1
                            </Text>
                        </View>
                        <TextInput
                            placeholder={"Your dish name"}
                            multiline
                            onChangeText={text => onChangeText(text)}
                            value={value}
                            style={[styles.contentTxt]}
                        />
                    </View>
                    <View style={styles.recipeAddButtons}>
                        <Pressable>
                            <Image style={{width : 73, height : 35}} source={require('./assets/images/add-step-img.png')}/>
                        </Pressable>
                        <Pressable>
                            <Image style={{width : 58, height : 37}} source={require('./assets/images/add-image.png')}/>
                        </Pressable>
                        <Pressable>
                            <Image style={{width : 63, height : 36}} source={require('./assets/images/add-vidoe.png')}/>
                        </Pressable>
                    </View>
                </View>
            </View>

        </SafeAreaView>

    )
}

export default AddRecipeStep2;

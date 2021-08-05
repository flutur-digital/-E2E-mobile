import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Pressable, SafeAreaView, Image, TextInput} from "react-native";
import Video from "react-native-video";

import ArrowRight from '../../../assets/images/arrow-right.svg';
import FacebookIcon from '../../../assets/images/socialsicons/facebook.svg';
import InstagramIcon from '../../../assets/images/socialsicons/instagram.svg';
import TwitterIcon from '../../../assets/images/socialsicons/twitter.svg';
import {Layouts, MainColor} from "../../../theme";
import PrimarySmallBtn from "../../../components/PrimarySmallBtn";
import ArrowLeft from "../../../assets/images/arrow-left.svg";
import CheckSvg from "../../../assets/images/check.svg";
import styles from "./styles";

const ProfileSettings : React.FC = () => {

    const [value, onChangeText] = useState('Dorin');
    const [bio, setBio] = useState('Hello, please enjoy my recipes');

    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ width: '100%', height:'100%' }}>
            <View style={[Layouts.spaceBetween, {paddingLeft: 22, paddingRight: 16}]}>
                <PrimarySmallBtn icon={<ArrowLeft width={9} height={16}/>} bgColor={MainColor}/>
                <PrimarySmallBtn onClick={()=> navigation.navigate('AddRecipeSuccess')} icon={<CheckSvg width={20} height={14}/>} bgColor={'#00e96b'}/>
            </View>
            <View style={styles.container}>
                <Image style={styles.userAvatar}
                       source={{uri : 'https://cdn.dribbble.com/users/98662/screenshots/684560/spider-man-icon.jpg'}}
                />
                <Pressable>
                    <Text style={styles.changePhotoTxt}>
                        Change profile photo
                    </Text>
                </Pressable>
                <View style={styles.settingItem}>
                    <View style={styles.settingName}>
                        <Text style={styles.name}>
                            Name
                        </Text>
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.settingInput}
                            placeholder={'John Doe'}
                            value={value}
                            onChangeText={text => onChangeText(text)}
                        />
                    </View>
                </View>
                <View style={styles.settingItem}>
                    <View style={styles.settingName}>
                        <Text style={styles.name}>
                            Bio
                        </Text>
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.settingInput}
                            multiline
                            placeholder={'About yourself'}
                            value={bio}
                            onChangeText={text => setBio(text)}
                        />
                    </View>
                </View>
            </View>


        </SafeAreaView>
    )
};

export default ProfileSettings;

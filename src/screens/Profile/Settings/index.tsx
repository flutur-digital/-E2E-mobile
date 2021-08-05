import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Pressable, SafeAreaView, Image, TextInput} from "react-native";
import Video from "react-native-video";

import ArrowRight from './assets/images/arrow-right.svg';
import LegalSvg from './assets/images/information.svg';
import PrivacySvg from './assets/images/privacy.svg';
import HelpSvg from './assets/images/help.svg';
import FacebookIcon from '../../../assets/images/socialsicons/facebook.svg';
import InstagramIcon from '../../../assets/images/socialsicons/instagram.svg';
import TwitterIcon from '../../../assets/images/socialsicons/twitter.svg';
import {Layouts, MainColor, Typography} from "../../../theme";
import PrimarySmallBtn from "../../../components/PrimarySmallBtn";
import ArrowLeft from "../../../assets/images/arrow-left.svg";
import UserSvg  from './assets/images/user.svg';
import CheckSvg from "../../../assets/images/check.svg";
import styles from "./styles";

const Settings : React.FC = () => {

    const [value, onChangeText] = useState('Dorin');
    const [bio, setBio] = useState('Hello, please enjoy my recipes');

    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ width: '100%', height:'100%' }}>
            <View style={[Layouts.spaceBetween, {paddingLeft: 22, paddingRight: 16}]}>
                <PrimarySmallBtn icon={<ArrowLeft width={9} height={16}/>} bgColor={MainColor}/>
                <Text style={styles.title}>
                    Settings
                </Text>
                <View style={{width: 38.7, height: 38.7,}}>

                </View>
            </View>
            <View style={styles.container}>
                <Pressable style={styles.settingItem} onPress={()=> navigation.navigate('ProfileSettings')}>
                    <View style={{flexDirection : 'row', alignItems : 'center'}}>
                        <UserSvg width={25} height={25}/>
                        <Text style={styles.name}>
                            Account
                        </Text>
                    </View>

                    <ArrowRight width={15} height={15}/>
                </Pressable>
                <Pressable style={styles.settingItem}>
                    <View style={{flexDirection : 'row', alignItems : 'center'}}>
                        <LegalSvg width={25} height={25}/>
                        <Text style={styles.name}>
                            Terms & Conditions
                        </Text>
                    </View>

                    <ArrowRight width={15} height={15}/>
                </Pressable>
                <Pressable style={styles.settingItem}>
                    <View style={{flexDirection : 'row', alignItems : 'center'}}>
                        <PrivacySvg width={25} height={25}/>
                        <Text style={styles.name}>
                            Privacy Policy
                        </Text>
                    </View>

                    <ArrowRight width={15} height={15}/>
                </Pressable>
                <Pressable style={[styles.settingItem, {borderBottomWidth : 0.5, borderBottomColor : MainColor, paddingBottom : 20}]}>
                    <View style={{flexDirection : 'row', alignItems : 'center'}}>
                        <HelpSvg width={25} height={25}/>
                        <Text style={styles.name}>
                            Support
                        </Text>
                    </View>

                    <ArrowRight width={15} height={15}/>
                </Pressable>
                <Text style={styles.logoutSection}>
                    Logins
                </Text>
                <Pressable>
                    <Text style={styles.logOutBtn}>
                        Log Out
                    </Text>
                </Pressable>
                <Pressable>
                    <Text style={styles.deleteBtn}>
                        Delete account
                    </Text>
                </Pressable>
            </View>





        </SafeAreaView>
    )
};

export default Settings;

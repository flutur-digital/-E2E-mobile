import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { View, Text, Pressable, SafeAreaView, Alert } from "react-native";
import Video from "react-native-video";

import ArrowRight from './assets/images/arrow-right.svg';
import LegalSvg from './assets/images/information.svg';
import PrivacySvg from './assets/images/privacy.svg';
import HelpSvg from './assets/images/help.svg';
import { Layouts, MainColor, Typography } from "../../../theme";
import PrimarySmallBtn from "../../../components/PrimarySmallBtn";
import ArrowLeft from "../../../assets/images/arrow-left.svg";
import UserSvg from './assets/images/user.svg';
import styles from "./styles";

import { logout } from "../../../store/modules/auth.reducer";

const Settings: React.FC = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const [value, onChangeText] = useState('Dorin');
    const [bio, setBio] = useState('Hello, please enjoy my recipes');

    const logoutNow = () => {
        dispatch(logout())
    }

    const openLogoutConfirmDialog = () =>{

        return Alert.alert(
            "Are your sure?",
            "Are you sure you want to log out?",
            [
                {
                    text: "Yes",
                    onPress: () => {
                        logoutNow();
                    },
                },
                {
                    text: "No",
                },
            ]
        );
    }

return (
    <SafeAreaView style={{ width: '100%', height: '100%' }}>
        <View style={[Layouts.spaceBetween, { paddingLeft: 22, paddingRight: 16, paddingTop: 15 }]}>
            <PrimarySmallBtn icon={<ArrowLeft width={9} height={16} />} bgColor={MainColor} onClick={() => navigation.goBack()} />
            <Text style={styles.title}>
                Settings
            </Text>
            <View style={{ width: 38.7, height: 38.7, }}>

            </View>
        </View>
        <View style={styles.container}>
            <Pressable style={styles.settingItem} onPress={() => navigation.navigate('ProfileSettings')}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <UserSvg width={25} height={25} />
                    <Text style={styles.name}>
                        Account
                    </Text>
                </View>

                <ArrowRight width={15} height={15} />
            </Pressable>
            <Pressable style={styles.settingItem}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <LegalSvg width={25} height={25} />
                    <Text style={styles.name}>
                        Terms & Conditions
                    </Text>
                </View>

                <ArrowRight width={15} height={15} />
            </Pressable>
            <Pressable style={styles.settingItem}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <PrivacySvg width={25} height={25} />
                    <Text style={styles.name}>
                        Privacy Policy
                    </Text>
                </View>

                <ArrowRight width={15} height={15} />
            </Pressable>
            <Pressable style={[styles.settingItem, { borderBottomWidth: 0.5, borderBottomColor: MainColor, paddingBottom: 20 }]}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <HelpSvg width={25} height={25} />
                    <Text style={styles.name}>
                        Support
                    </Text>
                </View>

                <ArrowRight width={15} height={15} />
            </Pressable>
            <Text style={styles.logoutSection}>
                Logins
            </Text>
            <Pressable onPress={() => openLogoutConfirmDialog()}>
                <Text style={styles.logOutBtn}>Log Out</Text>
            </Pressable>
            <Pressable>
                <Text style={styles.deleteBtn}>Delete account</Text>
            </Pressable>
        </View>





    </SafeAreaView>
)
};

export default Settings;

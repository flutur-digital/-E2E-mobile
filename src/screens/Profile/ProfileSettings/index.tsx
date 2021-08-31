import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { View, Text, Pressable, SafeAreaView, Image, TextInput, Alert, Platform } from "react-native";

import {Layouts, MainColor} from "../../../theme";
import PrimarySmallBtn from "../../../components/PrimarySmallBtn";
import LoaderOverlay from "../../../components/LoaderOverlay";
import ArrowLeft from "../../../assets/images/arrow-left.svg";
import CheckSvg from "../../../assets/images/check.svg";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import * as ImagePicker from "react-native-image-picker";
import {imagePickerOptions} from "../../../config";
import { checkIfInputIsEmpty, isFileImage } from "../../../util/util";
import { updateUserProfile } from "../../../services";
import { updateUserData } from "../../../store/modules/auth.reducer";

const ProfileSettings : React.FC = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const {user} = useSelector(
      (state: any) => state.authReducer
    );

    console.log(user.avatar);

    const [loading, setLoading] = useState<boolean>(false);
    const [userName,setUserName] = useState<string>(user?.name ?? '');
    const [userBio, setUserBio] = useState<string>(user?.bio ?? '');
    const [userAvatarUri, setUserAvatarUri] = useState<any>((user.avatar && isFileImage(user.avatar)) ? {uri: user.avatar} : require('../../../assets/images/noavatar.png'));
    const [userAvatarFile, setUserAvatarFile] = useState<any>(null);

    const selectImageForAvatar = async () => {
        // @ts-ignore
        ImagePicker.launchImageLibrary(imagePickerOptions, (response) => {
            if (response.didCancel) {
                console.log("cancel");
            } else if (response.errorCode) {
                console.log("error");
            } else if (response.assets) {
                setUserAvatarFile(response.assets[0]);
                setUserAvatarUri({uri: response.assets[0].uri});
            }
        });
    };

    const saveUserData = () => {
        if(checkIfInputIsEmpty(userName)){
            Alert.alert(`The name field is required`);
        } else  {
            setLoading(true);
            const formData = new FormData();
            formData.append('name', userName);
            formData.append('bio', userBio);
            if(userAvatarFile){
                formData.append('avatar', {
                    name: userAvatarFile.fileName,
                    type: userAvatarFile.type,
                    uri: Platform.OS === "android" ? userAvatarFile.uri : userAvatarFile.uri.replace("file://", "")
                });
            }

            updateUserProfile(formData).then((res) => {
                setLoading(false);
                if(res.data.data){
                    dispatch(updateUserData({ user: res.data.data }));
                    return navigation.navigate('Settings')
                } else {
                    Alert.alert(`Whoops, looks like something went wrong!`);
                }
            });
        }
    }

    return (
        <SafeAreaView style={{ width: '100%', height:'100%' }}>
            <View style={[Layouts.spaceBetween, {paddingLeft: 22, paddingRight: 16, paddingTop : 15}]}>
                <PrimarySmallBtn icon={<ArrowLeft width={9} height={16}/>} bgColor={MainColor} onClick={()=>navigation.goBack()}/>
                <PrimarySmallBtn onClick={() => saveUserData()} icon={<CheckSvg width={20} height={14}/>} bgColor={'#00e96b'}/>
            </View>
            <View style={styles.container}>
                <Image style={styles.userAvatar} source={userAvatarUri} />
                <Pressable onPress={() => selectImageForAvatar()}>
                    <Text style={styles.changePhotoTxt}>Change profile photo</Text>
                </Pressable>
                <View style={styles.settingItem}>
                    <View style={styles.settingName}>
                        <Text style={styles.name}>Name</Text>
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.settingInput}
                            placeholder={'John Doe'}
                            value={userName}
                            onChangeText={text => setUserName(text)}
                        />
                    </View>
                </View>
                <View style={styles.settingItem}>
                    <View style={styles.settingName}>
                        <Text style={styles.name}>Bio</Text>
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.settingInput}
                            multiline
                            placeholder={'About yourself'}
                            value={userBio}
                            onChangeText={text => setUserBio(text)}
                        />
                    </View>
                </View>
            </View>
            <LoaderOverlay loading={loading}/>
        </SafeAreaView>
    )
};

export default ProfileSettings;

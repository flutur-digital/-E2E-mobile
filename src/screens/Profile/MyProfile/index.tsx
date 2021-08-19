import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import {View, Text, Pressable, SafeAreaView, ScrollView, Image} from "react-native";
import {SecondColor, Layouts} from '../../../theme';
import styles from "./styles";
import Recipe from "../../../components/Recipe";

import SettingsSvg from '../../../assets/images/settings.svg';
import { useSelector } from "react-redux";
import {getUserProfileById} from "../../../services";


const MyProfile : React.FC = () => {

    const navigation = useNavigation();

    const {isAuthenticated, user} = useSelector(
      (state: any) => state.authReducer
    );

    const [userData, setUserData] = useState<any>(null);

    const getUserData = (userId: number) => {
        getUserProfileById(userId).then((res) => {
            if(res.data) {
                setUserData(res.data.data);
            }
        });
    }

    useEffect(() => {
        if(isAuthenticated && user.id){
            getUserData(user.id);
        }
    },[]);

    console.log(userData);

    return (
        <SafeAreaView style={{ width: '100%', height:'100%',backgroundColor : SecondColor }}>
            <View style={[Layouts.spaceBetween, {paddingTop : 15}]}>
                <View style={{width: 38.7, height: 38.7,}}>

                </View>
                <Pressable style={styles.settingsBtn} onPress={()=>navigation.navigate('Settings')}>
                    <SettingsSvg width={22} height={22}/>
                </Pressable>

            </View>
            <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
                <Image style={styles.userAvatar}
                       source={{uri : 'https://lh3.googleusercontent.com/proxy/zjtYbjTqfTUOImpno68A6EISaOjkWXYRu4tthjB2ijfXgSLQJgGhCz11Kby67tufSbreX9596DWdRLVkybhb04kY'}}
                />
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.userBio}>Hello, please enjoy my recipes</Text>
                {
                    userData &&
                      <>
                          {
                              userData.recipes.map((recipe: any, index: number) => {
                                  return (
                                    <Recipe
                                      key={index}
                                      id={recipe.id}
                                      title={recipe.name}
                                      image={recipe.image}
                                      time={`${recipe.prepare_time} min`}
                                      likes={recipe.likes}
                                    />
                                  )
                              })
                          }
                      </>
                }

            </ScrollView>
        </SafeAreaView>
    )
};

export default MyProfile;

import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import { View, Text, Pressable, SafeAreaView, ScrollView, Image, ListRenderItem } from "react-native";
import { SwipeListView } from 'react-native-swipe-list-view';
import {SecondColor, Layouts} from '../../../theme';
import styles from "./styles";
import Recipe from "../../../components/Recipe";
import RecipeDeleteHiddenRow from "../../../components/RecipeDeteleHiddenRow";

import SettingsSvg from '../../../assets/images/settings.svg';
import { useSelector } from "react-redux";
import {getUserProfileById} from "../../../services";
import { isFileImage } from "../../../util/util";


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
        return navigation.addListener('focus', () => {
            if(isAuthenticated && user.id){
                getUserData(user.id);
            }
        });
    },[navigation]);

    return (
        <SafeAreaView style={{ width: '100%', height:'100%',backgroundColor : SecondColor }}>
            <View style={[Layouts.spaceBetween, {paddingTop : 15}]}>
                <View style={{width: 38.7, height: 38.7,}}/>
                <Pressable style={styles.settingsBtn} onPress={()=>navigation.navigate('Settings')}>
                    <SettingsSvg width={22} height={22}/>
                </Pressable>

            </View>
            <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
                <Image style={styles.userAvatar}  source={(user.avatar && isFileImage(user.avatar)) ? {uri: user.avatar} : require('../../../assets/images/noavatar.png')} />
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.userBio}>{user.bio ?? ''}</Text>
                <View style={{ width: '100%' }}>
                {
                    userData && userData.recipes.length > 0 &&
                        <SwipeListView
                          swipeRowStyle={{width: '100%' }}
                          closeOnScroll={true}
                          data={userData?.recipes}
                          renderItem={ (data: any, rowMap) => (
                            <Recipe
                              key={data.item.id}
                              id={data.item.id}
                              title={data.item.name}
                              image={data.item.image}
                              time={`${data.item.prepare_time} min`}
                              likes={data.item.likes}
                            />
                          )}
                          renderHiddenItem={ (data, rowMap) => (<RecipeDeleteHiddenRow/>)}
                          leftOpenValue={0}
                          rightOpenValue={-90}
                        />
                }
                    {
                        userData && userData.recipes.length == 0 &&
                            <View style={{ paddingTop: 50 }}>
                                <Text style={styles.userName}>You don't have any recipes yet</Text>
                            </View>
                    }
                </View>

            </ScrollView>
        </SafeAreaView>
    )
};

export default MyProfile;

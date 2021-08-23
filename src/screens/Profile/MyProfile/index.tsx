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

    const loging = (data:any) => {
        console.log(data);
    }

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
                       source={{uri : 'https://vyshnevyi-partners.com/wp-content/uploads/2016/12/no-avatar.png'}}
                />
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.userBio}>Hello, please enjoy my recipes</Text>
                <View style={{ width: '100%' }}>
                {
                    userData &&
                        <SwipeListView
                          swipeRowStyle={{width: '100%' }}
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
                </View>

            </ScrollView>
        </SafeAreaView>
    )
};

export default MyProfile;

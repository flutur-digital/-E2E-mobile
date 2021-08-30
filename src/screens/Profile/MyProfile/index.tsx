import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import { View, Text, Pressable, SafeAreaView, Alert,Image } from "react-native";
import FastImage from "react-native-fast-image";
import { SwipeListView } from 'react-native-swipe-list-view';
import {SecondColor, Layouts} from '../../../theme';
import styles from "./styles";
import Recipe from "../../../components/Recipe";
import RecipeDeleteHiddenRow from "../../../components/RecipeDeteleHiddenRow";

import SettingsSvg from '../../../assets/images/settings.svg';
import { useSelector } from "react-redux";
import {getUserProfileById} from "../../../services";
import { isFileImage } from "../../../util/util";
import {userDeleteRecipe} from "../../../services";

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

    const listHeaderView = () => {
        return (
          <View style={styles.headerViewContent}>
              {(user.avatar && isFileImage(user.avatar)) && <FastImage style={styles.userAvatar} source={{uri: "https://easy2eat.co/storage/"+user.avatar}}/> }
              {(!user.avatar || !isFileImage(user.avatar)) && <Image style={styles.userAvatar} source={require('../../../assets/images/noavatar.png')}/> }
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.userBio}>{user.bio ?? ''}</Text>
          </View>
        )
    }

    const editRecipe = (recipeId: number) => {
      return navigation.navigate('EditRecipeStep1',{recipeId: recipeId});
    }

    const deleteRecipe = (recipeId: number) => {
      userDeleteRecipe(recipeId).then((res) => {
        if(res.data && res.data.status){
          if(isAuthenticated && user.id){
            getUserData(user.id);
          }
        }
      })
    }

    const confirmDeleteRecipe = (recipeId: number, recipeName: string) => {
      Alert.alert(
        "Are your sure?",
        `Are you sure you want to delete the recipe ${recipeName}`,
        [
          {
            text: "Yes",
            onPress: () => deleteRecipe(recipeId),
          },
          {
            text: "No",
          },
        ]
      );
    }

    const [selectedRowKey, setSelectedRowKey] = useState<number>(0);
    const swipeGestureEndedFunction = (keyId: string) => {
      setSelectedRowKey(Number(keyId));
    }

    return (
        <SafeAreaView style={{ width: '100%', height:'100%',backgroundColor : SecondColor }}>
            <View style={[Layouts.spaceBetween, {paddingTop : 15, paddingBottom: 5}]}>
                <View style={{width: 38.7, height: 38.7,}}/>
                <Pressable style={styles.settingsBtn} onPress={()=>navigation.navigate('Settings')}>
                    <SettingsSvg width={22} height={22}/>
                </Pressable>

            </View>
            <View style={styles.container}>
                {
                    userData && userData.recipes.length > 0 &&
                        <SwipeListView
                          style={styles.listContainer}
                          ListHeaderComponent={listHeaderView()}
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
                          keyExtractor={(rowData: any) => {
                            return rowData.id;
                          }}
                          swipeGestureBegan={swipeGestureEndedFunction}
                          renderHiddenItem={ (data: any, rowMap) =>
                            (<RecipeDeleteHiddenRow selectedKeyId={selectedRowKey} keyId={data.item.id} onEdit={() => editRecipe(data.item.id)} onDelete={() => confirmDeleteRecipe(data.item.id, data.item.name)}/>)
                          }
                          leftOpenValue={0}
                          rightOpenValue={-90}
                        />
                }
                    {
                        userData && userData.recipes.length == 0 &&
                          <>
                            {listHeaderView()}
                            <View style={{ paddingTop: 50 }}>
                                <Text style={styles.userName}>You don't have any recipes yet</Text>
                            </View>
                          </>
                    }

            </View>
        </SafeAreaView>
    )
};

export default MyProfile;

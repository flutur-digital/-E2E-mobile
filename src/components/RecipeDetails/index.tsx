import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import {View, Text, Pressable, Image} from 'react-native';
import styles from './styles';
import TimeSvg from './assets/images/time.svg';
import HeartSvg from './assets/images/heart.svg';
import { useSelector } from "react-redux";
import {followUserById, getUserIsFollowingUser} from "../../services";

interface Props{
    recipeDetails: any
}

const RecipeDetails : React.FC<Props> = ({recipeDetails}) => {

    const navigation = useNavigation();

    const [isFollowingRecipeUser, setIsFollowingRecipeUser] = useState<boolean>(false);

    const {isAuthenticated, user} = useSelector(
      (state: any) => state.authReducer
    );

    const checkIsFollowingUser = (userId: number) => {
        if(isAuthenticated){
            getUserIsFollowingUser(userId).then((res) => {
                if(res.data){
                    setIsFollowingRecipeUser(res.data.following);
                }
            })
        }
    }

    const folowUser = (userId: number) => {
        if(isAuthenticated){
            followUserById(userId).then((res) => {
                if(res.data){
                    checkIsFollowingUser(userId);
                }
            })
        }
    };

    useEffect(() => {
        checkIsFollowingUser(recipeDetails.user.id);
    },[])

    return (
        <View style={styles.recipeBox}>
            <Image
                style={styles.recipeImage}
                source={{uri : recipeDetails.image}}
            />
            <View style={styles.recipeTitleWrapper}>
                <Text style={styles.title}>{recipeDetails.name}</Text>
                <View style={styles.timeBlock}>
                    <Text style={styles.timeTxt}>Time to prepare</Text>
                    <TimeSvg width={18} height={18} style={{marginLeft : 8, marginRight : 7}}/>
                    <Text style={styles.timeTxt}>{recipeDetails.prepare_time} min</Text>
                </View>
            </View>
            {
                recipeDetails?.description.map((item: any, index: number) => {
                    return (
                      <>
                          <View key={index} style={styles.recipeContentTxt}>
                              <View style={styles.stepBox}>
                                  <Text style={styles.step}>{index+1}</Text>
                              </View>
                              <Text style={styles.contentTxt}>{item.text}</Text>

                          </View>
                          {
                            item.file && <Image style={styles.recipeMedia} source={{uri : item.file}} />
                          }
                      </>
                    )
                })
            }
            <View style={styles.recipeFooter}>
                <Image
                    style={styles.smallRecipeImage}
                    source={{uri : recipeDetails.image}}
                />
                <View style={styles.userInfo}>
                    <Text style={styles.role}>Butcher</Text>
                    <Text style={styles.name}>{recipeDetails.user.name}</Text>
                    {!isAuthenticated &&
                        <View style={styles.followBlock}>
                            <Pressable onPress={() => navigation.navigate('Login')} style={styles.followBtn}>
                                <Image style={styles.userAvatar}
                                       source={{ uri: 'https://vyshnevyi-partners.com/wp-content/uploads/2016/12/no-avatar.png' }}
                                />
                                <Text style={styles.followTxt}>Follow</Text>
                            </Pressable>
                            <View style={styles.likesCount}>
                                <HeartSvg width={23} height={20} style={{ marginBottom: 7 }} />
                                <Text style={styles.followTxt}>{recipeDetails.likes}</Text>
                            </View>
                        </View>
                    }
                    {isAuthenticated &&
                        <View style={styles.followBlock}>
                            <Pressable onPress={() => folowUser(recipeDetails.user.id)} style={isFollowingRecipeUser ? styles.followBtnActive : styles.followBtn}>
                                <Image style={styles.userAvatar}
                                       source={{ uri: 'https://vyshnevyi-partners.com/wp-content/uploads/2016/12/no-avatar.png' }}
                                />
                                <Text style={isFollowingRecipeUser ? styles.followTxtActive : styles.followTxt}>{isFollowingRecipeUser ? 'Following' : 'Follow' }</Text>
                            </Pressable>
                            <View style={styles.likesCount}>
                                <HeartSvg width={23} height={20} style={{ marginBottom: 7 }} />
                                <Text style={styles.followTxt}>{recipeDetails.likes}</Text>
                            </View>
                        </View>
                    }
                </View>
            </View>
        </View>
    )
}

export default RecipeDetails;

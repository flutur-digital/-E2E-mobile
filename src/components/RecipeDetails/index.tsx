import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from "react";
import {View, Text, Pressable, Image} from 'react-native';
import styles from './styles';
import TimeSvg from './assets/images/time.svg';
import HeartSvg from './assets/images/heart.svg';

interface Props{
    recipeDetails: any
}

const RecipeDetails : React.FC<Props> = ({recipeDetails}) => {

    const navigation = useNavigation();

    useEffect(() => {
        // console.log(recipeDetails)
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
            <View style={styles.recipeContentTxt}>
                <View style={styles.stepBox}>
                    <Text style={styles.step}>
                        1
                    </Text>
                </View>
                <Text style={styles.contentTxt}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </Text>

            </View>
            <Image
                style={styles.recipeMedia}
                source={{uri : 'https://i.pinimg.com/originals/83/c6/3a/83c63a5986cbd3b47638bd2bea8bfa02.jpg'}}
            />
            <View style={styles.recipeFooter}>
                <Image
                    style={styles.smallRecipeImage}
                    source={{uri : 'https://i.pinimg.com/originals/83/c6/3a/83c63a5986cbd3b47638bd2bea8bfa02.jpg'}}
                />
                <View style={styles.userInfo}>
                    <Text style={styles.role}>Butcher</Text>
                    <Text style={styles.name}>{recipeDetails.user.name}</Text>
                    <View style={styles.followBlock}>
                        <Pressable style={styles.followBtn}>
                            <Image style={styles.userAvatar}
                                   source={{uri : 'https://lh3.googleusercontent.com/proxy/zjtYbjTqfTUOImpno68A6EISaOjkWXYRu4tthjB2ijfXgSLQJgGhCz11Kby67tufSbreX9596DWdRLVkybhb04kY'}}
                            />
                            <Text style={styles.followTxt}>
                                Follow
                            </Text>
                        </Pressable>
                        <View style={styles.likesCount}>
                            <HeartSvg width={23} height={20} style={{marginBottom : 7}}/>
                            <Text style={styles.followTxt}>
                                324
                            </Text>
                        </View>

                    </View>
                </View>
            </View>
        </View>
    )
}

export default RecipeDetails;

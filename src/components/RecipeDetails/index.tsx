import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import styles from './styles';
import TimeSvg from './assets/images/time.svg';
import HeartSvg from './assets/images/heart.svg';

const RecipeDetails : React.FC = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.recipeBox}>
            <Image
                style={styles.recipeImage}
                source={{uri : 'https://i.pinimg.com/originals/83/c6/3a/83c63a5986cbd3b47638bd2bea8bfa02.jpg'}}
            />
            <View style={styles.recipeTitleWrapper}>
                <Text style={styles.title}>
                    Eggs with roast beef & avocado
                </Text>
                <View style={styles.timeBlock}>
                    <Text style={styles.timeTxt}>
                        Time to prepare
                    </Text>
                    <TimeSvg width={18} height={18} style={{marginLeft : 8, marginRight : 7}}/>
                    <Text style={styles.timeTxt}>
                        15 min
                    </Text>
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
                    <Text style={styles.role}>
                        Butcher
                    </Text>
                    <Text style={styles.name}>
                        George
                    </Text>
                    <Text style={styles.name}>
                        Yashin
                    </Text>
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

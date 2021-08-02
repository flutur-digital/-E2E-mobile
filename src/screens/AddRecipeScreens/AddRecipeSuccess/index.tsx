import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, Pressable, SafeAreaView} from "react-native";
import {MainColor, SecondColor} from "../../../theme";
import BackSvg from '../../../assets/images/back.svg';
import CheckSvg from '../../../assets/images/check.svg';
import Recipe from "../../../components/Recipe";

import styles from "./styles";
import ArrowLeft from "../../../assets/images/arrow-left.svg";
import FacebookSvg from '../../../assets/images/socialsicons/facebook-white.svg';
import TwitterSvg from '../../../assets/images/socialsicons/twitter-white.svg';
import InstagramSvg from '../../../assets/images/socialsicons/instagram-white.svg';
import PrimarySmallBtn from "../../../components/PrimarySmallBtn";


const AddRecipeSuccess : React.FC = () => {

    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ width: '100%', height:'100%',backgroundColor : MainColor, position : 'relative', alignItems : 'center', justifyContent : 'center' }}>
            <Text style={styles.title}>Congratulations,  you've added{"\n"}  your recipe!</Text>
            <View style={styles.successIcon}>
                <CheckSvg style={{zIndex : 20}} width={37} height={27}/>
            </View>
            <View style={{width : '100%', paddingLeft : 15, paddingRight : 13, marginTop : 55, zIndex : 20}}>
                <Recipe
                    title={'Warm  salad with  backed beef'}
                    image={'https://i.pinimg.com/originals/83/c6/3a/83c63a5986cbd3b47638bd2bea8bfa02.jpg'}
                    time={'15 min'}
                />
                <Text style={styles.socialTxt}>
                    Share with your friends
                </Text>
                <View style={styles.socialIcons}>
                    <Pressable style={[styles.socialBtn, {marginRight : 15}]}>
                        <FacebookSvg width={19} height={31}/>
                    </Pressable>
                    <Pressable style={[styles.socialBtn, {marginRight : 15}]}>
                        <TwitterSvg width={29} height={23}/>
                    </Pressable>
                    <Pressable style={styles.socialBtn}>
                        <InstagramSvg width={34} height={34}/>
                    </Pressable>
                </View>
            </View>
          <View style={{width : '100%', height : '100%', alignItems : 'center', justifyContent : 'center', position : 'absolute'}}>
              <BackSvg width={390} height={609}/>
          </View>
        </SafeAreaView>
    )
}

export default AddRecipeSuccess;

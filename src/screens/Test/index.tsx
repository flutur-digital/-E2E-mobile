import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Pressable } from "react-native";
import Video from "react-native-video";

import ArrowRight from '../../assets/images/arrow-right.svg';
import FacebookIcon from '../../assets/images/socialsicons/facebook.svg';
import InstagramIcon from '../../assets/images/socialsicons/instagram.svg';
import TwitterIcon from '../../assets/images/socialsicons/twitter.svg';

const Test : React.FC = () => {

    const navigation = useNavigation();
    return (
        <View style={{ width: '100%', height:'100%' }}>
            <Pressable onPress={() => navigation.navigate('RecipeScreen')} style={{marginTop : 300}}>
                <Text>
                    Recipe Screen
                </Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('UserRecipes')} style={{marginTop : 10}}>
                <Text>
                   User
                </Text>
            </Pressable>

        </View>
    )
}

export default Test;

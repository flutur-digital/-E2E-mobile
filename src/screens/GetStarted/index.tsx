import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Pressable, SafeAreaView } from 'react-native';
import { Typography } from '../../theme';

import InstagramSvg from '../../assets/images/insta.svg';

const GetStarted : React.FC = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <Text style={Typography.title}>Get Started</Text>
            <InstagramSvg width={20} height={20}/>
            <Pressable onPress={() => navigation.navigate('Login')}><Text>Go to login</Text></Pressable>
        </SafeAreaView>
    )
}

export default GetStarted;
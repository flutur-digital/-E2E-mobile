import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Dimensions,Text, Pressable, SafeAreaView } from 'react-native';
import LottieView from 'lottie-react-native';
import { Typography, MainColor } from '../../theme';
import styles from "./styles";

import InstagramSvg from '../../assets/images/insta.svg';

const screen = Dimensions.get("screen");


const GetStarted : React.FC = () => {

    const navigation = useNavigation();

    return (
        <View style={{ width: '100%', height:'100%' }}>
            {/*<Text style={Typography.title}>Get Started</Text>*/}
            {/*<InstagramSvg width={20} height={20}/>*/}
            {/*<Pressable onPress={() => navigation.navigate('Login')}><Text>Go to login</Text></Pressable>*/}
            <LottieView
              style={{
                width: 300,
                aspectRatio: 300 / 600,
                flexGrow: 1,
                alignSelf: 'center',
              }}
              resizeMode="cover"
              source={require('./../../assets/mainanimation.json')} autoPlay loop={false}/>
        </View>
    )
}

export default GetStarted;

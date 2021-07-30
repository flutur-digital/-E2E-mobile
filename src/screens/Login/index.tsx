import React from 'react';
import {View, Text, SafeAreaView, PixelRatio, Pressable} from 'react-native';
import {SecondColor, Layouts, Typography, MainColor} from "../../theme";
import styles from "./styles";
import ArrowLeft from '../../assets/images/arrow-left.svg';
import LogoSvg from '../../assets/images/user.svg';
import Recipe from "../../components/Recipe";
import AppleSvg from './assets/images/apple.svg';

import PrimarySmallBtn from "../../components/PrimarySmallBtn";



const Login : React.FC = () => {

    return (
        <SafeAreaView style={styles.wrapper}>

            <View style={Layouts.spaceBetween}>
                <PrimarySmallBtn icon={<ArrowLeft width={9} height={16}/>} bgColor={MainColor}/>
            </View>
            <View style={styles.container}>
                <Text allowFontScaling={false} adjustsFontSizeToFit numberOfLines={2} style={Typography.title}>
                    Welcome to{"\n"}
                    e<Text style={{color : MainColor}}>2</Text>e community!
                </Text>
                {/*<Recipe title={'Eggs with roast beef & avocado'} image={'https://shorturl.at/kJOV9'} time={'15 min'} likes={10}/>*/}
                <Pressable style={styles.iosBtn}>
                    <AppleSvg/>
                    <Text style={styles.whiteBtnTitle}>
                        Sign in with Apple
                    </Text>
                </Pressable>
            </View>

        </SafeAreaView>
    )
}

export default Login;

import React from 'react';
import {View, Text, SafeAreaView, Pressable, Image} from 'react-native';
import {Layouts, Typography, MainColor} from "../../theme";
import styles from "./styles";
import ArrowLeft from '../../assets/images/arrow-left.svg';
import AppleSvg from './assets/images/apple.svg';
import FacebookSvg from './assets/images/facebook.svg';
import GoogleSvg from './assets/images/google.svg';
import PrimarySmallBtn from "../../components/PrimarySmallBtn";

import { LoginManager, AccessToken } from 'react-native-fbsdk-next'

const Login : React.FC = () => {

    const loginFacebook = () => {
        LoginManager.logInWithPermissions(["public_profile","email"]).then((result) => {
              if (result.isCancelled) {
                  console.log("Login cancelled");
              } else {
                  AccessToken.getCurrentAccessToken().then(data => {
                      // @ts-ignore
                      console.log(data.accessToken.toString())
                  })
                  // // @ts-ignore
                  // console.log("Login success with permissions: " + result.grantedPermissions.toString());
              }
          },
          function(error) {
              console.log("Login fail with error: " + error);
          }
        );
    }

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
                <Image source={require('./assets/images/logo.png')} style={styles.logoBox}/>
                <Pressable style={styles.iosBtn}>
                    <AppleSvg width={20} height={25}/>
                    <Text style={styles.whiteBtnTitle}>
                        Sign in with Apple
                    </Text>
                </Pressable>
                <Pressable onPress={() => loginFacebook()} style={styles.facebookBtn}>
                    <FacebookSvg width={13} height={25}/>
                    <Text style={styles.whiteBtnTitle}>
                        Sign in with Facebook
                    </Text>
                </Pressable>
                <Pressable style={styles.googleBtn}>
                    <GoogleSvg width={26} height={26}/>
                    <Text style={styles.blackBtnTitle}>
                        Sign in with Google
                    </Text>
                </Pressable>

            </View>
            <View style={styles.legalBox}>
                <Text style={styles.copyTxt}>
                    Easy2Eat Mobile App © 2021 All rights reserved
                </Text>
            </View>

        </SafeAreaView>
    )
}

export default Login;

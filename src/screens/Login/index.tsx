import React from "react";
import { View, Text, SafeAreaView, Pressable, Image, Platform } from "react-native";
import { useDispatch } from "react-redux";
import { Layouts, Typography, MainColor } from "../../theme";
import styles from "./styles";
import ArrowLeft from "../../assets/images/arrow-left.svg";
import AppleSvg from "./assets/images/apple.svg";
import FacebookSvg from "./assets/images/facebook.svg";
import GoogleSvg from "./assets/images/google.svg";
import PrimarySmallBtn from "../../components/PrimarySmallBtn";
import { appleAuth } from '@invertase/react-native-apple-authentication';
import { LoginManager, AccessToken } from "react-native-fbsdk-next";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";

import { userLogin } from "../../services";

import { setAuthSuccess } from "../../store/modules/auth.reducer";
import { useNavigation } from "@react-navigation/native";

const Login: React.FC = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const loginApple = async () =>  {
    // performs login request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    console.log(appleAuthRequestResponse);

    // // get current authentication state for user
    // // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
    // const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);
    //
    // // use credentialState response to ensure the user is authenticated
    // if (credentialState === appleAuth.State.AUTHORIZED) {
    //   // user is authenticated
    // }
  }

  const loginFacebook = () => {
    LoginManager.logInWithPermissions(["public_profile", "email"]).then((result) => {
      if (result.isCancelled) {
        console.log("Login cancelled");
      } else {
        AccessToken.getCurrentAccessToken().then(data => {
          if (data && data.accessToken) {
            userLogin(data.accessToken.toString(), "facebook").then((res) => {
              if (res && res.data && res.data.token && res.data.user) {
                dispatch(setAuthSuccess({ token: res.data.token, user: res.data.user }));
                // return navigation.goBack();
              }
            });
          }
        });
      }
    },
      function (error) {
        console.log("Login fail with error: " + error);
      }
    );
  };

  const loginGoogle = async () => {
    GoogleSignin.configure({
      iosClientId: "750241320668-r1ihbh0rlp39ca2ib04a6kjvbgp653rg.apps.googleusercontent.com",
      webClientId: "750241320668-43pnr3ragddtr5kial45jlfgku7b94s6.apps.googleusercontent.com"
    });
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn();
      const response = await GoogleSignin.getTokens();
      //@ts-ignore
      if (response) {
        userLogin(response.accessToken, "google").then((res) => {
          if (res && res.data && res.data.token && res.data.user) {
            dispatch(setAuthSuccess({ token: res.data.token, user: res.data.user }));
            // return navigation.goBack();
          }
        });
      }
    } catch (error) {
      console.log(error)
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('1')
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('2')
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('3')
      } else {
        console.log('4')
      }
    }
  };

  return (
    <SafeAreaView style={styles.wrapper}>

      <View style={Layouts.spaceBetween}>
        <PrimarySmallBtn onClick={() => navigation.goBack()} icon={<ArrowLeft width={9} height={16} />} bgColor={MainColor} />
      </View>
      <View style={styles.container}>
        <Text allowFontScaling={false} adjustsFontSizeToFit numberOfLines={2} style={Typography.title}>
          Welcome to{"\n"}
          e<Text style={{ color: MainColor }}>2</Text>e community!
        </Text>
        {/*<Recipe title={'Eggs with roast beef & avocado'} image={'https://shorturl.at/kJOV9'} time={'15 min'} likes={10}/>*/}
        <Image source={require("./assets/images/logo.png")} style={styles.logoBox} />

        {Platform.OS === 'ios' &&
          <Pressable onPress={() => loginApple()} style={styles.iosBtn}>
            <AppleSvg width={20} height={25} />
            <Text style={styles.whiteBtnTitle}>Sign in with Apple</Text>
          </Pressable>
        }
        <Pressable onPress={() => loginFacebook()} style={styles.facebookBtn}>
          <FacebookSvg width={13} height={25} />
          <Text style={styles.whiteBtnTitle}>Sign in with Facebook</Text>
        </Pressable>
        <Pressable onPress={() => loginGoogle()} style={styles.googleBtn}>
          <GoogleSvg width={26} height={26} />
          <Text style={styles.blackBtnTitle}>Sign in with Google</Text>
        </Pressable>

      </View>
      <View style={styles.legalBox}>
        <Text style={styles.copyTxt}>Easy2Eat Mobile App © 2021 All rights reserved</Text>
      </View>

    </SafeAreaView>
  );
};

export default Login;

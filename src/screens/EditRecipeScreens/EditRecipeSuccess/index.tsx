import React, {useEffect} from 'react';
import {View, Text, Pressable, SafeAreaView} from "react-native";
import LottieView from 'lottie-react-native';
import {MainColor} from "../../../theme";
import BackSvg from '../../../assets/images/back.svg';
import Recipe from "../../../components/Recipe";

import styles from "./styles";
import FacebookSvg from '../../../assets/images/socialsicons/facebook-white.svg';
import TwitterSvg from '../../../assets/images/socialsicons/twitter-white.svg';
import InstagramSvg from '../../../assets/images/socialsicons/instagram-white.svg';
import { useDispatch } from "react-redux";
import { resetAddRecipeState } from "../../../store/modules/editRecipe.reducer";

//@ts-ignore
const EditRecipeSuccess : React.FC = ({ route, navigation }) => {

    const { recipe } = route.params;
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(resetAddRecipeState());
    },[]);

    return (
        <SafeAreaView style={{ width: '100%', height:'100%',backgroundColor : MainColor, position : 'relative', alignItems : 'center', justifyContent : 'center' }}>
            <Text style={styles.title}>Congratulations,{"\n"} you've edited{"\n"}  your recipe!</Text>
            <Pressable onPress={() => navigation.navigate('MyProfile')} style={styles.successIcon}>
              <LottieView source={require('./assets/successanimation.json')} autoPlay/>
            </Pressable>
            <View style={{width : '100%', paddingLeft : 15, paddingRight : 13, marginTop : 55, zIndex : 20}}>
                <Recipe
                  id={2}
                  title={recipe.name}
                  image={"https://easy2eat.co/storage/"+recipe.image}
                  time={`${recipe.prepare_time} min`}
                />
                <Text style={styles.socialTxt}>Share with your friends</Text>
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

export default EditRecipeSuccess;

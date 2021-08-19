import React, { useEffect, useState } from "react";
import {View, SafeAreaView, ScrollView,} from "react-native";
import { MainColor, SecondColor, Layouts} from '../../theme';
import styles from "./styles";
import HeartSvg from '../../assets/images/heart.svg';
import PrimarySmallBtn from "../../components/PrimarySmallBtn";
import ArrowLeft from "../../assets/images/arrow-left.svg";
import RecipeDetails from "../../components/RecipeDetails";

import {getRecipeById} from "../../services";

// @ts-ignore
const RecipeScreen : React.FC = ({ route, navigation }) => {

    const { id } = route.params;

    const [recipe, setRecipe] = useState<any>(null);

    const getRecipeData = () => {
      getRecipeById(id).then((res) => {
        if(res.data){
          setRecipe(res.data.data);
        }
      })
    }

    useEffect(() => {
      if(id){
        getRecipeData();
      }
    },[id])

    return (
        <SafeAreaView style={{ width: '100%', height:'100%',backgroundColor : SecondColor }}>
            <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
            <View style={[Layouts.spaceBetween, {paddingLeft: 8, paddingRight: 6, paddingTop : 15}]}>
                <PrimarySmallBtn icon={<ArrowLeft width={9} height={16}/>} bgColor={MainColor} onClick={()=>navigation.goBack()}/>
                <PrimarySmallBtn icon={<HeartSvg width={23} height={19}/>} bgColor={'#ffffff'}/>
            </View>

              {recipe && <RecipeDetails recipeDetails={recipe}/> }

            </ScrollView>
        </SafeAreaView>
    )
};

export default RecipeScreen;

import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { MainColor, SecondColor, Layouts } from "../../theme";
import styles from "./styles";
import HeartSvg from "../../assets/images/heart.svg";
import HeartFullSvg from "../../assets/images/heartfull.svg";
import PrimarySmallBtn from "../../components/PrimarySmallBtn";
import ArrowLeft from "../../assets/images/arrow-left.svg";
import RecipeDetails from "../../components/RecipeDetails";

import { getRecipeById, likeRecipeById, getIsRecipeIsLiked } from "../../services";
import { useSelector } from "react-redux";

// @ts-ignore
const RecipeScreen: React.FC = ({ route, navigation }) => {

  const { id } = route.params;

  const [recipe, setRecipe] = useState<any>(null);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const { isAuthenticated } = useSelector(
    (state: any) => state.authReducer
  );

  const getRecipeData = () => {
    getRecipeById(id).then((res) => {
      if (res.data) {
        setRecipe(res.data.data);
        if (isAuthenticated) {
          isRecipeLiked();
        }
      }
    });
  };

  useEffect(() => {
    if (id) {
      getRecipeData();
    }
  }, [id]);

  const isRecipeLiked = () => {
    getIsRecipeIsLiked(id).then((res) => {
      if (res.data) {
        setIsLiked(res.data.liked);
      }
    });
  };

  const likeRecipe = () => {
    if (isAuthenticated) {
      likeRecipeById(id).then((res) => {
        if (res.data) {
          isRecipeLiked();
        }
      });
    } else {
      return navigation.navigate("Login");
    }
  };

  return (
    <SafeAreaView style={{ width: "100%", height: "100%", backgroundColor: SecondColor }}>
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
        <View style={[Layouts.spaceBetween, { paddingLeft: 8, paddingRight: 6, paddingTop: 15 }]}>
          <PrimarySmallBtn icon={<ArrowLeft width={9} height={16} />} bgColor={MainColor} onClick={() => navigation.goBack()} />
          {isLiked && <PrimarySmallBtn onClick={() => likeRecipe()} icon={<HeartSvg width={23} height={19} />}
                                       bgColor={"#ffffff"} />}
          {!isLiked && <PrimarySmallBtn onClick={() => likeRecipe()} icon={<HeartFullSvg width={23} height={19} />}
                                        bgColor={"#ffffff"} />}
        </View>

        {recipe && <RecipeDetails isRecipePreview={false} recipeDetails={recipe} />}

      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipeScreen;

import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Alert, Text, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Pressable, SafeAreaView, Image, TextInput, FlatList, Dimensions } from "react-native";
import { Layouts, MainColor } from "../../../theme";
import PrimarySmallBtn from "../../../components/PrimarySmallBtn";
import ArrowDown from "./assets/images/arrow-down.svg";
import ClockSvg from "./assets/images/time.svg";
import ArrowRight from "../../../assets/images/arrow-right.svg";
import styles from "./styles";
import SearchInput from "../../../components/SearchInput";

import { getAllIngredients } from "../../../services";
import { IngredientType } from "../../../types";
import Ingredient from "./components/Ingredient";

import * as ImagePicker from "react-native-image-picker";
import { imagePickerOptions } from "../../../config";
import { chunk } from "lodash";
import { checkIfInputIsEmpty } from "../../../util/util";
import { setRecipeStep1, setCurrentStep } from "../../../store/modules/addRecipe.reducer";
import { useDispatch, useSelector } from "react-redux";
import LoaderOverlay from "../../../components/LoaderOverlay";

const AddRecipeStep1: React.FC = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { currentStep } = useSelector(
    (state: any) => state.addRecipeReducer
  )

  const [focused, setFocus] = useState("#cacaca");

  const [loading, setLoading] = useState<boolean>(false);
  const [ingredients, setIngredients] = useState<Array<IngredientType>>([]);
  const [searchIngredients, setSearchIngredients] = useState<Array<IngredientType>>([]);
  const [listIngredients, setListIngredients] = useState<any>([]);

  const checkAddRecipeStep = () => {
    if (currentStep) {
      if (currentStep === 2) {
        return navigation.navigate("AddRecipeStep2");
      } else if (currentStep === 3) {
        return navigation.navigate("AddRecipePreview");
      }
    }
  }

  useEffect(() => {
    checkAddRecipeStep();
  }, [currentStep])

  const getIngredients = () => {
    getAllIngredients().then((res) => {
      if (res && res.data) {
        setIngredients(res.data.data);
        setSearchIngredients(res.data.data);
      }
    });
  };

  useEffect(() => {
    setListIngredients(chunk(searchIngredients, 6));
  }, [searchIngredients]);

  useEffect(() => {
    return navigation.addListener('focus', () => {
      getIngredients();
    });
  }, [navigation]);

  const ingredientSearch = (searchedValue: string) => {
    const formattedQuery = searchedValue.toLowerCase();
    const data = ingredients.filter((ingredient) => {
      return ingredient.name.toLowerCase().includes(formattedQuery);
    });
    setSearchIngredients(data);
  };

  //daga for step1
  const [title, setTitle] = useState<string>('');
  const [selectedIngredients, setSelectedIngredients] = useState<Array<number>>([]);
  const [recipeImage, setRecipeImage] = useState<any>(null);
  const [preparationTime, setPreparationTime] = useState<string>('');

  //errors
  const [titleError, setTitleError] = useState<boolean>(false);
  const [selectedIngredientsError, setSelectedIngredientsError] = useState<boolean>(false);
  const [recipeImageError, setRecipeImageError] = useState<boolean>(false);
  const [preparationTimeError, setPreparationTimeError] = useState<boolean>(false);

  const selectIngredient = (ingredientId: number) => {
    setSelectedIngredients(selectedIngredients.concat([ingredientId]));
  };

  const unselectIngredient = (ingredientId: number) => {
    setSelectedIngredients(selectedIngredients.filter((el) => {
      return el != ingredientId;
    }));
  };

  const checkIfIngredientIsSelected = (ingredientId: number) => {
    return selectedIngredients.includes(ingredientId);
  };

  const selectImage = async () => {
    // @ts-ignore
    ImagePicker.launchImageLibrary(imagePickerOptions, (response) => {
      if (response.didCancel) {
        console.log("cancel");
      } else if (response.errorCode) {
        console.log("error");
      } else if (response.assets) {
        setRecipeImage(response.assets[0]);
      }
    });
  };

  const nextStep = () => {
    setLoading(true);
    if (checkIfInputIsEmpty(title) || checkIfInputIsEmpty(selectedIngredients) || checkIfInputIsEmpty(recipeImage) || checkIfInputIsEmpty(preparationTime)) {
      setTitleError(checkIfInputIsEmpty(title))
      setSelectedIngredientsError(checkIfInputIsEmpty(selectedIngredients))
      setRecipeImageError(checkIfInputIsEmpty(recipeImage))
      setPreparationTimeError(checkIfInputIsEmpty(preparationTime));
      setLoading(false);
    } else {
      const stepData = {
        title,
        selectedIngredients,
        recipeImage,
        preparationTime
      };

      dispatch(setRecipeStep1({ step1: JSON.stringify(stepData) }));
      dispatch(setCurrentStep({ step: 2 }));
      setLoading(false);
      return navigation.navigate("AddRecipeStep2");
    }
  }

  useEffect(() => {
    let error_fileds = [];
    if (titleError) error_fileds.push('title');
    if (selectedIngredientsError) error_fileds.push('title');
    if (recipeImageError) error_fileds.push('image');
    if (preparationTimeError) error_fileds.push('preparation time');
    if (error_fileds.length > 0) {
      Alert.alert(`The ${error_fileds.join(',')} fields are not complete`);
    }
  }, [titleError, selectedIngredientsError, recipeImageError, preparationTimeError])

  return (
    <SafeAreaView style={{ width: "100%", height: "100%", flex: 1 }}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
        <View style={[Layouts.spaceBetween, { paddingLeft: 20, paddingRight: 20, paddingTop: 15 }]}>
          <View style={{ width: 38.7, height: 38.7 }} />
          <Text style={styles.title}>Please, share{"\n"} with us your{"\n"} best recipe 🤗</Text>
          <PrimarySmallBtn onClick={() => nextStep()} icon={<ArrowRight width={11} height={18} />} bgColor={MainColor} />
        </View>
        <Text style={styles.description}>Set name, import photo of your dish,{"\n"} and check ingredients</Text>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <ArrowDown width={25} height={25} />

            <View style={styles.addRecipeBox}>
              <View style={styles.recipeFooter}>
                <Pressable style={styles.addRecipeImage} onPress={() => selectImage()}>
                  {!recipeImage && <Image style={{ marginLeft: 15, marginTop: -10 }} source={require("./assets/images/add.png")} />}
                  {recipeImage && <Image style={{ width: 139, height: 103, borderRadius: 25 }} source={{ uri: recipeImage.uri }} />}
                </Pressable>
                <View style={styles.userInfo}>
                  <TextInput
                    placeholder={"Your dish name"}
                    multiline
                    maxLength={40}
                    onChangeText={text => setTitle(text)}
                    value={title}
                    style={[styles.name, { borderBottomColor: 'red', color: focused }]}
                    onFocus={() => setFocus("#000000")}
                  />
                  <View style={styles.timeBlock}>
                    <View style={styles.preparationTime}>
                      <ClockSvg width={18} height={18} />
                      <TextInput value={preparationTime} keyboardType='numeric' onChangeText={(text) => setPreparationTime(text)} style={{ marginLeft: 6 }} placeholder={"0 min"} />
                    </View>
                  </View>
                </View>

              </View>
              <Text style={[styles.description, { marginBottom: 30 }]}>Which ingredients did you use?</Text>
              <SearchInput onSearch={ingredientSearch} />
              <FlatList
                data={listIngredients}
                horizontal={true}
                renderItem={({ item, index }) => (
                  <View key={index} style={{
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    width: Dimensions.get("screen").width - 65
                  }}>
                    {
                      item.map((ingredient: IngredientType, j: number) => {
                        return (
                          <Ingredient
                            key={j}
                            onSelect={selectIngredient}
                            unSelect={unselectIngredient}
                            ingredient={ingredient}
                            selected={checkIfIngredientIsSelected(ingredient.id)} />
                        );
                      })
                    }
                  </View>
                )}
                keyExtractor={item => String(Math.random())}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>

      </KeyboardAvoidingView>
      <LoaderOverlay loading={loading} />
    </SafeAreaView>
  );
};

export default AddRecipeStep1;

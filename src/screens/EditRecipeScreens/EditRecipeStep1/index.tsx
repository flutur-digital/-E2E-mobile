import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Alert, Text, Pressable, SafeAreaView, Image, TextInput, FlatList, Dimensions } from "react-native";
import { Layouts, MainColor } from "../../../theme";
import PrimarySmallBtn from "../../../components/PrimarySmallBtn";
import ArrowDown from "./assets/images/arrow-down.svg"
import ClockSvg from "./assets/images/time.svg";
import ArrowRight from "../../../assets/images/arrow-right.svg";
import styles from "./styles";
import SearchInput from "../../../components/SearchInput";

import { getAllIngredients } from "../../../services";
import { IngredientType } from "../../../types";
import Ingredient from "./components/Ingredient";

import * as ImagePicker from "react-native-image-picker";
import {imagePickerOptions} from "../../../config";
import { chunk } from "lodash";
import {checkIfInputIsEmpty} from "../../../util/util";
import {setRecipeStep1, setCurrentStep} from "../../../store/modules/editRecipe.reducer";
import { useDispatch, useSelector } from "react-redux";
import {getRecipeById} from "../../../services";
import LoaderOverlay from "../../../components/LoaderOverlay";
import ArrowLeft from "../../../assets/images/arrow-left-gray.svg";
import SegmentedPicker from "react-native-segmented-picker";

//@ts-ignore
const EditRecipeStep1: React.FC = ({ route, navigation }) => {

  const { recipeId } = route.params;
  const dispatch = useDispatch();

  // console.log(recipeId)

  const [recipeForEdit, setRecipeForEdit] = useState<any>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [ingredients, setIngredients] = useState<Array<IngredientType>>([]);
  const [searchIngredients, setSearchIngredients] = useState<Array<IngredientType>>([]);
  const [listIngredients, setListIngredients] = useState<any>([]);

  const initializeData = (recipedata: any) => {
    setTitle(recipedata?.name ?? '');
    setPreparationTime(String(recipedata?.prepare_time) ?? '');
    setSelectedIngredients(recipedata?.ingredients.map((item: { id: any; }) => item.id));
    setRecipeImagePreview(recipedata?.image);
  }

  const getRecipeData = (recipeId: number) => {
    // setLoading(true);
    getRecipeById(recipeId).then((res) => {
      // setLoading(false);
      if(res.data && res.data.data){
        setLoading(false);
        setRecipeForEdit(res.data.data);
        initializeData(res.data.data);
      }
    })
  }

  useEffect(() => {
    if(recipeId){
      getRecipeData(recipeId);
    }
  },[recipeId])

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
  },[navigation]);

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
  const [recipeImagePreview, setRecipeImagePreview] = useState<any>(null);
  const [preparationTime, setPreparationTime] = useState<string>('');

  //errors
  const [titleError, setTitleError] = useState<boolean>(false);
  const [selectedIngredientsError, setSelectedIngredientsError] = useState<boolean>(false);
  const [recipeImageError, setRecipeImageError] = useState<boolean>(false);
  const [preparationTimeError, setPreparationTimeError] = useState<boolean>(false);

  const [preparationTimeSelect, setPreparationTimeSelect] = useState<boolean>(false);

  const confirmPreparationTime = (selections: any) => {
    setPreparationTimeError(false);
    setPreparationTime(selections["col_1"])
    setPreparationTimeSelect(false);
  }

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
    if(checkIfInputIsEmpty(title) || checkIfInputIsEmpty(selectedIngredients) || checkIfInputIsEmpty(preparationTime)){
      setTitleError(checkIfInputIsEmpty(title))
      setSelectedIngredientsError(checkIfInputIsEmpty(selectedIngredients))
      setPreparationTimeError(checkIfInputIsEmpty(preparationTime));
      setLoading(false);
    } else {
      const stepData = {
        recipeId,
        recipeImagePreview,
        title,
        selectedIngredients,
        recipeImage,
        preparationTime
      };

      dispatch(setRecipeStep1({step1: JSON.stringify(stepData)}));
      setLoading(false);
      return navigation.navigate("EditRecipeStep2",{recipeForEdit: recipeForEdit});
    }
  }

  useEffect(() => {
    let error_fileds = [];
    if(titleError) error_fileds.push('title');
    if(selectedIngredientsError) error_fileds.push('title');
    if(preparationTimeError) error_fileds.push('preparation time');
    if(error_fileds.length > 0){
      Alert.alert(`The ${error_fileds.join(',')} fields are not complete`);
    }
  },[titleError,selectedIngredientsError,recipeImageError,preparationTimeError])

  return (
    <SafeAreaView style={{ width: "100%", height: "100%", flex: 1 }}>
      <View style={[Layouts.spaceBetween, { paddingLeft: 20, paddingRight: 20, paddingTop: 15 }]}>
        <PrimarySmallBtn onClick={() => navigation.goBack()} icon={<ArrowLeft width={11} height={18}/>} bgColor={'#fff'}/>
        <Text style={styles.title}>Edit your{"\n"} recipe very{"\n"} quickly ????</Text>
        <PrimarySmallBtn onClick={() => nextStep()} icon={<ArrowRight width={11} height={18} />} bgColor={MainColor} />
      </View>
      <Text style={styles.description}>Edit name, import photo of your dish,{"\n"} and check ingredients</Text>
      <View style={styles.container}>
        <ArrowDown width={25} height={25} />
        <View style={styles.addRecipeBox}>
          <View style={styles.recipeFooter}>
            <Pressable style={styles.addRecipeImage} onPress={() => selectImage()}>
              {(!recipeImage && !recipeImagePreview) && <Image style={{ marginLeft: 15, marginTop: -10 }} source={require("./assets/images/add.png")} />}
              {(!recipeImage && recipeImagePreview) && <Image style={{ width : 139, height : 103, borderRadius : 25 }} source={{uri: recipeImagePreview}} />}
              {recipeImage && <Image style={{ width : 139, height : 103, borderRadius : 25 }} source={{ uri: recipeImage.uri }} />}
            </Pressable>
            <View style={styles.userInfo}>
              <TextInput
                placeholder={"Your dish name"}
                multiline
                autoCorrect={false}
                maxLength={40}
                onChangeText={text => setTitle(text)}
                value={title}
                style={[styles.name, {  color: '#000000' }]}
              />
              <View style={styles.timeBlock}>
                <Pressable onPress={() => setPreparationTimeSelect(true)} style={styles.preparationTime}>
                  <ClockSvg width={18} height={18} />
                  <Text style={{ marginLeft: 6 }}>{preparationTime} min</Text>
                </Pressable>
                <SegmentedPicker
                  visible={preparationTimeSelect}
                  onConfirm={confirmPreparationTime}
                  options={[
                    {
                      key: 'col_1',
                      items: [
                        { label: '1 min', value: '1' },
                        { label: '2 min', value: '2' },
                        { label: '3 min', value: '3' },
                        { label: '4 min', value: '4' },
                        { label: '5 min', value: '5' },
                        { label: '10 min', value: '10' },
                        { label: '15 min', value: '15' },
                        { label: '20 min', value: '20' },
                        { label: '25 min', value: '25' },
                        { label: '30 min', value: '30' },
                        { label: '35 min', value: '35' },
                        { label: '40 min', value: '40' },
                        { label: '45 min', value: '45' },
                        { label: '50 min', value: '50' },
                        { label: '55 min', value: '55' },
                        { label: '60 min', value: '60' },
                        { label: '65 min', value: '65' },
                        { label: '70 min', value: '70' },
                        { label: '75 min', value: '75' },
                        { label: '80 min', value: '80' },
                        { label: '85 min', value: '85' },
                        { label: '90 min', value: '90' },
                        { label: '95 min', value: '95' },
                        { label: '100 min', value: '100' },
                      ],
                    },
                  ]}
                />
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
      <LoaderOverlay loading={loading}/>
    </SafeAreaView>
  );
};

export default EditRecipeStep1;

import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, Pressable, SafeAreaView, Image, TextInput, FlatList, ScrollView, Dimensions } from "react-native";
import { Layouts, MainColor, Typography } from "../../../theme";
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
import { chunk } from "lodash";

const imagePickerOptions = {
  title: "Select Image",
  type: "photo",
  base64: true,
  allowsEditing: true,
  aspect: [4, 3],
  quality: 1
};

const AddRecipeStep1: React.FC = () => {

  const [focused, setFocus] = useState("#cacaca");
  const [value, onChangeText] = useState("");
  const [search, onSearch] = useState("");

  const [ingredients, setIngredients] = useState<Array<IngredientType>>([]);
  const [searchIngredients, setSearchIngredients] = useState<Array<IngredientType>>([]);
  const [listIngredients, setListIngredients] = useState<any>([]);

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

  // console.log(listIngredients)

  useEffect(() => {
    getIngredients();
  }, []);

  const ingredientSearch = (searchedValue: string) => {
    const formattedQuery = searchedValue.toLowerCase();
    const data = ingredients.filter((ingredient) => {
      return ingredient.name.toLowerCase().includes(formattedQuery);
    });
    setSearchIngredients(data);
  };

  //daga for step1
  const [selectedIngredients, setSelectedIngredients] = useState<Array<number>>([]);
  const [recipeImage, setRecipeImage] = useState<any>(null);

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

  const navigation = useNavigation();


  const onButtonPress = async () => {
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


  return (
    <SafeAreaView style={{ width: "100%", height: "100%", flex: 1 }}>
      <View style={[Layouts.spaceBetween, { paddingLeft: 20, paddingRight: 20, paddingTop: 15 }]}>
        <View style={{ width: 38.7, height: 38.7 }} />
        <Text style={styles.title}>Please, share{"\n"} with us your{"\n"} best recipe 🤗</Text>
        <PrimarySmallBtn onClick={() => navigation.navigate("AddRecipeStep2")}
                         icon={<ArrowRight width={11} height={18} />} bgColor={MainColor} />
      </View>
      <Text style={styles.description}>Set name, import photo of your dish,{"\n"} and check ingredients</Text>
      <View style={styles.container}>
        <ArrowDown width={25} height={25} />
        <View style={styles.addRecipeBox}>
          <View style={styles.recipeFooter}>
            <Pressable style={styles.addRecipeImage} onPress={() => onButtonPress()}>
              {!recipeImage && <Image style={{ marginLeft: 41 }} source={require("./assets/images/add.png")} />}
              {recipeImage && <Image style={{ marginLeft: 41 }} source={{ uri: recipeImage.uri }} />}
            </Pressable>
            <View style={styles.userInfo}>
              <TextInput
                placeholder={"Your dish name"}
                multiline
                maxLength={40}
                onChangeText={text => onChangeText(text)}
                value={value}
                style={[styles.name, { color: focused }]}
                onFocus={() => setFocus("#000000")}
              />
              <View style={styles.timeBlock}>

                <View style={styles.preparationTime}>
                  <ClockSvg width={18} height={18} />
                  <TextInput style={{ marginLeft: 6 }} placeholder={"0 min"} />
                </View>

              </View>
            </View>

          </View>
          <Text style={[styles.description, { marginBottom: 30 }]}>
            Which ingredients did you use?
          </Text>
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

    </SafeAreaView>
  );
};

export default AddRecipeStep1;

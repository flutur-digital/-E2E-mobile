import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import SearchInput from "../../components/SearchInput";
import IngredientItem from "./components/IngredientItem";
import {Typography} from "../../theme";
import styles from "./styles";
import {IngredientType} from "../../types";
import RecipeResultsCounter from "./components/RecipeResultsCounter";
import {getAllIngredients, searchRecipes} from "../../services";

import { hapticOptions } from "../../config";

const Search : React.FC = () => {

    const navigation = useNavigation();
    const [ingredients, setIngredients] = useState<Array<IngredientType>>([]);
    const [searchIngredients, setSearchIngredients] = useState<Array<IngredientType>>([]);
    const [selectedIngredients, setSelectedIngredients] = useState<Array<number>>([]);

    const [searchResults, setSearchResults] = useState<null | Array<any>>(null);

    const getIngredients = () => {
      getAllIngredients().then((res) => {
        if(res && res.data){
          setIngredients(res.data.data);
          setSearchIngredients(res.data.data);
        }
      })
    }
    useEffect(() => {
      getIngredients();
    },[]);

    const ingredientSearch = (searchedValue: string) => {
      const formattedQuery = searchedValue.toLowerCase()
      const data = ingredients.filter((ingredient) => {
        return ingredient.name.toLowerCase().includes(formattedQuery);
      });
      setSearchIngredients(data);
    }

    const selectIngredient = (ingredientId: number) => {
      setSelectedIngredients(selectedIngredients.concat([ingredientId]));
      ReactNativeHapticFeedback.trigger("impactLight", hapticOptions);
    }

    const unselectIngredient = (ingredientId: number) => {
      setSelectedIngredients(selectedIngredients.filter((el) => { return el != ingredientId }));
      ReactNativeHapticFeedback.trigger("impactLight", hapticOptions);
    }

    const checkIfIngredientIsSelected = (ingredientId: number) => {
      return selectedIngredients.includes(ingredientId);
    }

    useEffect(() => {
      if(selectedIngredients.length > 0) {
        searchRecipes(selectedIngredients).then((res) => {
          if(res.data){
            setSearchResults(res.data.data);
          }
        })
      } else {
        setSearchResults(null);
      }
    },[selectedIngredients]);

    useEffect(() => {
      if(searchResults && searchResults.length > 0) {
        ReactNativeHapticFeedback.trigger("impactLight", hapticOptions);
      }
    },[searchResults])

    return (

          <View style={styles.mainContainer}>
            <View style={styles.searchContainer}>
                  <Text style={Typography.title}>Please choose{"\n"} ingredients you have</Text>
                  <SearchInput onSearch={ingredientSearch}/>
            </View>
            <FlatList
                style={{ paddingTop: 27, paddingLeft: 22, paddingRight: 22 }}
                data={searchIngredients}
                renderItem={({ item, index }) => (
                    <IngredientItem
                        onSelect={selectIngredient}
                        unSelect={unselectIngredient}
                        ingredient={item}
                        selected={checkIfIngredientIsSelected(item.id)}
                    />
                )}
                keyExtractor={item => String(item.id)}
            />

            {searchResults && searchResults.length > 0 && <RecipeResultsCounter onClick={()=> navigation.navigate('SearchResults', {searchResults: searchResults})} recipesFound={searchResults.length}/> }
          </View>

    )
}

export default Search;

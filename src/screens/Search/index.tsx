import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import { View, Text, Pressable, SafeAreaView, FlatList } from "react-native";
import SearchInput from "../../components/SearchInput";
import IngredientItem from "./components/IngredientItem";
import {Typography} from "../../theme";
import styles from "./styles";
import {IngredientType} from "../../types";

import {getAllIngredients} from "../../services";

const Search : React.FC = () => {

    const navigation = useNavigation();
    const [ingredients, setIngredients] = useState<Array<IngredientType>>([]);
    const [searchIngredients, setSearchIngredients] = useState<Array<IngredientType>>([]);

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

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.searchContainer}>
              <Text style={Typography.title}>Please choose ingredients you have</Text>
              <SearchInput onSearch={ingredientSearch}/>
              <FlatList
                style={{ marginTop: 27 }}
                data={searchIngredients}
                renderItem={({ item }) => (
                  <IngredientItem
                    ingredient={item}
                  />
                )}
                keyExtractor={item => String(item.id)}
              />
            </View>
        </SafeAreaView>
    )
}

export default Search;

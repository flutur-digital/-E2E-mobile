import React, { useEffect } from "react";
import { View, Text, Pressable, SafeAreaView, FlatList, ScrollView, Image } from "react-native";
import { Typography, MainColor, SecondColor, Layouts } from "../../theme";
import styles from "./styles";
import Recipe from "../../components/Recipe";

import PrimarySmallBtn from "../../components/PrimarySmallBtn";
import ArrowLeft from "../../assets/images/arrow-left.svg";
import { useSelector } from "react-redux";


// @ts-ignore
const SearchResults: React.FC = ({ route, navigation }) => {

  const { searchResults } = route.params;

  const {isAuthenticated} = useSelector(
    (state: any) => state.authReducer
  );

  return (
    <SafeAreaView style={{ width: "100%", height: "100%", backgroundColor: SecondColor }}>
      <View style={[Layouts.spaceBetween, { paddingTop: 15 }]}>
        <PrimarySmallBtn icon={<ArrowLeft width={9} height={16} />} bgColor={MainColor} onClick={() => navigation.goBack()} />
        <Pressable onPress={() => isAuthenticated ? navigation.navigate('Stack3') : navigation.navigate('Login')}><Image source={require("../../assets/images/logoBtn.png")} style={{ width: 60, height: 60 }} /></Pressable>
      </View>
      <View style={styles.container}>
        <Text allowFontScaling={false} adjustsFontSizeToFit numberOfLines={2} style={Typography.title}>Look! We have{"\n"} {searchResults.length} dishes for you 😊</Text>
        {
          searchResults &&
            <FlatList
              style={styles.listContainer}
              data={searchResults}
              renderItem={({ item, index }) => (
                <Recipe
                  key={index}
                  id={item.id}
                  title={item.name}
                  image={item.image}
                  time={`${item.prepare_time} min`}
                />
              )}
              keyExtractor={item => String(item.id)}
            />
        }
      </View>
    </SafeAreaView>
  );
};

export default SearchResults;

import React, { useEffect } from "react";
import {View,Text, Pressable, SafeAreaView, StyleSheet, ScrollView, Image} from "react-native";
import {Typography, MainColor, SecondColor, Layouts} from '../../theme';
import styles from "./styles";
import Recipe from "../../components/Recipe";

import PrimarySmallBtn from "../../components/PrimarySmallBtn";
import ArrowLeft from "../../assets/images/arrow-left.svg";


// @ts-ignore
const SearchResults : React.FC = ({ route, navigation }) => {

    const { searchResults } = route.params;

    return (
        <SafeAreaView style={{ width: '100%', height:'100%',backgroundColor : SecondColor }}>
            <View style={[Layouts.spaceBetween, {paddingTop : 15}]}>
                <PrimarySmallBtn icon={<ArrowLeft width={9} height={16}/>} bgColor={MainColor} onClick={()=>navigation.goBack()}/>
                <Image source={require('../../assets/images/logoBtn.png')} style={{width : 60, height : 60}}/>
            </View>
            <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
                <Text allowFontScaling={false} adjustsFontSizeToFit numberOfLines={2} style={Typography.title}>
                    Look! We have{"\n"} {searchResults.length} dishes for you 😊
                </Text>
                {
                  searchResults.map((recipe: any, index: number) => {
                    return (
                      <Recipe
                        key={index}
                        id={recipe.id}
                        title={recipe.name}
                        image={recipe.image}
                        time={`${recipe.prepare_time} min`}
                      />
                    )
                  })
                }
            </ScrollView>
        </SafeAreaView>
    )
};

export default SearchResults;

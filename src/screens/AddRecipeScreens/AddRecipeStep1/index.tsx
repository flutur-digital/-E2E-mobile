import { useNavigation } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, SafeAreaView, Image, TextInput, FlatList, ScrollView} from "react-native";
import {Layouts, MainColor, Typography} from "../../../theme";
import PrimarySmallBtn from "../../../components/PrimarySmallBtn";
import ArrowLeft from "../../../assets/images/arrow-left.svg";
import HeartSvg from "../../../assets/images/heart.svg";
import ArrowDown from './assets/images/arrow-down.svg';
import ClockSvg from './assets/images/time.svg';
import ArrowRight from '../../../assets/images/arrow-right.svg';
import styles from "./styles";
import SearchInput from "../../../components/SearchInput";

import {getAllIngredients} from "../../../services";
import {IngredientType} from "../../../types";
import IngredientItem from "../../Search/components/IngredientItem";
import Ingredient from "./Ingredient";
import {matrixTransform} from "react-native-svg/lib/typescript/elements/Shape";

const AddRecipeStep1 : React.FC = () => {

    const [focused, setFocus] = useState('#cacaca');
    const [value, onChangeText] = useState('');
    const [search, onSearch] = useState('');

    const [ingredients, setIngredients] = useState<Array<IngredientType>>([]);
    const [searchIngredients, setSearchIngredients] = useState<Array<IngredientType>>([]);

    const getIngredients = () => {
        getAllIngredients().then((res) => {
            if(res && res.data){
                setIngredients(res.data.data);
                setSearchIngredients(res.data.data);
            }
        })
    };


    useEffect(() => {
        getIngredients();
    },[]);

    const ingredientSearch = (searchedValue: string) => {
        const formattedQuery = searchedValue.toLowerCase();
        const data = ingredients.filter((ingredient) => {
            return ingredient.name.toLowerCase().includes(formattedQuery);
        });
        setSearchIngredients(data);
    };

    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ width: '100%', height:'100%', flex : 1 }}>
            <View style={[Layouts.spaceBetween, {paddingLeft: 20, paddingRight: 20, paddingTop : 15}]}>
                <View style={{width : 38.7, height : 38.7}}>
                </View>
                <Text style={styles.title}>
                    Please, share{"\n"} with us your{"\n"} best recipe 🤗
                </Text>
                <PrimarySmallBtn onClick={()=> navigation.navigate('AddRecipeStep2')} icon={<ArrowRight width={11} height={18}/>} bgColor={MainColor}/>
            </View>
            <Text style={styles.description}>
                Set name, import photo of your dish,{"\n"} and check ingredients
            </Text>
            <View style={styles.container}>
                <ArrowDown width={25} height={25}/>
                <View style={styles.addRecipeBox}>
                    <View style={styles.recipeFooter}>
                        <Pressable style={styles.addRecipeImage}>
                            <Image style={{marginLeft : 41}} source={require('./assets/images/add.png')}/>
                        </Pressable>
                        <View style={styles.userInfo}>
                            <TextInput
                                placeholder={"Your dish name"}
                                multiline
                                maxLength={40}
                                onChangeText={text => onChangeText(text)}
                                value={value}
                                style={[styles.name, {color: focused}]}
                                onFocus={()=> setFocus('#000000')}
                            />
                            <View style={styles.timeBlock}>

                                <View style={styles.preparationTime}>
                                    <ClockSvg width={18} height={18}/>
                                    <TextInput style={{marginLeft : 6}} placeholder={"0 min"}/>
                                </View>

                            </View>
                        </View>

                    </View>
                    <Text style={[styles.description, {marginBottom: 30}]}>
                        Which ingredients did you use?
                    </Text>
                    <SearchInput onSearch={ingredientSearch}/>
                    <ScrollView horizontal={true} style={{height : 205,display : 'flex', width : '100%', flexWrap : 'nowrap', flexDirection : 'row'}}>
                        <FlatList
                            columnWrapperStyle={{ flexWrap: 'nowrap', flex: 1 }}
                            data={searchIngredients}
                            horizontal={false}
                            numColumns={3}
                            renderItem={({ item, index }) => (
                                <Ingredient
                                    ingredient={item}
                                />

                            )}
                            keyExtractor={item => String(item.id)}
                        />
                    </ScrollView>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default AddRecipeStep1;

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Pressable } from "react-native";

const AddRecipeStep1 : React.FC = () => {

    const navigation = useNavigation();
    return (
        <View style={{ width: '100%', height:'100%' }}>
          <Text>Add recipe step 1</Text>

        </View>
    )
}

export default AddRecipeStep1;

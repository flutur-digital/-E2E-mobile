import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Pressable } from "react-native";

const AddRecipeStep2 : React.FC = () => {

    const navigation = useNavigation();
    return (
        <View style={{ width: '100%', height:'100%' }}>
          <Text>Add recipe step 2</Text>

        </View>
    )
}

export default AddRecipeStep2;

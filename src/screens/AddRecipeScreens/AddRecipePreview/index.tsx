import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Pressable } from "react-native";

const AddRecipePreview : React.FC = () => {

    const navigation = useNavigation();
    return (
        <View style={{ width: '100%', height:'100%' }}>
          <Text>Add recipe preview</Text>

        </View>
    )
}

export default AddRecipePreview;

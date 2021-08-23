import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import styles from './styles';

const RecipeDeleteHiddenRow : React.FC = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.rowContent}>
            <Image source={require('./edit_delite.png')} style={{ resizeMode: 'stretch', height: 150, width: 80 }}/>
        </View>
    )
}

export default RecipeDeleteHiddenRow;

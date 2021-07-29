import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const Test : React.FC = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Text style={styles.btnBox}>Get Started</Text>
            <Pressable onPress={() => navigation.navigate('Login')}><Text>Go to login</Text></Pressable>
        </View>
    )
}

export default Test;
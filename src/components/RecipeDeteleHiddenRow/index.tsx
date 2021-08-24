import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import styles from './styles';
import EditDeleteBgIcon from './assets/images/editdeletebg.svg';

const RecipeDeleteHiddenRow : React.FC = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.rowContent}>
          <Image source={require('./assets/images/editdeletebg.png')} style={{ resizeMode: 'stretch', height: 150, width: 80 }}/>
          <Pressable style={styles.editBtn}><Text style={styles.editBtnText}>Edit</Text></Pressable>
          <Pressable style={styles.deleteBtn}><Text style={styles.deleteBtnText}>Delete</Text></Pressable>
        </View>
    )
}

export default RecipeDeleteHiddenRow;

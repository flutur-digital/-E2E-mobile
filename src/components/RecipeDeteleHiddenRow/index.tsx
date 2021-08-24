import React, { useEffect,useRef } from "react";
import { Text, Pressable, Image, Animated } from 'react-native';
import styles from './styles';

interface Props{
  onEdit: () => void;
  onDelete: () => void;
  keyId: number,
  selectedKeyId: number
}

const RecipeDeleteHiddenRow : React.FC<Props> = ({onEdit,onDelete,keyId,selectedKeyId}) => {

  useEffect(() => {
    if(selectedKeyId === keyId){
      fadeIn();
    } else {
      fadeOut();
    }
  },[selectedKeyId])

  const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true
      }).start();
    };

    const fadeOut = () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 700,
        useNativeDriver: true
      }).start();
    };

    return (
      <Animated.View
        style={[styles.rowContent,{
          opacity: selectedKeyId === keyId ? fadeAnim : 0
        }]}>
        <Image source={require('./assets/images/editdeletebg.png')}
               style={{ resizeMode: 'stretch', height: 150, width: 80 }} />
        <Pressable onPress={() => onEdit()} style={styles.editBtn}><Text
          style={styles.editBtnText}>Edit</Text></Pressable>
        <Pressable onPress={() => onDelete()} style={styles.deleteBtn}><Text
          style={styles.deleteBtnText}>Delete</Text></Pressable>
      </Animated.View>
    )
}

export default RecipeDeleteHiddenRow;

import { useNavigation } from '@react-navigation/native';
import React, {Component} from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import styles from './styles';
import ArrowLeft from '../../assets/images/arrow-left.svg';

interface PrimarySmallBtnProps {
    icon : any;
    bgColor : string;
}

const PrimarySmallBtn : React.FC<PrimarySmallBtnProps> = ({icon, bgColor}) => {

    const navigation = useNavigation();

    return (
        <Pressable style={[styles.PrimarySmallBtn,{backgroundColor: bgColor}]}>
            {icon}
        </Pressable>
    )
};

export default PrimarySmallBtn;

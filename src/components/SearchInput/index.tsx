import { useNavigation } from '@react-navigation/native';
import React, { useState } from "react";
import { View, Text, Pressable, TextInput } from 'react-native';
import styles from './styles';
import SearchIcon from './assets/searchicon.svg';

interface Props{
  onSearch: (value: string) => void,
  defaultValue?: string
}

const SearchInput : React.FC<Props> = ({onSearch, defaultValue}) => {

    const [searchValue, setSearchValue] = useState<string>(defaultValue || '')

    const onChangeText = (text: string) => {
      setSearchValue(text);
      onSearch(text);
    }

    return (
        <View style={styles.searchInputContainer}>
          <TextInput
            style={styles.inputBox}
            onChangeText={onChangeText}
            value={searchValue}
          />
          <SearchIcon style={styles.searchIcon}/>
        </View>
    )
}

export default SearchInput;

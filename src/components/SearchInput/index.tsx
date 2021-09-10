import React, { useState } from "react";
import { View, Text, Pressable, TextInput } from 'react-native';
import styles from './styles';
import SearchIcon from './assets/searchicon.svg';
import DeleteIcon from './assets/delete.svg';

interface Props{
  onSearch: (value: string) => void,
  defaultValue?: string
}

const SearchInput : React.FC<Props> = ({onSearch, defaultValue}) => {

    const [searchValue, setSearchValue] = useState<string>(defaultValue || '')

    const onChangeText = (text: string) => {
      setSearchValue(text);
      onSearch(text);
    };

    return (
        <View style={styles.searchInputContainer}>
          <SearchIcon style={styles.searchIcon}/>
          <TextInput
            style={styles.inputBox}
            onChangeText={onChangeText}
            value={searchValue}
            placeholder={'Search'}
          />
          {searchValue.length > 0 && <Pressable onPress={() => onChangeText('')} style={styles.deleteIcon}><DeleteIcon/></Pressable> }
        </View>
    )
}

export default SearchInput;

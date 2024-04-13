import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'; // You may need to install 'expo' package for this
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../constants/colors';

interface SearchBarProps {
    onSearch: () => void;
    onCheck: () => void;
  }
  
  const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onCheck }) => {
    const [searchText,setSearchText] = useState('');
    return (
      <View style={styles.container}>
          <Feather name="search" size={24} style={styles.iconContainer} color="white" />
        <TextInput
          placeholder="Find restaurants..."
          style={styles.input}
          value={searchText}
          placeholderTextColor={COLORS.lightGray}
          onChangeText={(text:string) =>setSearchText(text)}
        />
        <TouchableOpacity onPress={onCheck} style={[styles.iconContainer,{backgroundColor:COLORS.yellow}]}>
          <Ionicons name="options" size={24} color="white" />
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: COLORS.darkBlueGrey,
      borderRadius: 40,
    //   paddingHorizontal: 10,
    //   marginHorizontal: 10,
      marginTop: 10,
      width: '98%',
    },
    input: {
      flex: 1,
      paddingHorizontal: 10,
      color: COLORS.white,
      fontSize: 16,
      fontWeight: 'bold',
    },
    iconContainer: {
      padding: 12,
      borderRadius:50,
      backgroundColor:COLORS.TRANSPARENT,
    },
  });
  
  export default SearchBar;
import React from "react";
import {View, TextInput} from "react-native";
import SearchBarStyle from "./SearchBar.style";


function SearchBar({onSearch}: any){

  return(

    <View>
      <TextInput style={SearchBarStyle.input_container} placeholder="Ara ki bulasın..." onChangeText={onSearch} maxLength={35} />
    </View>


  );


}

export default SearchBar;

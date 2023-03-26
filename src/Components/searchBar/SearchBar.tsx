import React from "react";
import {View, TextInput, Text} from "react-native";
import SearchBarStyle from "./SearchBar.style";


function SearchBar({onSearch}: any){

  return(

    <View>

      <TextInput style={SearchBarStyle.input_container} placeholder="Ara ki bulasın..." onChangeText={onSearch} maxLength={35} />
      <View style={SearchBarStyle.newEpText_container}>
        <Text style={SearchBarStyle.newEpText}>Yeni bölümler</Text>
      </View>
    </View>


  );


}

export default SearchBar;

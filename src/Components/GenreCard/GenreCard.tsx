import * as React from 'react';
import {View, Text} from "react-native";
import GenreCardStyle from "./GenreCard.style";
// @ts-ignore
import AntDesing from 'react-native-vector-icons/AntDesign';

function GenreCard(){

  return(
  <View style={GenreCardStyle.container}>
    <AntDesing name='tagso' style={{color:'red', fontSize:22, width:25,height:25 }}/>
    <Text style={GenreCardStyle.Genre_Text}>GenreName</Text>
  </View>

  );
}

export default GenreCard;

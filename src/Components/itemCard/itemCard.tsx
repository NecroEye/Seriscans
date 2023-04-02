import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from '@react-navigation/native';
import itemCardStyle from "./itemCard.style";


function itemCard(props:any) {

  const navigation = useNavigation();


  return (


    <View style={itemCardStyle.outer_container}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('InfoPage')} >
        <View>
          <Image style={itemCardStyle.image_container} source={{uri: props.image}} />
          <Text style={itemCardStyle.Manga_text}>Manga Name: {props.name}</Text>

        </View>
      </TouchableWithoutFeedback>
    </View>


  );

}

export default itemCard;

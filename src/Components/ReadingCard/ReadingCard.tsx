import React from "react";
import { ScrollView, View, Image } from "react-native";
import ReadingCardStyle from "./ReadingCard.style";


function ReadingCard(props:any) {

  return (

    <ScrollView style={ReadingCardStyle.container}>
      <View >
        <Image style={ReadingCardStyle.image} source={{uri:props.image}} />
      </View>
    </ScrollView>


  );

}

export default ReadingCard;

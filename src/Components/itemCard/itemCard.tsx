import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import itemCardStyle from "./itemCard.style";


function itemCard({ manga }: any) {

  const navigation = useNavigation();


  return (


    <View style={itemCardStyle.outer_container}>
      <TouchableOpacity onPress={() => navigation.navigate('InfoPage')} >
        <View>
          <Image style={itemCardStyle.image_container} source={{uri: manga.imageUrl}} />
          <Text style={itemCardStyle.Manga_text}>Manga Name: {manga.artist}</Text>

        </View>
      </TouchableOpacity>
    </View>


  );

}

export default itemCard;

import * as React from 'react';
import {ScrollView,View,Text} from "react-native";
import EpisodeCardStyle from "./EpisodeCard.style";


function EpisodeCard(){

  return(

    <ScrollView style={EpisodeCardStyle.outer_container}>
      <View style={EpisodeCardStyle.inner_container}>
        <Text style={EpisodeCardStyle.text}>
          EpisodeName
        </Text>
      </View>
    </ScrollView>

  );


}


export default EpisodeCard;

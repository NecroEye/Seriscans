import React from 'react';
import {View, Text, Image} from 'react-native';

function Deneme(props:any){

  return(
    <View>
      <Image source={props.image} />
      <Text>{props.name == null ? 'boş' : 'boş değil'}</Text>
    </View>


  );


}

export default Deneme;

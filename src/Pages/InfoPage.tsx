import React from "react";
import {SafeAreaView, Text, Button} from "react-native";


function InfoPage({navigation}:any){

  return(

    <SafeAreaView>
      <Text>Info</Text>
      <Button title='Geri Dön' onPress={() => navigation.navigate('MainMenu')} />
    </SafeAreaView>

  );


}

export default InfoPage;

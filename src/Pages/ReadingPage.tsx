import React from "react";
import {SafeAreaView, FlatList} from "react-native";
import ReadingCard from "../Components/ReadingCard";
import musicData from '../music-data.json';


function ReadingPage(){

  return(

    <SafeAreaView>
     <FlatList data={musicData} renderItem={({item}) => <ReadingCard image={item.imageUrl}/>} />
    </SafeAreaView>

  );


}

export default ReadingPage;

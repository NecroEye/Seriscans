import React, { useState } from "react";
import { SafeAreaView, Text, FlatList, StyleSheet, View, Image } from "react-native";
import BannerCard from "../Components/BannerCard";
import ItemCard from "../Components/itemCard";
import musicData from "../music-data.json";
import SearchBar from "../Components/searchBar/SearchBar";



function MainMenu() {

  const [list, setList] = useState(musicData);
  const renderMangaList = (data: any) => <ItemCard manga={data.item} />;





  const HandleSearch = (text: any) => {

    const filteredList = musicData.filter(manga => {

      const searchedText = text.toLowerCase();
      const mangaName = manga.artist.toLowerCase();

      return mangaName.indexOf(searchedText) > -1;

    });
    setList(filteredList);
  };


  return (

    <SafeAreaView style={style.main_container}>

       <Image style={style.logo} source={require('../logo.png')} />
      <View style={style.Trend_container}>
        <Text style={style.TrendText}>Trendler</Text>
      </View>


      <BannerCard />
      <View style={{width:'100%', borderWidth:1}}/>
      <SearchBar onSearch={HandleSearch}/>
      <FlatList
        keyExtractor={(item) => item.id}
        data={list}
        renderItem={renderMangaList} />


    </SafeAreaView>

  );


}

const style = StyleSheet.create({

  main_container: { flex: 1, backgroundColor: "gainsboro", alignItems: "center" },
  logo: {height:50, width:300,backgroundColor:'black', borderRadius:7,margin:3},
  TrendText:{color:'white', fontWeight:'bold',fontSize:14,textAlign:'center'},
  Trend_container:{height:25,width:100,backgroundColor:'red',borderWidth:1,
    borderColor:'red', alignSelf:'flex-start', alignItems:'center',margin:3,
    borderBottomRightRadius:70, borderTopRightRadius:20, marginStart:20},
});

export default MainMenu;

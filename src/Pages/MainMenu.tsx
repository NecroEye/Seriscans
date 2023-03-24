import React, { useState } from "react";
import { SafeAreaView, Text, Button, FlatList, StyleSheet } from "react-native";
import ItemCard from "../Components/itemCard";
import musicData from "../music-data.json";
import SearchBar from "../Components/searchBar/SearchBar";


function MainMenu({ navigation }: any) {

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
      <Text>Main Page</Text>

      <FlatList

        ListHeaderComponent={<SearchBar onSearch={HandleSearch} />}
        keyExtractor={(item) => item.id}
        data={list}
        renderItem={renderMangaList} />


    </SafeAreaView>

  );


}

const style = StyleSheet.create({

  main_container: { flex: 1, backgroundColor: "gainsboro", alignItems: "center" }

});

export default MainMenu;

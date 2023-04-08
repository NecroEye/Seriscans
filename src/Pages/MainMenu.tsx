import React, { useState } from "react";
import { SafeAreaView, Text, FlatList, StyleSheet, View, Image } from "react-native";
import BannerCard from "../Components/BannerCard";
import ItemCard from "../Components/itemCard";
import musicData from "../music-data.json";
import SearchBar from "../Components/searchBar/SearchBar";
import Config from "react-native-config";
import useFetch from "../Hooks/UseFetch/useFetch";
import Loading from "../Components/Loading/Loading";
import Error from "../Components/Error/Error";


function MainMenu() {


  const [list, setList] = useState(musicData);
  const renderMangaList = ({ item }: any) => <ItemCard image={item.imageUrl} name={item.artist} />;


  const { loading, data, error } = useFetch(Config.API_URL);


  const HandleSearch = (text: any) => {

    const filteredList = musicData.filter(manga => {

      const searchedText = text.toLowerCase();
      const mangaName = manga.artist.toLowerCase();

      return mangaName.indexOf(searchedText) > -1;

    });
    setList(filteredList);
  };


  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }


  return (

    <SafeAreaView style={style.main_container}>


      <Image style={style.logo} source={require("../logo.png")} />

      <View style={style.Trend_container}>
        <Text style={style.TrendText}>Trendler</Text>
      </View>

      <BannerCard />
      <View style={{ width: "100%", borderWidth: 1 }} />
      <SearchBar onSearch={HandleSearch} />
      <FlatList
        data={list}
        renderItem={renderMangaList} />


    </SafeAreaView>

  );


}

const style = StyleSheet.create({

  main_container: { flex: 1, backgroundColor: "gainsboro", alignItems: "center" },
  logo: { height: 50, width: 300, backgroundColor: "black", borderRadius: 7, margin: 3, padding: 10, resizeMode:'stretch' },
  TrendText: { color: "white", fontWeight: "bold", fontSize: 14, textAlign: "center" },
  Trend_container: {
    height: 25, width: 100, backgroundColor: "red", borderWidth: 1,
    borderColor: "red", alignSelf: "flex-start", alignItems: "center", margin: 3,
    borderBottomRightRadius: 70, borderTopRightRadius: 20, marginStart: 20
  }
});

export default MainMenu;

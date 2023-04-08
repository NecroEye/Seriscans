import * as React from "react";
import { Image, ScrollView } from "react-native";
import bannerCardStyle from "./BannerCard.style";
import musicData from "../../music-data.json";


function BannerCard() {


  return (

    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {
        musicData.map(banners => (
          <Image style={bannerCardStyle.banner_container} source={{ uri: banners.imageUrl }} />))
      }
    </ScrollView>


  );


}

export default BannerCard;

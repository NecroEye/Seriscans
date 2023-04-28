import React from "react";
import { SafeAreaView, Text, View, ImageBackground, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import GenreCard from "../Components/GenreCard";
import EpisodeCard from "../Components/EpisodeCard";

const height = Dimensions.get("window").height;

function InfoPage({ route, navigation }:any ) {


 console.log(route.params);


  return (

    <SafeAreaView>
      <ScrollView >

        <ImageBackground style={{ padding: 10 * 2, height: height / 2.5}}
                         source={{uri: route.params.image}} resizeMode='stretch'>

          <TouchableOpacity style={{
            height: 10 * 4.5,
            width: 10 * 4.5,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10 * 2
          }} onPress={() => navigation.navigate("MainMenu")}>
            <Text style={{ color: "gray" }}>Back icon</Text>
          </TouchableOpacity>
        </ImageBackground>

        <View style={{
          padding: 10 * 2,
          paddingTop: 10 * 3,
          marginTop: 10,
          borderTopLeftRadius: 10 * 3,
          borderTopRightRadius: 10 * 3,
          backgroundColor: "white"
        }}>

          <View style={{ flexDirection: "row", marginBottom: 10 * 2, alignItems:'center' }}>
            <View style={{ width: "70%", maxWidth:250 }}>
              <Text style={{ fontSize: 30, color: "black", fontWeight: "700" }}>{route.params.name}</Text>
            </View>
            <View style={{
              padding: 14 / 2,
              paddingHorizontal:30,
              backgroundColor: "gray",
              flexDirection: "row",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center"
            }}>
              <Text style={{color:'black', fontWeight:'600', fontSize:20}}>Yazar</Text>
            </View>
          </View>
             <View>
               <GenreCard/>
             </View>
          <View style={{margin:10}}>
            <Text style={{color:'black', fontWeight:'600', fontSize:22, margin:10 }}>Description</Text>
            <Text style={{color:'black', fontWeight:'300', fontSize:16 }}>Açıklama blablabla</Text>
          </View>
          <View>
            <EpisodeCard/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>

  );


}

export default InfoPage;

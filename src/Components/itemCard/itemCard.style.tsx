import { Dimensions, StyleSheet } from "react-native";


export default StyleSheet.create({

  outer_container: {backgroundColor:'black',
    alignItems:'center',
    borderRadius: 10,
    borderWidth: 1,
    margin:10,
    padding:10,
    borderStartColor: "red",
    borderEndColor: "black",
    width: 300,
    height: Dimensions.get("screen").height / 3,
    opacity:0.9
  },

  image_container: {
    borderRadius: 2,
    width: Dimensions.get("screen").width / 1.5,
    height: Dimensions.get("screen").height / 4,
    resizeMode:'stretch'
  },

  Manga_text: {
    textAlign:'center',
    fontWeight:'bold',
    color:'white',
    maxHeight:60,
    fontSize:20,
    paddingTop:10
  },



});

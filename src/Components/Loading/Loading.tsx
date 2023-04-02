import React from 'react';
import AnimatedLottieView from "lottie-react-native";


function Loading(){

  return(
    <AnimatedLottieView source={require('../../Assets/paperPlane.json')} autoPlay loop />
  );

}

export default Loading;


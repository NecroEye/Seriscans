import React from 'react';
import AnimatedLottieView from "lottie-react-native";


function Error(){

  return(
    <AnimatedLottieView source={require('../../Assets/error.json')} autoPlay loop/>
  );

}

export default Error;


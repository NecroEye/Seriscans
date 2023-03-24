import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import MainMenu from "./Pages/MainMenu";
import InfoPage from "./Pages/InfoPage";
import ReadingPage from "./Pages/ReadingPage";


const Stack = createNativeStackNavigator();

function App(){

  return(

    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="MainMenu" component={MainMenu}/>
        <Stack.Screen name="InfoPage" component={InfoPage}/>
        <Stack.Screen name="ReadingPage" component={ReadingPage}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;

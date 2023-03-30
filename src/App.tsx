import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainMenu from "./Pages/MainMenu";
import InfoPage from "./Pages/InfoPage";
import ReadingPage from "./Pages/ReadingPage";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const SpecialArea = () => {

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="InfoArea" component={InfoPage} />
      <Tab.Screen name="ReadingPage" component={ReadingPage} />
    </Tab.Navigator>
  );
};


function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainMenu" component={MainMenu} />
        <Stack.Screen name="InfoPage" component={SpecialArea} />
        <Stack.Screen name="ReadingPage" component={ReadingPage} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;

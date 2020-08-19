import "react-native-gesture-handler";
import React from "react";
import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import NavBar from "./components/NavBar";
import Routes from "./routes";
// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <NavigationContainer >
      <Routes></Routes>
    </NavigationContainer>
  );
};

export default App;

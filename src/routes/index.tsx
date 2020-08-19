import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import NavBar from "../components/NavBar";

const Tab = createBottomTabNavigator();
const Routes: React.FC = () => {
  return (
    <Tab.Navigator  tabBar={(props) => <NavBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Dashboard" component={Dashboard} />
    </Tab.Navigator>
  );
};

export default Routes;

import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { Container, MenuItem, SCIcon, Title } from "./styles";

const NavBar: React.FC = ({ state, descriptors, navigation }) => {
  return (
    <Container>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        return (
          <MenuItem
            key={label}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <SCIcon name={options.title} isFocused={isFocused} size={20} />
            <Title isFocused={isFocused}>{route.name}</Title>
          </MenuItem>
        );
      })}
      {/* <CircleIndicator /> */}
    </Container>
  );
};

export default NavBar;

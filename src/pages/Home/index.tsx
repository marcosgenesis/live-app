import React from "react";
import Icon from "react-native-vector-icons/Feather";

import {
  Container,
  Logo,
  SearchField,
  Search,
  DestaqueText,
  LivesTitle,
  LivesText,
  LivesArea,
} from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import Highlight from "../../components/Highlight";
import Live from "../../components/Live";

const Home: React.FC = () => {
  return (
    <Container>
      <ScrollView>
        <Logo>Liveshow</Logo>
        <Search>
          <SearchField
            placeholder="Pesquisar"
            placeholderTextColor="#B7BFD6"
          ></SearchField>
          <Icon name="search" size={18} color="#999" />
        </Search>
        <DestaqueText>Destaque</DestaqueText>
        <ScrollView horizontal={true}>
          <Highlight></Highlight>
          <Highlight></Highlight>
          <Highlight></Highlight>
          <Highlight></Highlight>
        </ScrollView>
        <LivesTitle>
          <LivesText>Lives</LivesText>
          <Icon name="filter" size={25} color="#B7BFD6" />
        </LivesTitle>
        <LivesArea>
          <Live></Live>
          <Live></Live>
          <Live></Live>
          <Live></Live>
          <Live></Live>
        </LivesArea>
      </ScrollView>
    </Container>
  );
};

export default Home;

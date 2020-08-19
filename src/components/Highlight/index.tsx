import React from "react";
import Icon from "react-native-vector-icons/Feather";
import {
  Destaque,
  Header,
  PerfilPicture,
  Info,
  MainPicture,
  Bottom,
  InfoHour,
  InfoDate,
  Hour,
  BottomText,
} from "./styles";

const Highlight: React.FC = () => {
  return (
    <Destaque>
      <Header>
        <PerfilPicture />
        <Info>
          <InfoHour>
            <Icon name="clock" size={16} color="#000" />
            <Hour>18:00</Hour>
          </InfoHour>
          <InfoDate>
            <Icon name="calendar" size={16} color="#000" />
            <Hour>27/07</Hour>
          </InfoDate>
        </Info>
      </Header>
      <MainPicture></MainPicture>
      <Bottom>
        <BottomText>
          Live Gustavo lima, não perca essa maravilha do show brasileiro
        </BottomText>
      </Bottom>
    </Destaque>
  );
};

export default Highlight;

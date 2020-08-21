import React from "react";
import { View } from "react-native";

import {
  Container,
  LiveImage,
  Content,
  Title,
  Info,
  InfoHour,
  InfoDate,
  Hour,
  Bottom,
  Profile,
  ProfileImage,
  Username,
  Actions,
  SeeMore,
} from "./styles";
import Icon from "react-native-vector-icons/Feather";
import liveimg from "../../assets/img/liveimg.png";
const Live: React.FC = () => {
  return (
    <Container>
      <LiveImage source={liveimg} />
      <Content>
        <Title>Os maiores sucessos de Aron Paul</Title>
        <Info>
          <InfoHour>
            <Icon name="clock" size={16} color="#ff5656" />
            <Hour>18:00</Hour>
          </InfoHour>
          <InfoDate>
            <Icon name="calendar" size={16} color="#ff5656" />
            <Hour>27/07</Hour>
          </InfoDate>
        </Info>
        <Bottom>
          <Profile>
            <ProfileImage source={liveimg}></ProfileImage>
            <Username>aronpaul</Username>
          </Profile>
          <Actions>
            <Icon name="bell" size={16}></Icon>
            <Icon name="share" size={16}></Icon>
          </Actions>
        </Bottom>
      </Content>
      <SeeMore>
        <Icon name="arrow-right" size={16} color="#fff"></Icon>
      </SeeMore>
    </Container>
  );
};

export default Live;

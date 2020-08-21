import styled from "styled-components/native";

export const Container = styled.View`
  background: #fff;
  width: 98%;
  flex-direction: row;
  border-radius: 10px;
  justify-content: center;
  margin-top: 10px;
`;
export const LiveImage = styled.Image`
  width: 118px;
  height: 118px;
  background: #000;
  border-radius: 10px;
`;
export const Content = styled.View`
  width: 58%;
  padding-left: 10px;
  justify-content: space-around;
`;
export const Title = styled.Text`
  font-family: "Campton-Bold";
`;
export const Info = styled.View`
  flex-direction: row;
  width: 130px;
  justify-content: space-between;
`;
export const InfoHour = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const InfoDate = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Hour = styled.Text`
  margin-left: 3px;
`;
export const Bottom = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Profile = styled.View`
  width: 120px;
  flex-direction: row;
  align-items: center;
`;
export const ProfileImage = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background: #000;
`;
export const Username = styled.Text`
  font-family: "Campton-Bold";
  color: #b7bfd6;
  margin-left: 5px;
`;
export const Actions = styled.View`
  flex-direction: row;
  width: 60px;
  justify-content: space-around;
`;
export const SeeMore = styled.TouchableOpacity`
  width: 25px;
  height: 116px;
  background: #ff5656;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  align-items: center;
  justify-content: center;
`;

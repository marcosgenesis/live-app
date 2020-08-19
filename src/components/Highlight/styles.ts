import styled from "styled-components/native";

export const Destaque = styled.View`
  position: relative;
  height: 280px;
  margin: 10px;
`;

export const Header = styled.View`
  justify-content: space-between;
`;

export const PerfilPicture = styled.View`
  background: #555;
  width: 55px;
  height: 55px;
  border-radius: 16px;
  z-index: 10;
  position: absolute;
  display: none;
`;

export const Info = styled.View`
  position: relative;
  top: 35px;
  z-index: 2;
  flex-direction: row;
`;
export const InfoDate = styled.View`
  z-index: 3;
  flex-direction: row;
  margin-left: 20px;
`;
export const InfoHour = styled.View`
  z-index: 3;
  flex-direction: row;
  margin-left: 60px;
`;
export const Hour = styled.Text`
  font-size: 12px;
  margin-left: 3px;
`;
export const MainPicture = styled.View`
  width: 200px;
  height: 250px;
  background: #fff;
  border-radius: 16px;
  position: relative;
  z-index: 1;
  top: 12px;
`;
export const Bottom = styled.View`
  width: 200px;
  z-index: 10;
  position: absolute;
  bottom: 2px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 16px;
`;
export const BottomText = styled.Text`
  font-size: 13px;
  color: white;
`;

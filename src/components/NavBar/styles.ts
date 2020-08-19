import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 50px;
  background: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
`;
export const MenuItem = styled.TouchableOpacity`
  background: ${(props) => (props.isFocused ? "#7159c1" : "transparent")};
  padding: 10px 10px 10px 10px;
  border-radius: 50px;

`;
export const Title = styled.Text`
  color: #fff;
  font-size:20px;

`;
export const CircleIndicator = styled.View`
  width: 8px;
  height: 8px;
  background: #000;
  position:absolute;
  top:0;
`;

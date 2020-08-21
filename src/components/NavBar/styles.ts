import styled from "styled-components/native";

import Icon from "react-native-vector-icons/Feather";

export const Container = styled.View`
  width: 100%;
  height: 55px;
  background: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
`;
export const MenuItem = styled.TouchableOpacity`
  padding: 10px 10px 10px 10px;
  border-radius: 50px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.Text`
  font-family: "Campton-Medium";
  font-size: 12px;
  color: #000;
  ${(props) => !props.isFocused && "display:none"}
`;
export const CircleIndicator = styled.View`
  width: 8px;
  height: 8px;
  background: #000;
  position: absolute;
  top: 0;
`;
export const SCIcon = styled(Icon)`
  color: ${(props) => (props.isFocused ? "#FF5656" : "#B7BFD6")};
`;

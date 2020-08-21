import styled from "styled-components/native";

export const Container = styled.View``;
export const Logo = styled.Text`
  font-size: 20px;
  font-family: "LibreBaskerville-Regular";
  align-self: center;
`;
export const Search = styled.View`
  background: #f8f9fd;
  width: 80%;
  align-self: center;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px 0px 10px;
`;
export const SearchField = styled.TextInput`
  border-radius: 10px;
  padding: 10px;
`;

export const DestaqueText = styled.Text`
  font-size: 27px;
  margin-top: 10px;
  margin-left: 10px;
  font-family: "Campton-Bold";
`;

export const LivesTitle = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const LivesText = styled.Text`
  font-size: 27px;
  font-family: "Campton-Bold";
  margin-top: 10px;
  margin-left: 10px;
`;

export const LivesArea = styled.View`
  font-size: 27px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 10px;
`;

import React from "react";
import { View, Image } from "react-native";
import { Title, Paragraph } from "react-native-paper";

export default function Mycard(props) {
  return (
    <View style={{ elevation: 5, backgroundColor: "#dfe6e9" }}>
      <Image
        style={{
          height: 80,
          width: 80,
          borderRadius: 40,
          marginRight: 35,
        }}
        source={{
          uri: props.photo,
        }}
      />
      <Title>{props.name}</Title>
      <Paragraph>{props.chat}</Paragraph>
    </View>
  );
}

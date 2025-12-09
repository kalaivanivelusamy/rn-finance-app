import { View, Text, Image } from 'react-native'
import React from 'react'
import { icons } from "../../constants/icons";

export default function profile() {
  console.log("ICON TYPE:", typeof icons.NetflixIcon);
  console.log("ICON VALUE:", icons.NetflixIcon);

  return (
    <View>
      <Text>profile</Text>
      {/* <NetflixIcon width={50} height={50} color="black" /> */}
      <Image source={icons.NetflixIcon} style={{ width: 50, height: 50 , alignItems: 'center'}} />
    </View>
  )
}
import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'
import { icons } from "../../constants/icons";
import { Stack } from 'expo-router';

export default function transactions() {
  return (
    <>
    <Stack.Screen options={{ headerShown: false }} />
    <View style={styles.container}>
      <Text style={styles.text}>Transactions</Text>
      {/* <NetflixIcon width={50} height={50} color="black" /> */}
      <Image source={icons.NetflixIcon} style={{ width: 50, height: 50 , alignItems: 'center'}} />
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 20,
  },
  text: {
    color: 'white',
  }
})

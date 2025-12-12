import { Text, View, StyleSheet } from "react-native";
import { icons } from "../../constants/icons";
import { Stack } from 'expo-router';
import { Image } from "react-native";
import Header from "../../components/header";

export default function Index() {
  return (
    <>
    <Stack.Screen options={{ header: () => <Header /> }} />
    <View style={styles.container}>
      <Text style={styles.text}>Page</Text>
      {/* <NetflixIcon width={50} height={50} color="black" /> */}
      <Image source={icons.NetflixIcon} style={{ width: 50, height: 50 , alignItems: 'center'}} />
    </View>
    </>
  );
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
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },



});
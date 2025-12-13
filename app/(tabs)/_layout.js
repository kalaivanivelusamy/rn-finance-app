import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { Tabs } from "expo-router";
import { AntDesign, FontAwesome, simpl, SimpleLineIcons } from '@expo/vector-icons';


export default function Layout() {
    return (
        // <>
        <Tabs screenOptions={{
            tabBarStyle:{
                backgroundColor: '#EEEADE',
                height: 60,
                position: 'absolute',
                justifyContent: 'space-between',
                alignSelf: 'center',
                marginHorizontal: 80,
                paddingHorizontal: 10,
                paddingVertical: 8,
                paddingBottom: 10,
                borderRadius: 40,
                bottom: 40,
                left: 0,
                borderTopWidth: 1,
                borderTopColor: '#e26b6bff',
                borderColor: '#e26b6bff',
            },
            
                tabBarShowLabel: false,
                tabBarInactiveTintColor: '#999',
                tabBarActiveTintColor: 'white'
          
            
        }}>
            <Tabs.Screen name='index'
                options={{
                    tabBarIcon: ({color, size, focused}) => (
                        <View style={{ width: 40,height: 40}}>
                            <SimpleLineIcons name="pie-chart" size={40} color={'purple'} />
                        </View>
                    )

                }}>
            </Tabs.Screen>
            <Tabs.Screen name='transactions'
                options={{
                    tabBarIcon: ({color, size, focused}) => (
                        <View>
                            <AntDesign name="swap" size={30} color={'purple'} />
                        </View>
                    )
                        
                }}>
            </Tabs.Screen>
            <Tabs.Screen name='profile'
                options={{
                    tabBarIcon: ({color, size, focused}) => (
                        <View>
                            <FontAwesome name="user-o" size={30} color={'purple'} />
                        </View>
                    )

                }}>
            </Tabs.Screen>
        </Tabs>
        /* <StatusBar style="light"/> */
        /* </> */
    )
}
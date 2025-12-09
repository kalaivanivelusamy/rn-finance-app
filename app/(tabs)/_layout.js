import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from "expo-router";
import { AntDesign, FontAwesome, simpl, SimpleLineIcons } from '@expo/vector-icons';


export default function Layout() {
    return (
        <Tabs screenOptions={{
            tabBarStyle:{
                backgroundColor: '#EEEADE',
                height: 60,
                position: 'absolute',
                justifyContent: 'center',
                alignSelf: 'center',
                marginHorizontal: 120,
                // paddingHorizontal: 10,
                // paddingVertical: 8,
                // paddingBottom: 10,
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
                    tabBarIcon: (color, size, focused) => (
                        <View style={{ padding: 12, borderRadius: 30, backgroundColor: focused ? '#e6e6e6' : 'purple' }}>
                            <SimpleLineIcons name="pie-chart" size={18} color={'white'} />
                        </View>
                    )

                }}>
            </Tabs.Screen>
            <Tabs.Screen name='transactions'
                options={{
                    tabBarIcon: (color, size, focused) => (
                        <View style={{ padding: 12, borderRadius: 30, backgroundColor: focused ? '#e6e6e6' : 'purple' }}>
                            <AntDesign name="swap" size={18} color={'white'} />
                        </View>
                    )
                        
                }}>
            </Tabs.Screen>
            <Tabs.Screen name='profile'
                options={{
                    tabBarIcon: (color, size, focused) => (
                        <View style={{ padding: 12, borderRadius: 30, backgroundColor: focused ? '#e6e6e6' : 'purple' }}>
                            <FontAwesome name="user-o" size={18} color={'white'} />
                        </View>
                    )

                }}>
            </Tabs.Screen>
        </Tabs>
    )
}
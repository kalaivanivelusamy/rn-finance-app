import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function header() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black', padding: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',height: 60,paddingHorizontal: 0 }}>
                <Image
                    source={{ uri: 'https://i.pravatar.cc/100?u=12' }}
                    style={{ width: 50, height: 50, borderRadius: 30 }}
                />
                <TouchableOpacity onPress={() => { }}>
                    <Text style={{ color: 'white', fontSize: 12 }}>My Transactions</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}
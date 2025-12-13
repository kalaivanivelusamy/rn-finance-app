import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function header() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black', padding: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',height: 60,paddingHorizontal: 0 }}>
                <View
                    style={{ alignItems: 'center', flexDirection: 'row', gap: 10 }}>
                <Image
                    source={{ uri: 'https://i.pravatar.cc/100?u=12' }}
                    style={{ width: 50, height: 50, borderRadius: 30 }}
                />
                <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 12 }}>Hello, User</Text>
                    <Text style={{ color: 'white', fontSize: 16}}>Your <Text style={{ fontWeight: 'bold' }}>Budget</Text> </Text>
                </View>
                </View>
                <TouchableOpacity 
                onPress={() => { }}
                style={{ backgroundColor: '#e9eff5ff', padding: 10, borderRadius: 8, alignItems: 'center',borderWidth: 1, borderColor: 'gray' }}>
                <Text style={{ color: 'black', fontSize: 12,  }}>My Transactions</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}


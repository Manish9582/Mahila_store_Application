import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const Navbar = () => {
    return (
        <View>
            <View className='flex-row items-center justify-between'>
                <View className='w-[45px] h-[45px]'>
                    <Image source={{ uri: 'https://pbs.twimg.com/media/ETCsjrtUEAArqgH?format=jpg&name=4096x4096' }} resizeMode='cover'
                        className='w-full h-full rounded-full' />
                </View>
                <MaterialIcons name="settings" size={24} color="black" />
            </View>
            <View>
                <TextInput className='border border-gray-600'/>
            </View>
        </View>
    )
}

export default Navbar
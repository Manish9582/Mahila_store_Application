import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router';

const Home = () => {

  const route = useRouter();
  const SendSingpAge = () => {
    route.push('/auth/sign')
  }
  const SendLoginpAge = () => {
    route.push('/auth/login')
  }

  return (
    <SafeAreaView className='h-screen bg-purple-50'>
      <View className='h-full'>
        <View className='w-full h-[500px]'>
          <Image source={require('../assets/images/logo.png')} resizeMode='cover' className='w-full h-full' />
        </View>
        <View className='w-full rounded-t-2xl px-4'>
          <TouchableOpacity className='bg-purple-600  rounded-lg py-4' onPress={SendSingpAge}>
            <Text className='font-semibold text-xl text-center text-white'>Sign</Text>
          </TouchableOpacity>
          <TouchableOpacity className='bg-purple-600  mt-4 rounded-lg py-4' onPress={SendLoginpAge}>
            <Text className='font-semibold text-xl text-center  text-white' >Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home
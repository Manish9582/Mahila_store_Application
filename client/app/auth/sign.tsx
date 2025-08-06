import { View, Text, Image, TextInput, ScrollView, KeyboardAvoidingView, TouchableOpacity, Platform } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome from '@expo/vector-icons/FontAwesome';
const Sign = () => {
  const [eyes, seteyes] = useState<any>({
    'password': false,
    'con_password': false
  })
  return (
    <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'height' : 'padding'}>
      <SafeAreaView className='bg-purple-50 h-full'>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className='w-full h-[350px]'>
            <Image source={require('../../assets/images/logo.png')} resizeMode='cover' className='w-full h-full' />
          </View>

          {/* form datas */}
          <View className='px-4'>
            <FontAwesome name="eye" size={24} color="black" />

            <View>
              <Text>Full Name</Text>
              <TextInput className='border rounded-md' />
            </View>
            <View>
              <Text>Gender</Text>
              <TextInput className='border' />
            </View>
            <View>
              <Text>DOB</Text>
              <TextInput className='border' />
            </View>
            <View>
              <Text>Age</Text>
              <TextInput className='border rounded-md' keyboardType='numeric' />
            </View>
            <View>
              <Text>Email</Text>
              <TextInput className='border rounded-md' />
            </View>
            <View>
              <Text>Phone</Text>
              <TextInput className='border rounded-md' keyboardType='numeric' />
            </View>
            <View>
              <Text>Password</Text>
              <View className='border rounded-lg flex-row items-center w-full'>
                <TextInput className='w-[92%] px-2' secureTextEntry={eyes.password} />
                {eyes.password ?
                  <FontAwesome name="eye" size={24} color="black" /> : <FontAwesome name="eye-slash" size={24} color="black" />
                }
              </View>
            </View>
            <View>
              <Text>Confirm Password</Text>
              <View className='border rounded-lg flex-row items-center w-full'>
                <TextInput className='w-[92%] px-2' secureTextEntry={eyes.con_password} />
                {eyes.con_password ?
                  <FontAwesome name="eye" size={24} color="black" /> : <FontAwesome name="eye-slash" size={24} color="black" />
                }
              </View>
            </View>
            <View>
              <TouchableOpacity className='bg-purple-500 py-2.5 rounded-lg mt-3'>
                <Text className='text-white text-center font-semibold text-xl'>Submit</Text>
              </TouchableOpacity>
            </View>

          </View>

        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default Sign
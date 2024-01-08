import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome, Entypo, AntDesign } from '@expo/vector-icons'; // Import icons from the chosen library

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-pink-500 p-4">
      <Text className="text-blue-100 text-2xl mb-4 uppercase">Welcome To ambisgroup</Text>
      
      <TextInput
        className="bg-white p-2 mb-4 w-full rounded-md"
        placeholder="Username"
      />
      
      <TextInput
        className="bg-white p-2 mb-4 w-full rounded-md"
        placeholder="Password"
        secureTextEntry
      />
      
      <TouchableOpacity
        className="bg-blue-500 p-2 mb-4 rounded-md"
        onPress={() => {
          // Handle login logic here
        }}
      >
        <Text className="text-white text-center">Login</Text>
      </TouchableOpacity>

      <View className="flex-row">
        {/* Social Icons */}
        <TouchableOpacity className="mr-4">
          <FontAwesome name="facebook-square" size={30} color="blue" />
        </TouchableOpacity>

        <TouchableOpacity className="mr-4">
          <FontAwesome name="twitter-square" size={30} color="skyblue" />
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign name="instagram" size={30} color="purple" />
        </TouchableOpacity>
      </View>

      <StatusBar className="auto" />
    </View>
  );
}

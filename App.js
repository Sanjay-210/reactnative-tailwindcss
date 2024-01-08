import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

const SignupPage = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    console.log(fullName,username,email,password);

  //  const FormData



  };

  return (
    <View className={('flex-1 justify-center items-center')}>
      {/* Full Name Input */}
      <TextInput
        className={('border-b border-blue-500 px-15 bg-gray-100 mb-4 p-2 w-64')}
        placeholder="Full Name"
        value={fullName}
        onChangeText={(text) => setFullName(text)}
      />

      {/* Username Input */}
      <TextInput
        className={('border-b border-blue-500 px-15 bg-gray-100 mb-4 p-2 w-64')}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      {/* Email Input */}
      <TextInput
        className={('border-b border-blue-500 px-10 bg-gray-100 mb-4 p-2 w-64')}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      {/* Password Input */}
      <TextInput
        className={('border-b border-blue-500 px-15 bg-gray-100 mb-4 p-2 w-64')}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      {/* Signup Button */}
      <TouchableOpacity className={('bg-blue-500 p-2 rounded')} onPress={handleSignup}>
        <Text className={('text-white')}>Sign Up</Text>
      </TouchableOpacity>

      {/* Social Links */}
      <View className={('mt-4')}>
        {/* Implement social login buttons here */}
        {/* Example: Google Login */}
        <TouchableOpacity
          className={('bg-blue-700 p-2 rounded flex-row items-center')}
          onPress={() => {}}
        >
          <Text className={('text-white mr-2')}>Sign Up with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupPage;

import { View, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { ChevronDownIcon, UserIcon } from 'react-native-heroicons/outline';

const Header = () => {
  return (
    <View className="flex-row pb-3 items-center mx-4 space-x-2">
      <TouchableOpacity>
        <Image source={{ uri: 'https://links.papareact.com/wru' }} className="h-7 w-7 bg-gray-300 p-4 rounded-full" />
      </TouchableOpacity>
      <View className="flex-1">
        <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
        <Text className="font-bold text-xl">
          current Location
          <ChevronDownIcon size={20} color="#00CCBB" />
        </Text>
      </View>
      <TouchableOpacity>
        <UserIcon size={35} color="#00CCBB" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

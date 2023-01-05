import { View, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';

import { AdjustmentsVerticalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';

const Search = () => {
  return (
    <View className="flex-row space-x-2 mb-2 mx-4 items-center">
      <View className="flex-row flex-1 space-x-2 bg-gray-300 p-3">
        <MagnifyingGlassIcon size={20} color="gray" />
        <TextInput placeholder="Restaurants and cuisines" keyboardType="default" />
      </View>
      <TouchableOpacity>
        <AdjustmentsVerticalIcon size={30} color="#00CCBB" />
      </TouchableOpacity>
    </View>
  );
};

export default Search;

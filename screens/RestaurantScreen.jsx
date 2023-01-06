import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { urlFor } from '../sanity';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';

const RestaurantScreen = () => {
  const {
    params: { id, imgURL, title, rating, genre, address, short_description, dishes, long, lat },
  } = useRoute();
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View className="relative">
        <Image source={{ uri: urlFor(imgURL).url() }} className="h-56 w-full bg-gray-300 p-3" />
        <TouchableOpacity onPress={navigation.goBack} className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full">
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;

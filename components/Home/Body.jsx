import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';

// Import components
import CategoryCard from './CategoryCard';
import RestaurantCard from './RestaurantCard';

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="text-black"
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      <CategoryCard imageURL="https://links.papareact.com/gn7" title="Pickup" />
      <CategoryCard imageURL="https://links.papareact.com/gn7" title="Pickup" />
      <CategoryCard imageURL="https://links.papareact.com/gn7" title="Pickup" />
    </ScrollView>
  );
};

const Featured = ({ title, description, featureCategory }) => {
  return (
    <View className="">
      <View className="flex-row mt-4 items-center justify-between px-4">
        <Text className="flex  font-bold text-lg">{title}</Text>
        <TouchableOpacity>
          <ArrowRightIcon color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <Text className="text-gray-500 px-4 text-xs">{description}</Text>
      <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 15 }} showsHorizontalScrollIndicator={false}>
        <RestaurantCard
          id={1}
          imgURL="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="Traditional sushi restaurant"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

const Body = () => {
  return (
    <ScrollView className="bg-gray-100" contentContainerStyle={{ paddingBottom: 100 }}>
      {/* Categories */}
      <Categories />

      {/* Featured row */}
      <Featured
        id="firstFeature"
        title="Featured"
        description="Paid placement from our partners"
        featureCategory="featured"
      />

      <Featured
        id="secondFeature"
        title="Tasty Discounts"
        description="Everyone's been enjoying these juicy discounts"
        featureCategory="discounts"
      />

      <Featured
        id="thirdFeature"
        title="Offers near you"
        description="Why not support your local restaurants today"
        featureCategory="offers"
      />
    </ScrollView>
  );
};

export default Body;

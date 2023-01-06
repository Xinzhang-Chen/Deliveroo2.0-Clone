import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';

// Import components
import CategoryCard from './CategoryCard';
import RestaurantCard from './RestaurantCard';
import client from '../../sanity';

const Categories = () => {
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    client
      .fetch(
        `
    *[_type == "category"]`
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="text-black"
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      {categories.map((category) => {
        return <CategoryCard key={category._id} imageURL={category.image} title={category.title} />;
      })}
    </ScrollView>
  );
};

const Featured = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = React.useState([]);
  React.useEffect(() => {
    client
      .fetch(
        `*[_type == "featured" && _id == $id ] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type->{
          name
        }
      },
  }[0]`,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, [id]);

  return (
    <View className="">
      <View className="flex-row mt-4 items-center justify-between px-4">
        <Text className="flex  font-bold text-lg">{title}</Text>
        <TouchableOpacity>
          <ArrowRightIcon color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <Text className="text-gray-500 px-4 text-xs mb-2">{description}</Text>
      <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 15 }} showsHorizontalScrollIndicator={false}>
        {restaurants?.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant._id}
              id={restaurant._id}
              imgURL={restaurant.image}
              address={restaurant.address}
              rating={restaurant.rating}
              short_description={restaurant.short_description}
              genre={restaurant.type?.name}
              title={restaurant.name}
              dishes={restaurant.dishes}
              long={restaurant.long}
              lat={restaurant.lat}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const Body = () => {
  const [featuredCategory, setFeaturedCategory] = React.useState([]);

  React.useEffect(() => {
    client
      .fetch(
        `*[_type == "featured"] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
      },
  }`
      )
      .then((data) => {
        setFeaturedCategory(data);
      });
  }, []);

  return (
    <ScrollView className="bg-gray-100" contentContainerStyle={{ paddingBottom: 100 }}>
      {/* Categories */}
      <Categories />

      {/* Featured row */}
      {featuredCategory?.map((category) => {
        return (
          <Featured
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        );
      })}
    </ScrollView>
  );
};

export default Body;

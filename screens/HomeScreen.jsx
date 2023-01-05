import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';

// Access to the navigation object
import { useNavigation } from '@react-navigation/native';

// Import components
import Header from '../components/Home/Header';
import Search from '../components/Home/Search';
import Body from '../components/Home/Body';

const HomeScreen = () => {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <Header />
      <Search />
      <Body />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

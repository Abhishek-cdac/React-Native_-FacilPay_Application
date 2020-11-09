/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { Provider } from 'react-redux';
import store from './src/redux/store'; 

import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <Provider store = {store}>
    <SafeAreaView style = {styles.container}>
       <AppNavigator></AppNavigator>
    </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})


export default App;

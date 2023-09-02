import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StackNavigation from './src/Navigators/StackNavigation';
import ContextProvider from './src/Providers/ContextProvider';

const App = () => {
  return (
    <ContextProvider>
      <SafeAreaView style={{flex: 1}}>
        <StackNavigation />
      </SafeAreaView>
    </ContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({});

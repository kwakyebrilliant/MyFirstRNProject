/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'darkslateblue', fontSize: 30}}>Hello World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
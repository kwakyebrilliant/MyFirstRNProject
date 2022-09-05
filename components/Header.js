/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text>Hello World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
});

export default Header;
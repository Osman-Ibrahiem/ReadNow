import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@theme';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ReadNow</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex:            1,
    backgroundColor: Colors.primary,
    alignItems:      'center',
    justifyContent:  'center',
  },
  text: {
    fontSize:   32,
    fontWeight: '700',
    color:      Colors.white,
  },
});
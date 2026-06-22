import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@theme';

const ListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>List Screen</Text>
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex:            1,
    backgroundColor: Colors.background,
    alignItems:      'center',
    justifyContent:  'center',
  },
  text: {
    fontSize:   24,
    fontWeight: '700',
    color:      Colors.text,
  },
});
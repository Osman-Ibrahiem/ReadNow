import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors, Typography, Spacing } from '@theme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '@navigation/types';

const SplashScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList, 'Splash'>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>ReadNow</Text>
      <Text style={styles.subtitle}>Stay informed, every moment</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: Spacing.lg,
  },
  title: {
    ...Typography.display,
    color: Colors.textInverse,
  },
  subtitle: {
    ...Typography.body,
    color: Colors.textInverseMuted,
    marginTop: Spacing.sm,
  },
});
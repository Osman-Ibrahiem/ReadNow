import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing } from '@theme';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.logoText}>ReadNow</Text>
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>Sign in to continue reading</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: Spacing.xxl + Spacing.md,
  },
  logo: {
    width: 50,
    height: 50,
  },
  logoText: {
    ...Typography.h4,
    color: Colors.text,
    marginTop: Spacing.sm,
  },
  headerContainer: {
    marginTop: Spacing.xxl,
    paddingHorizontal: Spacing.lg,
  },
  title: {
    ...Typography.h1,
    fontSize: 26,
    color: Colors.text,
  },
  subtitle: {
    ...Typography.body,
    color: Colors.textSecondary,
    marginTop: Spacing.xs + 2,
  },
});
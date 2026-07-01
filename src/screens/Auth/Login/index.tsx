import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing } from '@theme';

const eyeIcon = require('../../../../assets/icons/password-eye.png');
const googleIcon = require('../../../../assets/icons/google.png');

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleSignIn = () => {
    console.log('Sign in pressed', { email, password });
  };

  const handleGoogleSignIn = () => {
    console.log('Google sign in pressed');
  };

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

      <View style={styles.formContainer}>
        <View style={styles.fieldGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[styles.input, isEmailFocused && styles.inputFocused]}
            placeholder="Your Email"
            placeholderTextColor={Colors.placeholder}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
          />
        </View>

        <View style={styles.fieldGroup}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordWrapper}>
            <TextInput
              style={[styles.passwordInput, isPasswordFocused && styles.inputFocused]}
              placeholder="Your Password"
              placeholderTextColor={Colors.placeholder}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword((prev) => !prev)}
              hitSlop={8}
            >
              <Image
                source={showPassword ? eyeIcon : eyeIcon}
                style={styles.eyeIconImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.signInButton}
        activeOpacity={0.8}
        onPress={handleSignIn}
      >
        <Text style={styles.signInButtonText}>Sign in</Text>
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.dividerLine} />
      </View>

      <TouchableOpacity
        style={styles.googleButton}
        activeOpacity={0.8}
        onPress={handleGoogleSignIn}
      >
        <Image
          source={googleIcon}
          style={styles.googleIcon}
          resizeMode="contain"
        />
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>
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
  formContainer: {
    marginTop: Spacing.xl + Spacing.md,
    paddingHorizontal: Spacing.lg,
  },
  fieldGroup: {
    marginBottom: Spacing.lg,
  },
  label: {
    ...Typography.bodySmall,
    fontWeight: '500',
    color: Colors.textSecondary,
    marginBottom: Spacing.sm,
  },
  input: {
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.surface,
    paddingHorizontal: Spacing.md,
    fontSize: 14,
    color: Colors.text,
  },
  passwordWrapper: {
    justifyContent: 'center',
  },
  passwordInput: {
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.surface,
    paddingHorizontal: Spacing.md,
    paddingRight: 44,
    fontSize: 14,
    color: Colors.text,
  },
  inputFocused: {
    borderColor: Colors.primary,
    borderWidth: 1.5,
    backgroundColor: Colors.background,
  },
  eyeIcon: {
    position: 'absolute',
    right: Spacing.md,
  },
  eyeIconImage: {
    width: 20,
    height: 20,
  },
  signInButton: {
    marginTop: Spacing.lg,
    marginHorizontal: Spacing.lg,
    height: 52,
    borderRadius: 12,
    backgroundColor: Colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.text,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.xl,
    marginHorizontal: Spacing.lg,
  },
  dividerLine: {
    flex: 1,
    height: 0.5,
    backgroundColor: Colors.border,
  },
  dividerText: {
    fontSize: 13,
    color: Colors.placeholder,
    marginHorizontal: Spacing.sm,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Spacing.lg,
    marginHorizontal: Spacing.lg,
    height: 50,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: Colors.border,
    backgroundColor: Colors.background,
  },
  googleIcon: {
    width: 16,
    height: 16,
    marginRight: Spacing.sm,
  },
  googleButtonText: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
});
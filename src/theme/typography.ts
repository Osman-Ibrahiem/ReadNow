import { StyleSheet } from 'react-native';
import { Colors } from './colors';

export const Typography = StyleSheet.create({
  display: { fontSize: 40, fontWeight: '700' },
  h1: { fontSize: 28, fontWeight: '700', color: Colors.text },
  h2: { fontSize: 22, fontWeight: '700', color: Colors.text },
  h3: { fontSize: 18, fontWeight: '600', color: Colors.text },
  h4: { fontSize: 16, fontWeight: '600', color: Colors.text },
  body: { fontSize: 14, fontWeight: '400', color: Colors.text },
  bodySmall: { fontSize: 12, fontWeight: '400', color: Colors.textSecondary },
  caption: { fontSize: 11, fontWeight: '400', color: Colors.textSecondary },
  button: { fontSize: 15, fontWeight: '600' },
});
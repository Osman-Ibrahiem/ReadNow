import type { NavigatorScreenParams } from '@react-navigation/native';
import type { AuthStackParamList }    from './auth.types';
import type { TabParamList }          from './tab.types';

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Main: NavigatorScreenParams<TabParamList>;
};
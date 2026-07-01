import type { NavigatorScreenParams } from '@react-navigation/native';

export type ListStackParamList = {
  ListScreen: undefined;
  ItemDetail: { itemId: string };
};

export type TabParamList = {
  ListTab: NavigatorScreenParams<ListStackParamList>;
  Profile: undefined;
  Settings: undefined;
};
import type { NavigatorScreenParams } from '@react-navigation/native';

export type ListStackParamList = {
  ListScreen: undefined;
  ArticleDetails: { articleId: string };
};

export type TabParamList = {
  ListTab: NavigatorScreenParams<ListStackParamList>;
  Profile: undefined;
  Settings: undefined;
};
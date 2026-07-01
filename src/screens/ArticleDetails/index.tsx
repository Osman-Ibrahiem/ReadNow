import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ListStackParamList } from '@navigation/types';

type Props = NativeStackScreenProps<ListStackParamList, 'ArticleDetails'>;

const ArticleDetailsScreen = ({ route }: Props) => {
    const { articleId } = route.params;

    return (
        <View style={styles.container}>
            <Text>Article Details — id: {articleId}</Text>
        </View>
    );
};

export default ArticleDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
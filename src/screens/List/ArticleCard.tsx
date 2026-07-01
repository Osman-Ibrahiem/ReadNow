import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors, Typography, Spacing } from '@theme';
import type { Article } from '@types';
import { CATEGORY_COLORS } from './mockData';

interface ArticleCardProps {
    article: Article;
    onPress?: () => void;
}

const ArticleCard = ({ article, onPress }: ArticleCardProps) => {
    const categoryColor = CATEGORY_COLORS[article.category] ?? {
        bg: Colors.surface,
        text: Colors.textSecondary,
    };

    return (
        <TouchableOpacity style={styles.card} activeOpacity={0.7} onPress={onPress}>
            <View style={[styles.thumbnail, { backgroundColor: categoryColor.bg }]}>
                <MaterialIcons name="image" size={20} color={Colors.border} />
            </View>

            <View style={styles.content}>
                <Text style={[styles.category, { color: categoryColor.text }]}>{article.category}</Text>
                <Text style={styles.title} numberOfLines={2}>
                    {article.title}
                </Text>
                <Text style={styles.meta}>
                    {article.author} · {article.date}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default ArticleCard;

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        height: 78,
        borderRadius: 12,
        borderWidth: 0.5,
        borderColor: Colors.border,
        backgroundColor: Colors.background,
        padding: Spacing.sm + 2,
        alignItems: 'center',
    },
    thumbnail: {
        width: 56,
        height: 56,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        marginLeft: Spacing.sm + 2,
    },
    category: {
        ...Typography.caption,
        fontWeight: '500',
        fontSize: 11,
    },
    title: {
        ...Typography.bodySmall,
        color: Colors.text,
        fontWeight: '500',
        marginTop: 2,
    },
    meta: {
        ...Typography.caption,
        marginTop: Spacing.xs,
    },
});
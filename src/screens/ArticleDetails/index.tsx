import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ListStackParamList } from '@navigation/types';
import { Colors, Typography, Spacing } from '@theme';
import { getInitials } from '@utils/getInitials';
import { ARTICLES, CATEGORY_COLORS } from '@screens/List/mockData';

type Props = NativeStackScreenProps<ListStackParamList, 'ArticleDetails'>;

const ArticleDetailsScreen = ({ route, navigation }: Props) => {
    const { articleId } = route.params;
    const insets = useSafeAreaInsets();
    const article = ARTICLES.find((item) => item.id === articleId);

    if (!article) {
        return (
            <View style={styles.notFound}>
                <Text style={Typography.body}>Article not found</Text>
            </View>
        );
    }

    const categoryColor = CATEGORY_COLORS[article.category] ?? {
        bg: Colors.surface,
        text: Colors.textSecondary,
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />

            <View style={[styles.header, { paddingTop: insets.top + Spacing.md }]}>
                {article.thumbnail ? (
                    <Image source={{ uri: article.thumbnail }} style={StyleSheet.absoluteFillObject} />
                ) : null}

                <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => navigation.goBack()}
                    activeOpacity={0.7}
                >
                    <MaterialIcons name="arrow-back" size={20} color={Colors.text} />
                </TouchableOpacity>
            </View>

            <ScrollView
                style={styles.card}
                contentContainerStyle={styles.cardContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.metaRow}>
                    <View style={[styles.categoryBadge, { backgroundColor: categoryColor.bg }]}>
                        <Text style={[styles.categoryText, { color: categoryColor.text }]}>
                            {article.category}
                        </Text>
                    </View>
                    <Text style={styles.dateText}>{article.date}</Text>
                </View>

                <Text style={styles.title}>{article.title}</Text>

                <View style={styles.divider} />

                <View style={styles.authorRow}>
                    {article.authorAvatar ? (
                        <Image source={{ uri: article.authorAvatar }} style={styles.avatar} />
                    ) : (
                        <View style={styles.avatar}>
                            <Text style={styles.avatarText}>{getInitials(article.author)}</Text>
                        </View>
                    )}

                    <View style={styles.authorInfo}>
                        <Text style={styles.authorName}>{article.author}</Text>
                        <Text style={styles.authorMeta}>{article.readTime} min read</Text>
                    </View>
                </View>

                <View style={styles.divider} />

                {article.body.split('\n\n').map((paragraph, index) => (
                    <Text key={index} style={styles.bodyText}>
                        {paragraph}
                    </Text>
                ))}
            </ScrollView>
        </View>
    );
};

export default ArticleDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    notFound: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: Spacing.md,
        paddingBottom: Spacing.xl,
        backgroundColor: Colors.primary,
        overflow: 'hidden',
    },
    iconButton: {
        width: 38,
        height: 38,
        borderRadius: 19,
        backgroundColor: 'rgba(255,255,255,0.85)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        flex: 1,
        backgroundColor: Colors.background,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
    },
    cardContent: {
        paddingHorizontal: Spacing.md,
        paddingTop: Spacing.md,
        paddingBottom: Spacing.xl,
    },
    metaRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    categoryBadge: {
        height: 26,
        paddingHorizontal: Spacing.sm + 2,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryText: {
        fontSize: 11,
        fontWeight: '500',
    },
    dateText: {
        ...Typography.caption,
        marginLeft: Spacing.sm + 2,
    },
    title: {
        ...Typography.h3,
        marginTop: Spacing.sm + 2,
    },
    divider: {
        height: 0.5,
        backgroundColor: Colors.border,
        marginVertical: Spacing.md,
    },
    authorRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 34,
        height: 34,
        borderRadius: 17,
        backgroundColor: '#dbeafe',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarText: {
        fontSize: 11,
        fontWeight: '500',
        color: '#1d4ed8',
    },
    authorInfo: {
        flex: 1,
        marginLeft: Spacing.sm + 2,
    },
    authorName: {
        ...Typography.bodySmall,
        color: Colors.text,
        fontWeight: '500',
    },
    authorMeta: {
        ...Typography.caption,
        marginTop: 2,
    },
    bodyText: {
        ...Typography.bodySmall,
        color: Colors.textSecondary,
        lineHeight: 20,
        marginBottom: Spacing.md,
    },
});
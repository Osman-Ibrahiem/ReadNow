import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors, Typography, Spacing } from '@theme';
import { useAuthStore } from '@store';
import type { Article } from '@types';
import { CATEGORIES, ARTICLES } from './mockData';
import ArticleCard from './ArticleCard';

const CATEGORY_FILTER_MAP: Record<string, string> = {
  Tech: 'Technology',
  Business: 'Business',
  Science: 'Science',
  Sports: 'Sports',
};

const ListScreen = () => {
  const userName = useAuthStore((state) => state.user?.name) ?? 'there';
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<(typeof CATEGORIES)[number]>('All');

  const filteredArticles = useMemo(() => {
    let articles = ARTICLES;

    if (selectedCategory !== 'All') {
      const targetCategory = CATEGORY_FILTER_MAP[selectedCategory];
      articles = articles.filter((article) => article.category === targetCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase();
      articles = articles.filter((article) => article.title.toLowerCase().includes(query));
    }

    return articles;
  }, [selectedCategory, searchQuery]);

  const renderItem = ({ item }: { item: Article }) => (
    <ArticleCard article={item} onPress={() => { }} />
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good morning,</Text>
          <Text style={styles.userName}>{userName}</Text>
        </View>

        <View style={styles.bellWrapper}>
          <MaterialIcons name="notifications-none" size={22} color={Colors.text} />
          <View style={styles.badge} />
        </View>
      </View>

      <View style={styles.searchWrapper}>
        <MaterialIcons name="search" size={18} color={Colors.text} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search articles..."
          placeholderTextColor={Colors.placeholder}
          value={searchQuery}
          onChangeText={setSearchQuery}
          returnKeyType="search"
        />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScroll}
        contentContainerStyle={styles.categoryRow}
      >
        {CATEGORIES.map((category) => {
          const isSelected = category === selectedCategory;
          return (
            <TouchableOpacity
              key={category}
              style={[styles.categoryChip, isSelected && styles.categoryChipSelected]}
              onPress={() => setSelectedCategory(category)}
              activeOpacity={0.7}
            >
              <Text style={[styles.categoryChipText, isSelected && styles.categoryChipTextSelected]}>
                {category}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <FlatList
        data={filteredArticles}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={{ height: Spacing.sm }} />}
        ListEmptyComponent={<Text style={styles.emptyText}>No articles found</Text>}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
  },
  greeting: {
    ...Typography.caption,
    color: Colors.textSecondary,
  },
  userName: {
    ...Typography.h4,
    color: Colors.text,
    marginTop: 2,
  },
  bellWrapper: {
    padding: Spacing.xs,
  },
  badge: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.accent,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    marginHorizontal: Spacing.md,
    marginTop: Spacing.md,
    paddingHorizontal: Spacing.md,
    borderRadius: 24,
    borderWidth: 0.5,
    borderColor: Colors.border,
    backgroundColor: Colors.surface,
  },
  searchIcon: {
    marginRight: Spacing.sm,
  },
  searchInput: {
    flex: 1,
    fontSize: 13,
    color: Colors.text,
    padding: 0,
  },
  categoryScroll: {
    flexGrow: 0,
    flexShrink: 0,
    marginTop: Spacing.md,
  },
  categoryRow: {
    paddingHorizontal: Spacing.md,
    gap: Spacing.sm,
    alignItems: 'center',
  },
  categoryChip: {
    height: 26,
    paddingHorizontal: Spacing.sm + 2,
    borderRadius: 13,
    borderWidth: 0.5,
    borderColor: Colors.border,
    backgroundColor: Colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryChipSelected: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  categoryChipText: {
    fontSize: 11,
    color: Colors.textSecondary,
  },
  categoryChipTextSelected: {
    color: Colors.white,
    fontWeight: '500',
  },
  listContent: {
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.xl,
  },
  emptyText: {
    ...Typography.body,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginTop: Spacing.xl,
  },
  list: {
    flex: 1,
  },
});
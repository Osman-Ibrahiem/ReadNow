import type { Article } from '@types';

export const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
    Technology: { bg: '#EFF6FF', text: '#1D4ED8' },
    Business: { bg: '#EFF6FF', text: '#1D4ED8' },
    Science: { bg: '#F0FDF4', text: '#15803D' },
    Sports: { bg: '#FFF7ED', text: '#C2410C' },
};

export const CATEGORIES = ['All', 'Tech', 'Business', 'Science', 'Sports'] as const;

export const ARTICLES: Article[] = [
    {
        id: '1',
        title: 'Apple unveils new AI features coming to iOS 19',
        body: '',
        thumbnail: '',
        author: 'TechCrunch',
        category: 'Technology',
        date: '2 hr ago',
        readTime: 3,
    },
    {
        id: '2',
        title: 'Markets rally as inflation data comes in lower',
        body: '',
        thumbnail: '',
        author: 'Reuters',
        category: 'Business',
        date: '45 min ago',
        readTime: 4,
    },
    {
        id: '3',
        title: 'Solar panel breakthrough hits record efficiency',
        body: '',
        thumbnail: '',
        author: 'Science Daily',
        category: 'Science',
        date: '1 hr ago',
        readTime: 5,
    },
    {
        id: '4',
        title: 'World Cup 2026 draw results in historic matchups',
        body: '',
        thumbnail: '',
        author: 'ESPN',
        category: 'Sports',
        date: '3 hr ago',
        readTime: 2,
    },
];
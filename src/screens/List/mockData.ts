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
        body: 'Apple today announced a major expansion of its AI capabilities set to arrive with iOS 19 this fall, spanning the OS from an enhanced Siri to AI-powered writing tools built into native apps.\n\nThe company confirmed updates will be available on iPhone 15 and later models, with some features requiring the latest hardware to function at full capacity.',
        thumbnail: '',
        author: 'TechCrunch',
        category: 'Technology',
        date: '2 hr ago',
        readTime: 3,
    },
    {
        id: '2',
        title: 'Markets rally as inflation data comes in lower',
        body: 'Global markets surged today after new inflation figures came in below analyst expectations, easing fears of further interest rate hikes in the near term.\n\nAnalysts say the data could give central banks more room to pause rate increases at their next meeting.',
        thumbnail: '',
        author: 'Reuters',
        category: 'Business',
        date: '45 min ago',
        readTime: 4,
    },
    {
        id: '3',
        title: 'Solar panel breakthrough hits record efficiency',
        body: 'Researchers have developed a new solar cell design that achieves record-breaking energy conversion efficiency, potentially lowering the cost of solar power generation.\n\nThe breakthrough could accelerate adoption of renewable energy in regions where solar has previously been less cost-effective.',
        thumbnail: '',
        author: 'Science Daily',
        category: 'Science',
        date: '1 hr ago',
        readTime: 5,
    },
    {
        id: '4',
        title: 'World Cup 2026 draw results in historic matchups',
        body: 'The official draw for the 2026 World Cup has set up several highly anticipated group stage matchups, with fans already debating the toughest group of the tournament.\n\nThe expanded 48-team format means more matches and more chances for underdog nations to make a run in the tournament.',
        thumbnail: '',
        author: 'ESPN',
        category: 'Sports',
        date: '3 hr ago',
        readTime: 2,
    },
];
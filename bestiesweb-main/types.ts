export interface Feature {
    icon: string;
    title: string;
    description: string;
}

export interface FeatureCategory {
    title: string;
    emoji: string;
    items: Feature[];
}

export interface PricingTier {
    title: string;
    subtitle: string;
    icon: string;
    highlight: boolean;
    features: string[];
    footer: string;
}

export interface Step {
    title: string;
    description: string;
}

export interface Testimonial {
    quote: string;
    author: string;
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface LogoOption {
    url: string;
    alt: string;
}

export interface LogoResult extends LogoOption {
    votes: number;
    percentage: number;
}
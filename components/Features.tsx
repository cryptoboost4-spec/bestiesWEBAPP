import React from 'react';
import { Icon } from './common/Icon';
import { FEATURES_DATA } from '../constants';
import type { Feature } from '../types';

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
    <div className="bg-surface-light/60 rounded-xl p-6 shadow-soft backdrop-blur-sm transition-transform hover:-translate-y-2 border border-white h-full">
        <div className="flex items-center gap-4">
            <div className="flex items-center justify-center size-12 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 text-primary shadow-inner-soft">
                <Icon name={feature.icon} className="text-3xl" />
            </div>
            <h4 className="font-display text-xl text-text-primary">{feature.title}</h4>
        </div>
        <p className="mt-4 text-text-secondary font-medium">{feature.description}</p>
    </div>
);

const Features: React.FC = () => {
    return (
        <section className="py-16 sm:py-24">
            {FEATURES_DATA.map((category, index) => (
                <div key={category.title} className={index > 0 ? "mt-16" : ""}>
                    <h3 className="flex items-center justify-center gap-3 font-display text-3xl sm:text-4xl text-center text-text-primary mb-12">
                       <span className="text-primary">{category.emoji}</span> {category.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {category.items.map(feature => (
                            <FeatureCard key={feature.title} feature={feature} />
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Features;

import React from 'react';
import { Icon } from './common/Icon';
import { PRICING_DATA } from '../constants';

const Pricing: React.FC = () => {
    return (
        <section className="py-16 sm:py-24">
            <h3 className="font-display text-4xl sm:text-5xl text-center text-text-primary mb-12">
                Pricing
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {PRICING_DATA.map(tier => (
                    <div key={tier.title} className={`rounded-xl p-8 shadow-soft backdrop-blur-sm border border-white ${tier.highlight ? 'bg-gradient-to-br from-primary/20 to-secondary/20' : 'bg-surface-light/60'}`}>
                        <h4 className="font-display text-3xl text-text-primary">{tier.title}</h4>
                        <p className="text-text-secondary font-semibold mt-2">{tier.subtitle}</p>
                        <ul className="mt-8 space-y-4">
                            {tier.features.map(feature => (
                                <li key={feature} className="flex items-start gap-3">
                                    <Icon name={tier.icon} className={`${tier.highlight ? 'text-primary' : 'text-green-500'} text-2xl`} />
                                    <span className="text-text-primary font-semibold">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 text-sm text-text-secondary font-bold">{tier.footer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;

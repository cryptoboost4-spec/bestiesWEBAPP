import React from 'react';
import { HOW_IT_WORKS_DATA } from '../constants';
import type { Step } from '../types';

const StepCard: React.FC<{ step: Step; index: number }> = ({ step, index }) => (
    <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
        <div className="flex-shrink-0 font-display text-7xl text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary opacity-50">
            {index + 1}
        </div>
        <div>
            <h4 className="font-display text-2xl text-text-primary">{step.title}</h4>
            <p className="mt-2 text-text-secondary font-medium">{step.description}</p>
        </div>
    </div>
);


const HowItWorks: React.FC = () => {
    return (
        <section className="py-16 sm:py-24">
             <h3 className="font-display text-4xl sm:text-5xl text-center text-text-primary mb-16">
                How Besties Works
            </h3>
            <div className="relative max-w-2xl mx-auto">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 hidden sm:block">
                    <div className="h-full w-0.5 bg-gradient-to-b from-primary/20 via-secondary/20 to-accent/20"></div>
                </div>
                <div className="space-y-12">
                    {HOW_IT_WORKS_DATA.map((step, index) => (
                        <StepCard key={step.title} step={step} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

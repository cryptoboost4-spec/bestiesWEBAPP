import React from 'react';
import { FAQ_DATA } from '../constants';

const Faq: React.FC = () => {
    return (
        <section className="py-16 sm:py-24">
            <h3 className="font-display text-4xl sm:text-5xl text-center text-text-primary mb-12">
                FAQ
            </h3>
            <div className="max-w-3xl mx-auto space-y-8">
                {FAQ_DATA.map(item => (
                    <div key={item.question} className="bg-surface-light/60 p-6 rounded-xl shadow-soft backdrop-blur-sm border border-white">
                        <h4 className="font-display text-xl text-text-primary">{item.question}</h4>
                        <p className="mt-3 text-text-secondary font-medium">{item.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faq;

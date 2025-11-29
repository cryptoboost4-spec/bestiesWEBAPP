import React from 'react';
import { Icon } from './common/Icon';
import { TESTIMONIALS_DATA } from '../constants';
import type { Testimonial } from '../types';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-surface-light/60 rounded-xl p-6 shadow-soft backdrop-blur-sm border border-white h-full flex flex-col justify-between animate-float">
        <Icon name="format_quote" className="text-primary text-4xl opacity-50" />
        <p className="my-4 text-text-primary font-semibold italic">"{testimonial.quote}"</p>
        <p className="font-display text-lg text-text-secondary text-right">— {testimonial.author}</p>
    </div>
);

const Testimonials: React.FC = () => {
    return (
        <section className="py-16 sm:py-24">
            <h3 className="font-display text-4xl sm:text-5xl text-center text-text-primary mb-12">
                Why Women Love Besties
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {TESTIMONIALS_DATA.map((testimonial, index) => (
                     <div key={testimonial.author} style={{ animationDelay: `${index * 200}ms` }}>
                        <TestimonialCard testimonial={testimonial} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;

import React from 'react';

const SubHero: React.FC = () => {
    return (
        <section className="py-16 sm:py-24 text-center">
            <div className="max-w-3xl mx-auto">
                <h3 className="font-display text-3xl sm:text-4xl text-text-primary leading-tight">
                    Your besties always say “text me when you get home”...
                </h3>
                <p className="mt-6 text-xl text-text-secondary font-semibold">
                    Now they don’t have to rely on you remembering.
                </p>
                <div className="mt-8 p-8 bg-surface-light/50 rounded-xl shadow-soft backdrop-blur-sm space-y-4 border border-white">
                    <p className="text-lg text-text-primary font-bold">You set a check-in. If you forget to tap “I’m Safe”, Besties automatically alerts your chosen friends through Messenger or WhatsApp.</p>
                    <p className="font-display text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                        No fear. No stress. Just besties looking after besties.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SubHero;

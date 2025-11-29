import React, { useState } from 'react';
import { Icon } from './Icon';

export const EmailForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setStatus('error');
            setMessage('Please enter a valid email.');
            return;
        }
        setStatus('loading');
        setMessage('');

        // SIMULATED: This is where you would call your Firebase function to save the email.
        console.log('Submitting email:', email);
        await new Promise(resolve => setTimeout(resolve, 1000));
        // End of simulation

        // On success:
        setStatus('success');
        setMessage("You're on the list! We'll be in touch. 💕");
        setEmail('');

        // On error:
        // setStatus('error');
        // setMessage("Something went wrong. Please try again.");
    };

    if (status === 'success') {
        return (
            <div className="text-center font-semibold text-primary p-4 bg-primary/10 rounded-xl w-full max-w-md mx-auto">
                {message}
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-3">
            <div className="relative">
                <Icon name="mail" className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for early access"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-transparent bg-surface-light/80 shadow-inner-soft focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all text-text-primary placeholder:text-text-secondary"
                    disabled={status === 'loading'}
                    aria-label="Email for early access"
                />
            </div>
            <button
                type="submit"
                className="w-full font-display text-lg px-8 py-4 rounded-xl shadow-soft transition-all duration-300 transform hover:scale-105 active:scale-100 flex items-center justify-center gap-2 bg-accent text-yellow-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                disabled={status === 'loading'}
            >
                {status === 'loading' ? 'Joining...' : 'Get Early Access'}
            </button>
            {status === 'error' && <p className="text-red-500 text-sm font-semibold pt-1">{message}</p>}
        </form>
    );
};

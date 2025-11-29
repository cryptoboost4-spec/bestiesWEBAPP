import React, { useState, useEffect } from 'react';
import { Button } from './common/Button';
import { EmailForm } from './common/EmailForm';
import { Icon } from './common/Icon';
import { LOGO_OPTIONS } from '../constants';
import type { LogoResult } from '../types';

interface VoteProps {
    onBack: () => void;
}

const VOTE_STORAGE_KEY = 'besties_logo_voted';

const Vote: React.FC<VoteProps> = ({ onBack }) => {
    const [hasVoted, setHasVoted] = useState(false);
    const [results, setResults] = useState<LogoResult[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isVoting, setIsVoting] = useState<number | null>(null);

    const fetchResults = async () => {
        setIsLoading(true);
        // SIMULATED: Fetch vote counts from Firebase Firestore.
        console.log('Fetching results...');
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // This is mock data. In a real app, you'd get this from Firestore.
        const mockVotes = [120, 85, 210, 55, 150]; 
        const totalVotes = mockVotes.reduce((sum, count) => sum + count, 0);

        const calculatedResults = LOGO_OPTIONS.slice(0, 5).map((logo, index) => ({
            ...logo,
            votes: mockVotes[index],
            percentage: totalVotes > 0 ? (mockVotes[index] / totalVotes) * 100 : 0,
        })).sort((a, b) => b.votes - a.votes);

        setResults(calculatedResults);
        setIsLoading(false);
    };

    useEffect(() => {
        const alreadyVoted = localStorage.getItem(VOTE_STORAGE_KEY);
        if (alreadyVoted) {
            setHasVoted(true);
            fetchResults();
        } else {
            setIsLoading(false);
        }
    }, []);

    const handleVote = async (index: number) => {
        setIsVoting(index);
        
        // SIMULATED: Call Firebase Cloud Function to cast a vote.
        console.log('Casting vote for logo index:', index);
        await new Promise(resolve => setTimeout(resolve, 1500));
        // End of simulation

        localStorage.setItem(VOTE_STORAGE_KEY, 'true');
        setHasVoted(true);
        setIsVoting(null);
        fetchResults();
    };

    if (hasVoted) {
        return (
            <section className="text-center py-20 sm:py-24 min-h-[calc(100vh-100px)]">
                <Icon name="favorite" className="text-primary text-6xl" />
                <h1 className="font-display text-4xl sm:text-5xl text-text-primary mt-4">
                    Thank you!
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary font-semibold">
                    Thanks for helping shape the future of Besties. Here’s how the votes are looking so far:
                </p>

                {isLoading && (
                    <div className="mt-12 text-primary font-semibold">Loading results...</div>
                )}
                
                {results && (
                    <div className="mt-12 max-w-2xl mx-auto space-y-4 text-left">
                        {results.map((result, index) => (
                            <div key={index} className="bg-surface-light/80 p-4 rounded-xl shadow-soft border border-white">
                                <div className="flex items-center justify-between font-bold">
                                    <div className="flex items-center gap-4">
                                        <img src={result.url} alt={result.alt} className="w-12 h-12 rounded-md object-contain bg-pink-50" />
                                        <span className="text-text-primary">{`Logo #${LOGO_OPTIONS.findIndex(l => l.url === result.url) + 1}`}</span>
                                    </div>
                                    <span className="text-primary">{result.percentage.toFixed(1)}%</span>
                                </div>
                                <div className="mt-2 w-full bg-primary/20 rounded-full h-2.5">
                                    <div className="bg-primary h-2.5 rounded-full" style={{ width: `${result.percentage}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-16 max-w-md mx-auto space-y-4">
                     <p className="font-display text-xl text-text-primary">Get notified on launch!</p>
                     <EmailForm />
                </div>
                
                 <div className="mt-12">
                    <button onClick={onBack} className="font-bold text-lg text-text-secondary hover:text-primary transition-colors">
                        Back to Home
                    </button>
                </div>
            </section>
        );
    }


    return (
        <section className="text-center py-20 sm:py-24 min-h-[calc(100vh-100px)]">
            <h1 className="font-display text-4xl sm:text-5xl text-text-primary">
                Vote for the Besties Logo
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary font-semibold">
                Help us choose the perfect look for the app that has your back. Which one feels the most like a bestie?
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {LOGO_OPTIONS.slice(0, 5).map((logo, index) => {
                    const isLoading = isVoting === index;
                    return (
                       <div 
                         key={index}
                         className="flex flex-col p-4 rounded-xl bg-surface-light/80 shadow-soft backdrop-blur-sm border-2 border-white"
                       >
                           <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-4 flex-grow flex items-center justify-center">
                             <img src={logo.url} alt={logo.alt} className="w-full h-auto object-contain rounded-md aspect-square max-w-[200px] mx-auto" />
                           </div>
                           <Button
                                onClick={() => handleVote(index)}
                                disabled={isLoading || isVoting !== null}
                                variant={'primary'}
                                className={`w-full mt-4 !text-base !py-3`}
                            >
                                {isLoading ? 'Voting...' : `Vote for this one`}
                            </Button>
                       </div>
                    )
                })}
            </div>

            <div className="mt-16 flex flex-col items-center gap-6">
                <button onClick={onBack} className="font-bold text-lg text-text-secondary hover:text-primary transition-colors">
                    Back to Home
                </button>
            </div>
        </section>
    );
};

export default Vote;
import React from 'react';
import { Button } from './common/Button';
import { EmailForm } from './common/EmailForm';

interface FooterProps {
    onNavigate: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    return (
        <footer className="py-20 sm:py-32 text-center bg-text-primary/10 mt-16">
            <div className="container mx-auto px-4">
                <h3 className="font-display text-3xl sm:text-4xl text-text-primary">
                    Your besties have your back — make it automatic.
                </h3>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary font-semibold">
                    Vote for the official Besties logo and help shape the future of the app.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-6">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button variant="disabled" iconLeft="lock">
                            Enter Site
                        </Button>
                        <Button variant="secondary" iconLeft="how_to_vote" onClick={onNavigate}>
                            Vote for the Besties Logo
                        </Button>
                    </div>
                    <div className="w-full max-w-md">
                        <EmailForm />
                    </div>
                </div>
                 <p className="mt-16 text-text-secondary font-semibold">© {new Date().getFullYear()} Besties. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

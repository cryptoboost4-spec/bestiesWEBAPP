import React from 'react';
import { Icon } from './common/Icon';

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 bg-background-light/70 p-4 backdrop-blur-md">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex size-12 shrink-0 items-center justify-start text-primary">
                    <Icon name="favorite" className="text-4xl" />
                </div>
                <h1 className="flex-1 text-center font-display text-3xl tracking-wide text-text-primary">
                    Besties
                </h1>
                <div className="w-12" />
            </div>
        </header>
    );
};

export default Header;

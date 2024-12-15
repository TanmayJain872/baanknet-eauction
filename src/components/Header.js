/* jshint esversion: 11 */

import React from 'react';

const Header = () => {

    const navBarOptions = [
        {
            id: 1,
            label: "Home",
            href: "/"
        },
        {
            id: 2,
            label: "IBC eAuction",
            href: "#"
        },
        {
            id: 3,
            label: "Property",
            href: "#"
        },
        {
            id: 4,
            label: "eAuction",
            href: "#"
        },
    ];

    return (
        <header className="bg-other-purple-500 text-white">
            <div className="container mx-auto flex justify-between items-center py-2">
                {/* Logo */}
                <div className="flex gap-4">
                    <img
                        // src="/assets/logo.png"
                        src="https://d14q55p4nerl4m.cloudfront.net/Production/Application-Documents/Generic-Instance/client-logo/PSB_Alliance_Logo.svg?v=02122024204600"
                        alt="logo"
                        tabIndex={0}
                        className="w-32"
                    />
                    <img
                        src="https://d14q55p4nerl4m.cloudfront.net/Production/Application-Documents/Generic-Instance/client-logo/eBKray_Logo.png?v=02122024204600"
                        alt="logo"
                        className="w-40"
                    />
                </div>

                {/* Navigation */}
                <nav className="flex items-center">
                    {
                        navBarOptions?.map((option) => {
                            return <a
                                href={option?.href}
                                className="relative p-6 text-sm font-medium tracking-wide group"
                            >
                                {option?.label}
                                <span className="absolute top-16 left-1/2 transform -translate-y-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                            </a>
                        })
                    }
                </nav>
            </div>
        </header>
    );
};

export default Header;


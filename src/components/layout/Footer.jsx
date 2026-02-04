import React from 'react';
import { SiDiscord, SiX, SiTelegram, SiGithub } from 'react-icons/si';

export const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/10 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-black text-white mb-2">
                        OS<span className="text-primary">WEB</span>
                    </h3>
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} OSWEB. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    {[SiX, SiTelegram, SiDiscord, SiGithub].map((Icon, i) => (
                        <a
                            key={i}
                            href="#"
                            className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110"
                        >
                            <Icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

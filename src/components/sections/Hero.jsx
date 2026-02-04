import React from 'react';
import { Globe } from '../3D/Globe';
import { ArrowRight } from 'lucide-react';
import {motion} from 'framer-motion'

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-10"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        Welcome to the future
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-6">
                        BUILD THE <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-white to-primary bg-size:[200%_auto] animate-gradient">
                            DECENTRALIZED
                        </span> <br />
                        Humanity.
                    </h1>

                    <p className="text-lg text-gray-400 max-w-lg mb-8 leading-relaxed">
                        Join a thriving community of builders, creators, and innovators shaping the Web3 ecosystem. Your journey starts here.
                    </p>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://linktr.ee/Osweb"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-8 py-4 bg-primary text-black font-bold rounded-lg overflow-hidden transition-all hover:scale-105 inline-flex items-center justify-center"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Join Community <ArrowRight className="w-4 h-4" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </a>
                        <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all">
                            Learn More
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative h-[500px] w-full flex items-center justify-center lg:justify-end"
                >
                    <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent z-10 lg:hidden" />
                    <div className="w-full h-full relative z-0">
                        <Globe />
                    </div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 text-sm"
            >
                Scroll to explore
            </motion.div>
        </section>
    );
};

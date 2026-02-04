import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github, MessageCircle } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="py-32 px-6 relative">
            <div className="absolute inset-0 bg-primary/5 clip-path-slant" />

            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-linear-to-br from-white/10 to-black border border-white/10 p-12 rounded-3xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                        Join the <br /><span className="text-primary">Revolution</span>
                    </h2>
                    <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
                        Collaborate, Learn, and Build the future of Web3 with us.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="https://linktr.ee/Osweb" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-primary text-black font-bold rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
                            <MessageCircle size={20} /> Join Community
                        </a>
                        <a href="mailto:oswebcommunity@gmail.com" className="w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                            <Mail size={20} /> Contact Us
                        </a>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10">
                        <a href="mailto:oswebcommunity@gmail.com" className="flex items-center justify-center gap-2 text-gray-400 hover:text-primary transition-colors">
                            <Mail size={16} /> oswebcommunity@gmail.com
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

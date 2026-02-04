import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
    return (
        <section id="about" className="py-32 px-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Mission</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                        Building an <br />
                        <span className="text-gray-500">Inclusive Web3 Ecosystem.</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        OSWEB is dedicated to building an inclusive Web3 ecosystem where creators, developers, and innovators can collaborate, learn, and create groundbreaking decentralized applications.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        We believe in the power of community-driven development and the transformative potential of blockchain technology to create a more equitable and transparent digital future.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-6">
                    {[
                        { title: "Community First", desc: "Building strong connections and fostering collaborative growth." },
                        { title: "Global Impact", desc: "Creating decentralized solutions that make a positive difference worldwide." },
                        { title: "Innovation", desc: "Pushing the boundaries of what's possible with blockchain technologies." }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors cursor-default"
                        >
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

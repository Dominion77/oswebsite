import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Zap, Activity } from 'lucide-react';

const StatBox = ({ icon: Icon, label, value, subtext, delay, className }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
        className={`bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col justify-between hover:border-primary/30 transition-colors group ${className}`}
    >
        <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-white/5 rounded-xl text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                <Icon size={24} />
            </div>
        </div>
        
        <div>
            <h3 className="text-4xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{value}</h3>
            <p className="text-gray-400 font-medium mb-1">{label}</p>
            <p className="text-xs text-gray-500">{subtext}</p>
        </div>
    </motion.div>
);

export const Stats = () => {
    return (
        <section className="py-20 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatBox
                        icon={Users}
                        label="Community Members"
                        value="150+"
                        subtext="+12% this month"
                        delay={0}
                        className="lg:col-span-2 bg-linear-to-br from-white/5 to-white/0"
                    />
                    <StatBox
                        icon={Globe}
                        label="Global Reach"
                        value="3+"
                        subtext="Countries represented"
                        delay={0.1}
                    />
                    <StatBox
                        icon={Zap}
                        label="Projects Developed"
                        value="5"
                        subtext="Within OSWEB"
                        delay={0.2}
                    />
                    <StatBox
                        icon={Activity}
                        label="Network Uptime"
                        value="99.9%"
                        subtext="Operational Status"
                        delay={0.3}
                        className="lg:col-span-4 bg-white/5 flex-row items-center"
                    />
                </div>
            </div>
        </section>
    );
};

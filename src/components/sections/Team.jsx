import React from 'react';
import { motion } from 'framer-motion';
import { SiX, SiTelegram, SiDiscord } from 'react-icons/si';

const TeamCard = ({ member, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group relative bg-[#111116] border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 w-full max-w-[290px]"
    >
        <div className="aspect-square w-full overflow-hidden bg-white/5 relative">
            <img
                src={member.avatar}
                alt={member.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                }}
            />
            <div className="absolute inset-0 hidden items-center justify-center bg-gray-800 text-gray-600 font-bold text-4xl">
                {member.name[0]}
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="flex gap-4">
                    <a href={member.social.twitter} className="text-white hover:text-primary"><SiX /></a>
                    <a href={member.social.telegram} className="text-white hover:text-primary"><SiTelegram /></a>
                    <a href={member.social.discord} className="text-white hover:text-primary"><SiDiscord /></a>
                </div>
            </div>
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{member.name}</h3>
            <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{member.bio}</p>
        </div>
    </motion.div>
);

export const Team = () => {
    const teamMembers = [
        {
            name: "Ofonime Ufot",
            role: "Founder",
            bio: "Blockchain enthusiast and graphics designer. Leading OSWEB's vision to onboard enthusiasts.",
            avatar: "/images/ofon.jpg",
            social: {
                twitter: "https://x.com/ofonimeufot139",
                telegram: "https://t.me/ofonimeufot139",
                discord: "https://discord.com/users/1000178498771624057"
            }
        },
        {
            name: "Lord Herrschaft",
            role: "Co-Founder",
            bio: "Software developer, Web3 educator and smart contract dev.",
            avatar: "/images/herr.png",
            social: {
                twitter: "https://x.com/Herrschaft99945",
                telegram: "https://t.me/Herrschaft77",
                discord: "https://discord.com/users/1138237550755053668"
            }
        },
        {
            name: "Pato Wizz",
            role: "Co-Founder",
            bio: "Content Creator and contributor in the web3 ecosystem. Dedicated to fostering inclusive spaces.",
            avatar: "/images/pato2.jpg",
            social: {
                twitter: "https://x.com/Pato_wizz",
                telegram: "https://t.me/Patowizzofficial",
                discord: "https://discord.com/users/956364774407536681"
            }
        },
    ];

    return (
        <section id="team" className="py-24 px-6 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Core <span className="text-primary">Team</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">The passionate individuals driving OSWEB's mission to revolutionize the Web3 ecosystem.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {teamMembers.map((member, idx) => (
                        <TeamCard key={idx} member={member} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

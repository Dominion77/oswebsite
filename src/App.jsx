import React, { useEffect } from 'react';
import { ChevronDown, Users, Globe, Zap,Mail } from 'lucide-react';
import { SiDiscord, SiX, SiTelegram } from 'react-icons/si';
import './App.css';

const OSWEBWebsite = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Ofonime Ufot",
      role: "Founder",
      bio: "Blockchain enthusiast and graphics designer. Leading OSWEB's vision to onboard enthusiasts, democratize Web3 development and make blockchain technology accessible to everyone.",
      avatar: "/images/ofon.jpg",
      social: {
        twitter: "https://x.com/ofonimeufot139",
        telegram: "https://t.me/ofonimeufot139",
        discord: "https://discord.com/users/1000178498771624057"
      }
    },
    {
      id: 2,
      name: "Lord Herrschaft",
      role: "Co-Founder",
      bio: "Full-stack developer, Web3 educator and upcoming smart contract architect. Passionate about crafting insightful content and building secure, scalable Web3 infrastructure.",
      avatar: "/images/herr.png",
      social: {
        twitter: "https://x.com/Herrschaft99945",
        telegram: "https://t.me/Herrschaft77",
        discord: "https://discord.com/users/1138237550755053668"
      }
    },
    {
      id: 3,
      name: "Pato Wizz",
      role: "Co-Founder",
      bio: "Content Creator and long time contributor in the web3 ecosystem. Dedicated to fostering inclusive spaces where buiiders, learners and curious minds can learn, collaborate, and shape the future of decentralized technology.",
      avatar: "/images/pato.jpg",
      social: {
        twitter: "https://x.com/Pato_wizz",
        telegram: " https://t.me/Patowizzofficial",
        discord: "https://discord.com/users/956364774407536681"
      }
    },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.fade-in');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <span className="logo-os">OS</span>
            <span className="logo-web">WEB</span>
          </div>
          <div className="nav-menu">
            <button onClick={() => scrollToSection('home')}>Home</button>
            <button onClick={() => scrollToSection('about')}>About</button>
            <button onClick={() => scrollToSection('team')}>Team</button>
            <button onClick={() => scrollToSection('contact')}>Join Us</button>
          </div>
        </div>
      </nav>

      
      <section id="home" className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div>
            <div className="hero-title">OSWEB</div>
            <div className="hero-subtitle">Web3 Community Platform</div>
          </div>
          <p className="hero-description">
            Empowering web 3 enthusiasts and developers to build the decentralized future. Join our community of innovators, creators, and visionaries shaping the next generation of web technology.
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('contact')} className="btn-primary">
              Join Community
            </button>
            <button onClick={() => scrollToSection('about')} className="btn-secondary">
              Learn More
            </button>
          </div>
        </div>
        <div className="scroll-indicator">
          <ChevronDown />
        </div>
      </section>

      
      <section id="about" className="section" data-animate>
        <div className="section-content fade-in">
          <h2 className="section-title">
            About <span className="accent">OSWEB</span>
          </h2>
          <div className="about-grid">
            <div className="about-text">
              <h3>Our Mission</h3>
              <p>
                OSWEB is dedicated to building an inclusive Web3 ecosystem where creators, developers, and innovators can collaborate, learn, and aslo create groundbreaking decentralized applications.
              </p>
              <h3>Our Vision</h3>
              <p>
                We envision a world where blockchain technology is accessible to everyone, solving real-world problems and shaping the future of Web3.
              </p>
            </div>
            <div className="feature-cards">
              <div className="feature-card">
                <Users />
                <h4>Community First</h4>
                <p>Building strong connections and fostering collaborative growth within our developer community.</p>
              </div>
              <div className="feature-card">
                <Globe />
                <h4>Global Impact</h4>
                <p>Creating decentralized solutions that make a positive difference worldwide.</p>
              </div>
              <div className="feature-card">
                <Zap />
                <h4>Innovation</h4>
                <p>Pushing the boundaries of what's possible with blockchain and Web3 technologies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section id="team" className="section section-alt" data-animate>
        <div className="section-content fade-in">
          <h2 className="section-title">
            Meet Our <span className="accent">Team</span>
          </h2>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-avatar-container">
                  <img src={member.avatar} alt={member.name} className="team-avatar" />
                  <div className="team-avatar-overlay"></div>
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
                <div className="team-social">
                  <SiX onClick={() => window.open(member.social.twitter, '_blank')} />
                  <SiTelegram onClick={() => window.open(member.social.telegram, '_blank')} />
                  <SiDiscord onClick={() => window.open(member.social.discord, '_blank')}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section id="contact" className="section" data-animate>
        <div className="section-content fade-in">
          <h2 className="section-title">
            Join the <span className="accent">Revolution</span>
          </h2>
          <p className="hero-description">
            Ready to be part of the Web3 future? Connect with us and join a community of passionate developers, innovators, and blockchain enthusiasts.
          </p>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>For Developers</h3>
              <p>Collaborate on cutting-edge Web3 projects and enhance your blockchain skills.</p>
              <button className="btn-primary" onClick= {() => window.open("https://linktr.ee/Osweb", "_blank")}>Join as Developer</button>
            </div>
            <div className="contact-card">
              <h3>For Enthusiasts</h3>
              <p>Stay updated with the latest Web3 trends and network with like-minded individuals.</p>
              <button className="btn-secondary" onClick= {() => window.open("https://linktr.ee/Osweb", "_blank")}>Join Community</button>
            </div>
          </div>
          <div className="contact-info">
            <Mail />
            <span>oswebcommunity@gmail.com</span>
          </div>
        </div>
      </section>

      
      <footer className="footer">
        <div className="section-content">
          <div className="logo">
            <span className="logo-os">OS</span>
            <span className="logo-web">WEB</span>
          </div>
          <p>Building the decentralized future, together.</p>
          <p className="copyright">© 2025 OSWEB Community. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default OSWEBWebsite;

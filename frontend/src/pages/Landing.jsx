import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
    // Reset body styles to ensure full-width layout
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = 'auto';
    };
  }, []);

  const styles = {
    wrapper: {
      height: '100vh',
      width: '100vw',
      overflowY: 'scroll',
      overflowX: 'hidden',
      scrollSnapType: 'y mandatory',
      backgroundColor: '#0a0a0a', // Rich Studio Black
      fontFamily: "'Inter', sans-serif",
      margin: 0,
      padding: 0
    },
    section: {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      scrollSnapAlign: 'start',
      position: 'relative',
      overflow: 'hidden',
      margin: 0,
      padding: 0
    },
    topNav: {
      position: 'fixed',
      top: '40px',
      right: '40px',
      display: 'flex',
      gap: '20px',
      zIndex: 1000
    },
    accessBtn: {
      padding: '18px 45px',
      background: 'transparent',
      color: '#d4af37', // Gold
      border: '1px solid #d4af37',
      fontSize: '14px',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '3px',
      cursor: 'pointer',
      position: 'relative',
      transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
      backdropFilter: 'blur(5px)'
    },
    registerBtn: {
      padding: '18px 45px',
      background: '#d4af37', // Gold
      color: '#000',
      border: 'none',
      fontSize: '15px',
      fontWeight: '800',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      cursor: 'pointer',
      position: 'relative',
      boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      borderRadius: '2px',
      overflow: 'hidden'
    },
    heroBackground: {
      position: 'absolute',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'radial-gradient(circle at center, #1c1c1c 0%, #0f0f0f 40%, #050505 100%)',
      zIndex: 0,
      width: '100%'
    },
    mainHeading: {
      fontSize: 'clamp(3rem, 12vw, 10rem)',
      fontWeight: '900',
      lineHeight: '0.9',
      margin: 0,
      textTransform: 'uppercase',
      letterSpacing: '-4px',
      color: '#ffffff',
      textShadow: '0 20px 80px rgba(255, 255, 255, 0.1)'
    }
  };

  return (
    <div style={styles.wrapper}>
      {/* Top Navigation */}
      <nav style={styles.topNav}>
        <button
          style={styles.registerBtn}
          onClick={() => navigate('/register')}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.background = '#f1c40f'; // Brighter Gold
            e.target.style.boxShadow = '0 20px 50px rgba(212, 175, 55, 0.5)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.background = '#d4af37';
            e.target.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.3)';
          }}
        >
          <span style={{ position: 'relative', zIndex: 2 }}>Join the Agency</span>
          <div style={{
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '50%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            transform: 'skewX(-25deg)',
            animation: 'shimmer 3s infinite'
          }} />
        </button>

        <button
          style={styles.accessBtn}
          onClick={() => navigate('/login')}
          onMouseOver={(e) => {
            e.target.style.background = '#d4af37';
            e.target.style.color = '#000';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = '#d4af37';
          }}
        >
          Client Portal
        </button>
      </nav>

      {/* Hero Section */}
      <section style={styles.section}>
        <div style={styles.heroBackground} />
        <main style={{ zIndex: 10, textAlign: 'center', opacity: active ? 1 : 0, transition: 'all 1.2s ease-out', width: '100%' }}>
          <span style={{
            color: '#d4af37',
            letterSpacing: '12px',
            textTransform: 'uppercase',
            fontSize: '13px',
            fontWeight: '600',
            display: 'block',
            marginBottom: '20px',
            opacity: 0.8
          }}>
            Addis Ababa — Est. 2026
          </span>
          <h1 style={styles.mainHeading}>
            Addis Photo<br />
            <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>& Media</span>
          </h1>
          <p style={{
            color: '#a0a0a0',
            maxWidth: '600px',
            margin: '40px auto',
            fontSize: '17px',
            lineHeight: '1.7',
            padding: '0 20px',
            letterSpacing: '0.5px'
          }}>
            Capture the essence of the capital. We are a premium creative house 
            specializing in cinematic storytelling and high-fidelity production.
          </p>
          <div 
            style={{
              marginTop: '30px',
              color: '#d4af37',
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '2px',
              animation: 'pulse 2s infinite',
              cursor: 'pointer',
              textTransform: 'uppercase'
            }}
            onClick={() => navigate('/register')}
          >
            Explore the Collective ↓
          </div>
        </main>
      </section>

      {/* Secondary Section */}
      <section style={{ ...styles.section, background: '#080808', width: '100vw' }}>
        <h2 style={{ color: '#ffffff', fontSize: '6vw', fontWeight: '900', margin: 0, textAlign: 'center' }}>
          Visionary <span style={{ color: '#d4af37' }}>Execution.</span>
        </h2>
        <p style={{ color: '#666', marginTop: '20px', fontSize: '1.1rem', maxWidth: '500px', textAlign: 'center' }}>
          From the streets of Bole to the world stage, we define the visual standard.
        </p>
        <div style={{
          marginTop: '50px',
          width: '100px',
          height: '2px',
          background: '#d4af37',
          opacity: 0.6
        }} />
      </section>

      {/* Global Styles */}
      <style>
        {`
          @keyframes pulse {
            0% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.05); }
            100% { opacity: 0.5; transform: scale(1); }
          }
          @keyframes shimmer {
            0% { left: -100%; }
            30% { left: 150%; }
            100% { left: 150%; }
          }
          ::-webkit-scrollbar { width: 6px; }
          ::-webkit-scrollbar-track { background: #050505; }
          ::-webkit-scrollbar-thumb { background: #d4af37; }
        `}
      </style>
    </div>
  );
};

export default Landing;

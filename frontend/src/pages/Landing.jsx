import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
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
      backgroundColor: '#ffffff', // Clean white base
      fontFamily: "'Playfair Display', serif", // Editorial feel
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
      top: '0',
      left: '0',
      width: '100%',
      height: '100px',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: '0 60px',
      boxSizing: 'border-box',
      gap: '40px',
      zIndex: 1000,
      backgroundColor: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #eee'
    },
    accessBtn: {
      padding: '12px 0',
      background: 'transparent',
      color: '#000',
      border: 'none',
      borderBottom: '2px solid #000',
      fontSize: '12px',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '4px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    registerBtn: {
      padding: '15px 35px',
      background: '#000',
      color: '#fff',
      border: 'none',
      fontSize: '12px',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '3px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      borderRadius: '0' // Sharp corners for luxury look
    },
    heroBackground: {
      position: 'absolute',
      top: 0, left: 0, right: 0, bottom: 0,
      background: '#f8f8f8', 
      zIndex: 0,
      width: '100%'
    },
    mainHeading: {
      fontSize: 'clamp(2.5rem, 10vw, 8rem)',
      fontWeight: '400',
      lineHeight: '1',
      margin: 0,
      textTransform: 'none',
      letterSpacing: '-2px',
      color: '#1a1a1a',
      fontStyle: 'italic'
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
            e.target.style.background = '#333';
            e.target.style.letterSpacing = '5px';
          }}
          onMouseOut={(e) => {
            e.target.style.background = '#000';
            e.target.style.letterSpacing = '3px';
          }}
        >
          <span style={{ position: 'relative', zIndex: 2 }}>Join the Agency</span>
        </button>

        <button
          style={styles.accessBtn}
          onClick={() => navigate('/login')}
          onMouseOver={(e) => {
            e.target.style.paddingRight = '15px';
            e.target.style.opacity = '0.6';
          }}
          onMouseOut={(e) => {
            e.target.style.paddingRight = '0';
            e.target.style.opacity = '1';
          }}
        >
          Client Portal
        </button>
      </nav>

      {/* Hero Section */}
      <section style={styles.section}>
        <div style={styles.heroBackground} />
        <main style={{ zIndex: 10, textAlign: 'center', opacity: active ? 1 : 0, transition: 'all 1.5s', width: '100%' }}>
          <span style={{
            color: '#888',
            letterSpacing: '8px',
            textTransform: 'uppercase',
            fontSize: '11px',
            fontWeight: '400',
            display: 'block',
            marginBottom: '30px'
          }}>
            Creative Direction — Addis Ababa
          </span>
          <h1 style={styles.mainHeading}>
            Addis Photo<br />
            <span style={{ color: '#000', fontWeight: '900', fontStyle: 'normal' }}>& Media</span>
          </h1>
          <p style={{
            color: '#444',
            maxWidth: '500px',
            margin: '50px auto',
            fontSize: '16px',
            lineHeight: '1.8',
            padding: '0 20px',
            fontWeight: '300'
          }}>
            Crafting visual narratives for the modern era. We specialize in 
            high-end photography and cinematic production that transcends borders.
          </p>
          <div 
            style={{
              marginTop: '40px',
              color: '#000',
              fontSize: '11px',
              letterSpacing: '2px',
              fontWeight: '700',
              textTransform: 'uppercase',
              textDecoration: 'underline',
              cursor: 'pointer'
            }}
            onClick={() => navigate('/register')}
          >
            Become a Creative
          </div>
        </main>
      </section>

      {/* Secondary Section */}
      <section style={{ ...styles.section, background: '#1a1a1a', width: '100vw' }}>
        <h2 style={{ color: '#fff', fontSize: '5vw', fontWeight: '300', margin: 0, textAlign: 'center' }}>
          Minimal. <span style={{ fontWeight: '800' }}>Timeless.</span>
        </h2>
        <p style={{ color: '#fff', opacity: 0.5, marginTop: '30px', fontSize: '1rem', letterSpacing: '1px' }}>
          Redefining Ethiopian aesthetics through a global lens.
        </p>
        <div style={{
          marginTop: '60px',
          width: '40px',
          height: '1px',
          background: '#fff',
        }} />
      </section>

      {/* Global Styles */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,900;1,400&display=swap');
          
          ::-webkit-scrollbar { width: 5px; }
          ::-webkit-scrollbar-track { background: #fff; }
          ::-webkit-scrollbar-thumb { background: #000; }
          
          body {
            background-color: #ffffff;
            color: #000;
          }
        `}
      </style>
    </div>
  );
};

export default Landing;

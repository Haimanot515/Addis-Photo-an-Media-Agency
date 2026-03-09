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
      // Sunset Gradient Background
      background: 'linear-gradient(135deg, #FF4500 0%, #FFD700 50%, #8B0000 100%)',
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
      padding: '15px 30px',
      background: '#ffffff',
      color: '#FF4500',
      border: 'none',
      fontSize: '14px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      cursor: 'pointer',
      borderRadius: '50px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
    },
    registerBtn: {
      padding: '15px 30px',
      background: '#000000',
      color: '#FFD700',
      border: 'none',
      fontSize: '14px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      cursor: 'pointer',
      borderRadius: '50px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
    },
    mainHeading: {
      fontSize: 'clamp(3rem, 12vw, 9rem)',
      fontWeight: '900',
      lineHeight: '0.9',
      margin: 0,
      textAlign: 'center',
      color: '#ffffff',
      textShadow: '4px 4px 0px rgba(0,0,0,0.3)'
    }
  };

  return (
    <div style={styles.wrapper}>
      <nav style={styles.topNav}>
        <button style={styles.registerBtn} onClick={() => navigate('/register')}>Join Agency</button>
        <button style={styles.accessBtn} onClick={() => navigate('/login')}>Login</button>
      </nav>

      <section style={styles.section}>
        <main style={{ textAlign: 'center', opacity: active ? 1 : 0, transition: 'all 1s' }}>
          <h1 style={styles.mainHeading}>
            ADDIS<br />
            <span style={{ color: '#000000' }}>PHOTO</span>
          </h1>
          <p style={{ color: '#ffffff', fontSize: '1.5rem', fontWeight: '500', marginTop: '20px', textTransform: 'uppercase', letterSpacing: '2px' }}>
            Vivid Visuals. Ethiopian Soul.
          </p>
        </main>
      </section>

      <section style={{ ...styles.section, background: '#ffffff' }}>
        <h2 style={{ fontSize: '5rem', color: '#8B0000', marginBottom: '20px' }}>Our Identity</h2>
        <p style={{ color: '#333', fontSize: '1.2rem', maxWidth: '600px', textAlign: 'center' }}>
          Blending traditional heritage with cutting-edge digital media production in the heart of Addis Ababa.
        </p>
        
      </section>
    </div>
  );
};

export default Landing;

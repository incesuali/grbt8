import React from 'react';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        textAlign: 'center',
        maxWidth: '500px'
      }}>
        <h1 style={{ color: '#333', marginBottom: '1rem' }}>
          GRBT8 Projesi
        </h1>
        <p style={{ color: '#666', lineHeight: '1.6' }}>
          Bu proje Vercel'den GitHub'a başarıyla aktarıldı! 🎉
        </p>
        <button 
          onClick={() => alert('Proje çalışıyor!')}
          style={{
            background: '#667eea',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '1rem',
            transition: 'background 0.3s'
          }}
        >
          Test Et
        </button>
      </div>
    </div>
  );
}

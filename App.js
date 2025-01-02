import React, { useState } from 'react';

// Inline styling for the pages
const styles = {
  navbar: {
    padding: '10px 20px',
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center',
    marginBottom: '20px',
  },
  page: {
    padding: '20px',
    borderRadius: '5px',
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
    marginTop: '20px',
  },
  home: {
    backgroundColor: '#cfe2f3',
  },
  about: {
    backgroundColor: '#f9e4e1',
  },
  contact: {
    backgroundColor: '#e2f9c3',
  },
};

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPageContent = () => {
    switch (activePage) {
      case 'home':
        return <div style={{ ...styles.page, ...styles.home }}>Welcome to Home</div>;
      case 'about':
        return <div style={{ ...styles.page, ...styles.about }}>About Us</div>;
      case 'contact':
        return <div style={{ ...styles.page, ...styles.contact }}>Contact Us</div>;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div>
      <div style={styles.navbar}>
        <a
          href="#"
          onClick={() => setActivePage('home')}
          style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}
        >
          Home
        </a>
        <a
          href="#"
          onClick={() => setActivePage('about')}
          style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}
        >
          About
        </a>
        <a
          href="#"
          onClick={() => setActivePage('contact')}
          style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}
        >
          Contact
        </a>
      </div>
      {renderPageContent()}
    </div>
  );
}

export default App;

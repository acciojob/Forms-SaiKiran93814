import React from 'react';

function Card({ children }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px', maxWidth: '400px', margin: '20px auto' }}>
      {children}
    </div>
  );
}

export default Card;

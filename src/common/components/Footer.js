import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="text-center copyright">© REACT APP {new Date().getFullYear()}</div>
    </footer>
  );
}

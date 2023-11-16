import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-line" />
        <p className="footer-p">
          Copyright &copy; {new Date().getFullYear()}{' '}
          <strong>DaYe, PORTFOLIO</strong> All rights reserved.
        </p>
      </footer>
    </div>
  );
}

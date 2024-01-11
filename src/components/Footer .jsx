import Link from 'next/link';
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <p>&copy; 2024 ShaqqiTech</p>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/shaqqitech" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </Link>
          <Link href="https://linkedin.com/in/shaqqitech" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </Link>
          <Link href="https://x.com/shaqqitech" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </Link>
          <Link href="https://instagram.com/shaqqitech" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

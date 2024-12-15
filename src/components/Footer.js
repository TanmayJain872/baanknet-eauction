/* jshint esversion: 11 */

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#303087] text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 BAANKNET. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-yellow-500">Facebook</a>
          <a href="#" className="text-yellow-500">Twitter</a>
          <a href="#" className="text-yellow-500">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

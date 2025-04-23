import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-3 px-6 bg-gray-800 text-gray-400 text-sm">
      <div className="max-w-4xl mx-auto text-center">
        <p>
          Built with React, TypeScript, and Tailwind CSS | {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
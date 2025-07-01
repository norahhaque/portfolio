import React from 'react';

export default function Footer() {
  return (
    <footer className="mb-8 px-3 text-center text-stone-500">
      <small className="mb-1.5 block text-[0.65rem]">
        &copy; 2025 Norah Haque. All rights reserved.
      </small>
      <p className="text-[0.65rem] leading-tight">
        <span className="font-semibold">About this website:</span> Powered by React, Next.js, TypeScript, Tailwind, Framer Motion, and Vercel.
      </p>
    </footer>
  );
}

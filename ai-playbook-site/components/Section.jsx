import React from 'react';

export default function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <div className="pl-4 border-l-4 border-blue-500">{children}</div>
    </section>
  );
}
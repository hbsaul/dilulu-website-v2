import React from 'react';

interface StatItemProps {
  number: string;
  label: string;
  icon?: string;
}

export default function StatItem({ number, label, icon }: StatItemProps) {
  return (
    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
      {icon && <div className="text-earth-green text-3xl mb-2">{icon}</div>}
      <div className="stat-number text-earth-green text-3xl font-bold mb-2">{number}</div>
      <div className="stat-label text-gray-700">{label}</div>
    </div>
  );
}

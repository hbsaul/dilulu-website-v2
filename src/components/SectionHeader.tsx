import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  titleColor?: 'default' | 'earth-green' | 'white';
}

export default function SectionHeader({
  title,
  subtitle,
  alignment = 'center',
  titleColor = 'earth-green'
}: SectionHeaderProps) {
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }[alignment];

  const titleColorClass = {
    default: 'text-night-black',
    'earth-green': 'text-earth-green',
    white: 'text-white'
  }[titleColor];

  return (
    <div className={`section-header mb-12 ${alignmentClass}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${titleColorClass}`}>{title}</h2>
      {subtitle && <p className="text-lg max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
}

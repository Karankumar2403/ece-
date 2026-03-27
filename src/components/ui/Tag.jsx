import React from 'react';

const Tag = ({ label, color = 'cyan' }) => {
  const colorMap = {
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    gold: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    orange: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  };

  const selectedClass = colorMap[color] || colorMap.cyan;

  return (
    <span className={`inline-block px-3 py-1 font-mono text-xs rounded-full border ${selectedClass}`}>
      {label}
    </span>
  );
};

export default Tag;

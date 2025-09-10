// Simple Button component
import React, { useState } from 'react';

export function Button({ children, className = '', style = {}, ...props }) {
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);

  const baseStyle = {
    borderRadius: 'var(--radius)',
    padding: '0.5rem 1rem',
    fontWeight: 'var(--font-weight-medium)',
    fontSize: '1rem',
    boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
    background: 'var(--primary)',
    color: 'var(--primary-foreground)',
    border: 'none',
    outline: focus ? '2px solid var(--ring)' : 'none',
    transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
    ...(hover && {
      background: 'var(--secondary)',
      color: 'var(--secondary-foreground)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    }),
  };

  return (
    <button
      style={{ ...baseStyle, ...style }}
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      {...props}
    >
      {children}
    </button>
  );
}

import React from 'react';

export function Badge({ children, style }) {
  return (
    <span style={{ display: 'inline-block', fontWeight: 600, fontSize: 14, padding: '4px 12px', borderRadius: 8, ...style }}>
      {children}
    </span>
  );
}

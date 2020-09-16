import React, { useState } from 'react';

export function HookRandomColor(props) {
  const [color, setColor] = useState('#39D1B4');
  const handleClick = () => {
    setColor(
      '#' +
        (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase(),
    );
  };

  return (
    <div className="Location">
      <button className="location-title" onClick={handleClick}>
        Change color
      </button>
      <h1 className="location-title" style={{ background: color }}>
        {' '}
      </h1>
    </div>
  );
}

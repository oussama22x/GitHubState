import React from 'react';
import '../styling/graphs.css'
function Bar({ Data }) {
  return (
    <div>
      <h4>📊 Languages:</h4>
      {Data.map(({ lang, percent }) => (
        <div key={lang} className="language-row">
          <span className="language-name">{lang}</span>
          <span className="language-bar">
            <span
              className="language-fill"
              style={{ width: `${percent}%` }} // You can keep this inline for bar width or do it in CSS
            />
          </span>
          <span className="language-percent">{percent}%</span>
        </div>
      ))}
    </div>
  );
}

export default Bar;

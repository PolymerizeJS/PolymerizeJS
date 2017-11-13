import React from 'react';
import Alinea from '../../../assets/apollo/img/Alinea.jpg';

function Image() {
  return (
    <div className="img-container">
      <img
        src={`./dist/${Alinea}`}
        alt="web template"
        style={{ width: '100%' }}
      />
    </div>
  );
}

export default Image;

import React, { useState } from 'react';
import Components_01 from './Components_01';

function Components_03() {
  const [showComponent, setShowComponent] = useState(false);

  const handleButtonClick = () => {
    setShowComponent(!showComponent);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>
        {showComponent ? 'Esconder Criador' : 'Mostrar Criador'}
      </button>
      {showComponent && <Components_01 />}
    </div>
  );
}

export default Components_03;
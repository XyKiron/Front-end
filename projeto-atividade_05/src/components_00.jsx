import React, { useState } from 'react';

const FocusBlurExample = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };
  
  const handleBlur = () => {
    setIsFocused(false);
  };
  
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <p>Componente em React que aplique onFocus e onBlur</p>
      <input 
        type="text"
        value={inputValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder='Clique ou aperte TAB para focar'
      />
      <div>
        {isFocused ? <p>Esta Focado!</p> : <p>Não está focado.</p>}
      </div>
      <p>Valor do Input: {inputValue}</p>
    </div>
  );
}

export default FocusBlurExample;

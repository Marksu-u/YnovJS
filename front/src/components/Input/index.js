import React from 'react';

const Index = (props) => {
  return (
    <div className="input__wrapper">
      <label>{props.titleLabel}</label>
      <input
        type={props.inputType}
        placeholder={props.inputPlaceholder}
        name={props.inputName}
        value={props.inputValue}
        onChange={props.inputOnChange}
      />
    </div>
  );
}

export default Index;

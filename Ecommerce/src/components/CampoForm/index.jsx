import React from 'react'


const CampoForm = ({ tipo = 'text', nome, valor, setFormData,onFocus,onClick}) => {

  const handleChange = (event) => {
    
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <input
      autoComplete='off'
      name={nome}
      type={tipo}
      value={valor}
      onChange={handleChange}
      onFocus={onFocus}
      onClick={onClick}
    />
  )
}

export default CampoForm
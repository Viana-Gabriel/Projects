import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import CampoForm from '@/components/CampoForm';


import { FaSearch } from "react-icons/fa";
import style from './Buscador.module.css';
import ListaDeSugestoes from './ListadeSuguestao';

import produtos from '@/db/produtos.json';


const Search = () => {

  const [busca, setBusca] = useState('')
  const valorBusca = Object.values(busca).toString().toLowerCase()

  const [mostrarSugestoes, setMostrarSugestoes] = useState(false);
  const navigate = useNavigate()


  const handleSearch = useCallback(
    (e) => {
      e.preventDefault();
      if (valorBusca.trim()) {
        navigate(`/produtos?busca=${valorBusca}`);
      }
      setMostrarSugestoes(false)
    },
    [navigate, valorBusca]
  );

  return (
    <div className={style.ContainerSearch}>
      <form className={style.Search} onSubmit={handleSearch}>
        <CampoForm setFormData={setBusca} nome={'busca'} valor={valorBusca} tipo={'search'} onFocus={() => setMostrarSugestoes(true)} onClick={() => setMostrarSugestoes(true)} />
        <button type='submit'> <FaSearch size={20} color='black' /> </button>
      </form>
      {valorBusca != '' ?
        <ListaDeSugestoes {...produtos} valorBusca={valorBusca} mostrarSugestoes={mostrarSugestoes} setMostrarSugestoes={setMostrarSugestoes} setBusca={setBusca} />
        : ''}
    </div>

  )
}

export default Search
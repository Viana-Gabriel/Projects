
const FomatadorMoedas = ({ valor }) => {
  const formatarParaReal = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return formatarParaReal(valor)
};

export default FomatadorMoedas
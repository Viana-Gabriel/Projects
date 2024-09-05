import Botao from "@/components/Botao"
import imagem from "../../../../../public/assets/ImagensRecursos/controle.png"
const RecursoFiltrado = ({ recursoFiltrado }) => {
  return (
    <>
      {recursoFiltrado.length < 1 ?
        <div className={'flex flex-col justify-around mt-16 md:flex-row'}>
           <img src={imagem} alt="" />
          <div className={'lg:w-[50%]'}>
            <p>O controle de despesas  é essencial para manter a saúde financeira e evitar endividamentos. Ao monitorar gastos e receitas, é possível identificar excessos e oportunidades de economia. Criar um orçamento mensal ajuda a planejar melhor os gastos, priorizando o que é realmente importante.</p>
            <Botao>Saiba Mais</Botao>
          </div>
        </div> :
        recursoFiltrado.map(item => (
          <div key={item.id} className={'flex flex-col justify-around mt-16 md:flex-row'}>
            <img src={item.imagem} alt="" />
            <div className={'lg:w-[50%]'}>
              <p>{item.texto}</p>
              <Botao>Saiba Mais</Botao>
            </div>
          </div>
        ))
      }

    </>


  )
}

export default RecursoFiltrado
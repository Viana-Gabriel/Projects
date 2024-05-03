import conexao from "../database/conexao.js"

class LivrosController{
  /* Metodo de listar tudo */
  index(req, res){
    /* res.status(200).send(livros) */
    const sql = "SELECT * FROM livros;"
    conexao.query(sql, (error, result) => {
      if (error) {
        res.status(404).json({ "error": error })
      } else {
        res.status(200).json(result)
      }
    })
  }
  /*Metodo de listar tudo por id */
  show(req, res){

    const id = req.params.id
    const sql = "SELECT * FROM livros WHERE id=?;"
  
    conexao.query(sql, id, (error, result) => {
  
      const row = result[0]
  
      if (error) {
        res.status(404).json({ "error": error })
      } else {
        res.status(200).json(row)
      }
    })
  }
  /* Metodo para criacao de dados */
  store(req, res){

    const dados = req.body

    console.log(dados)
    const sql = "INSERT INTO livros SET ?;"
  
    conexao.query(sql, dados, (error, result) => {
      if (error) {
        res.status(400).json({ "error": error })
      } else {
        res.status(200).json(result)
      }
    })
  }
  /* Metodo para atualização de dados */
  uptade(req, res){

    const id = req.params.id
    const sql = "DELETE FROM livros WHERE id=?;"
  
    conexao.query(sql, id, (error, result) => {
      if (error) {
        res.status(404).json({ "error": error })
      } else {
        res.status(200).json(result)
      }
    })
  }

  /* Metodo para exclusão de dados */
  delete(req, res){

  const id = req.params.id
  const dados = req.body
  const sql = "UPDATE livros SET? WHERE id=?;"

  conexao.query(sql,[id,dados], (error, result) => {
    if (error) {
      res.status(400).json({ "error": error })
    } else {
      res.status(200).json(result)
    }
  })
}

}


export default new LivrosController()
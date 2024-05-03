import app from "./src/app.js";

const PORT = 3001

app.listen(PORT, () => {
  console.log(` servidor rodando em http://localhost:${PORT}`)
})

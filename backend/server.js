const express =
require("express")
//O require("express") procura o express que foi instalado antes")
const cors = require("cors");
//Quero utilizar o pacote cors
const app = express ();
//Criar nossa aplicação
app.use(cors());
//Use o cors nesta aplicação 
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
    produto: "Kinder Bueno",
    preco: "10,99",
    categoria: "Chocolate"
   });
});
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
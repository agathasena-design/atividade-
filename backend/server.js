const express =
require("express")
//O require("express") procura o express que foi instalado antes")
const colors = require("cors");
//Quero utilizar o pacote cors
const app = express ();
//Criar nossa aplicação
app.use(cors());
//Use o corsnesta aplicação 
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
    produto: "Kinder Bueno"
    preco: "10,99"
   });
});
app.listen(3000, ( => {
    console.log("Servidor rodando na porta 3000");
}))
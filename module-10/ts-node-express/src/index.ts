import express ,  { Express, request, response } from "express";
import helmet from "helmet";


const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/' , (req , res) => {
  res.send('<h1>Hello world</h1>');
})

app.listen(PORT, () => console.log(`servidor rodando na porta ${PORT}`))
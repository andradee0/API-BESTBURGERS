import cors from 'cors';
import express from 'express';
import 'dotenv/config';
import Vendas from './controller/vendas/vendasController.js';
import Despesas from './controller/despesas/despesasController.js';
import Cadastro from './controller/cadastro/cadastroController.js';
import Inventario from './controller/inventario/inventarioController.js';
import VendaseDespesas from './controller/vendasedepesas/vendasedespesasController.js';
import Entrar from './controller/entrar/entrarController.js';
import endpointes from './controller/endpointes.js';

const servidor = express()
servidor.use(express.json())
servidor.use(cors())
servidor.use(Vendas, Despesas, Cadastro, Inventario, VendaseDespesas, Entrar)
servidor.use(endpointes);




servidor.listen(process.env.PORT, () => console.log(`  A API SUBIU NA PORTA ${process.env.PORT}`))
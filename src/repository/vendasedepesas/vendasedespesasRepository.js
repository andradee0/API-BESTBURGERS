import con from "../connection.js";

export default async function totalVendas(){

const comando = `

select sum(ds_preco) as total_vendas
from tb_vendas;
`

let resposta = await con.query(comando)
let registro = resposta[0]

return registro
}

export async function totalDespesas(){

const comando = `


select sum(ds_preco) as total_despesas
from tb_despesas;

`

let resposta = await con.query(comando)
let registro = resposta[0]

return registro
}

export  async function Total(){

const comando = `


select 
    (select sum(ds_preco) from tb_vendas) - 
    (select sum(ds_preco) from tb_despesas) as saldo;


`

let resposta = await con.query(comando)
let registro = resposta[0]

return registro
}












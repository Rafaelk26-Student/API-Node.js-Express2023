import produto from '../../models/produtoModel.js'

const getProduct = async (req, res) => {
    const produtoData = req.body
    try{
        const [rows] = await produto.getById(produtoData.id)
    if(rows.length === 0){
        res.status(404).json({
            error: `Produto do id ${produtoData.id} não encontrado!`,
        })
    } else{
        res.json({
            sucess: "Produto encontrado com sucesso!!",
            user: rows[0]
        })
    }
    }catch(error){
        console.error(error)
        res.status(500).json({
            error: "Erro no servidor!"
        })
    }finally{
        console.log("Aplicação encerrada!")
    }
}

export default getProduct
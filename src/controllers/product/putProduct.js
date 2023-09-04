import produto from '../../models/produtoModel.js'


const putUser = async (req, res) => {
    try{
        const produtoData = req.body
        const [result] = await produto.update(produtoData)
        if(result.affectedRows === 1 ){
            res.json({
                success:"Produto alterado com sucesso",
                user: {
                    ...produtoData
                }
            })
        }
    } catch(error){
        console.error(error)
        res.status(500).json({
            error: "Erro no servidor!"
        })
}
}

export default putUser
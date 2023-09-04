import produto from '../../models/produtoModel.js'

const postProduct = async (req, res) => {
    try{
        const produtoData = req.body
        const [result] = await produto.create(produtoData)
        if(result.affectedRows === 1){
            res.json({
                success: 'Produto inserido com sucesso!',
                user: {
                    id: result.insertId,
                    ...produtoData
                }
            })
        }
    } catch(error){
        console.error(error)
        res.status(500).json({
            error: "Erro no servidor!"
        })
    } finally{
        console.log("Aplicação encerrada!")
    }
}

export default postProduct
import user from '../../models/userModel.js'

const insertUser = async (req, res) => {
    try{
        const userData = req.body
        const [result] = await user.create(userData)
        if(result.affectedRows === 1){
            res.json({
                success: 'Usuário inserido com sucesso!',
                user: {
                    id: result.insertId,
                    ...userData
                }
            })
        }
    } catch(error){
        console.error(error)
        res.status(500).json({
            error: "Erro no servidor!"
        })
    } finally{
        console.log("Aplicação encerrada do insert!")
    }
}

export default insertUser
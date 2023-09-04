import user from '../../models/userModel.js'

const deleteUser = async (req, res) => {
    try{
        const userData = req.body
        const [result] = await user.remove(userData.id)
        if(result.affectedRows === 1 ){
            res.json({
                success:"Usuário removido com sucesso",
            })
        }
    } catch(error){
        console.error(error)
        res.status(500).json({
            error: "Erro no servidor!"
        })
}
}

export default deleteUser
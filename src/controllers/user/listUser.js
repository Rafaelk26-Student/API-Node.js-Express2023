import user from '../../models/userModel.js'

const listUsers = async (req, res) => {
    try{
        const [rows] = await user.getAll()
        if(rows.length === 0){
            res.status(404).json({
                error: "Nenhum usuário encontrado!"
            })
        } else{
            res.json ({
                success: "Usuários(s) encontrado(s) com Sucesso!",
                user: rows
            })
        }
    } catch(error){
        console.error(error)
        res.status(500).json({
            error: "Erro no servidor!"
        })
}
}

export default listUsers
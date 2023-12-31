import user from '../../models/userModel.js'


const putUser = async (req, res) => {
    try{
        const userData = req.body
        const [result] = await user.update(userData)
        if(result.affectedRows === 1 ){
            res.json({
                success:"Usuário alterado com sucesso",
                user: {
                    ...userData
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
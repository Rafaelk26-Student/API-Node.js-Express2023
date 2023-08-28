import user from '../../models/userModel.js'
const getUser = async (req, res) => {
    const userData = req.body
    try{
        const [rows] = await user.getById(userData.id)
    if(rows.length === 0){
        res.status(404).json({
            error: `Usuário do id ${userData.id} não encontrado!`,
        })
    } else{
        res.json({
            sucess: "Usuário encontrado com sucesso!!",
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

export default getUser

import db from '../database/db.js'

const getById = async (id) => {
    return await db.query('SELECT name, descricao FROM produtos WHERE id = ?;', [id])    
}

const create = async (produto) => {
    const {name, descricao, valor} = produto
    return await db.query("INSERT INTO produtos (name, descricao, valor) VALUES (?, ?, ?);", [name, descricao, valor]);
}

const update = async (produto) => {
    const {id, name, descricao, valor} = produto
    return await db.query("UPDATE produtos SET name = ?, descricao = ?, valor = ? WHERE id = ?;", [name, descricao, valor, id]);
}

const remove = async (id) => {
    return await db.query('DELETE FROM produtos WHERE id = ?;', [id])    
}

const getAll = async () => {
    return await db.query('SELECT * FROM produtos;');    
}

export default { getById, create, update, remove, getAll }
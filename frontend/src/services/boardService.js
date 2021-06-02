// import { utilService } from '../services/utilService.js'
import { httpService } from './httpService.js'

export const boardService = {
    query,
    save,
    getById,
    remove
}
async function query() {
    try {
        return httpService.get('board')
    } catch (err) {
        throw new Error('couldn\'t find boards')
    }
}

async function getById(id) {
    try {
        return httpService.get(`board/${id}`, id)
    } catch (err) {
        throw new Error('couldn\'t find boards')
    }
}

async function save(board) {
    try {
        return httpService.post('board', board)
    }
    catch (err) {
        throw new Error('couldn\'t add board')
    }
}
async function remove(id) {
    try { 
        return httpService.delete(`board/${id}`, id)
    }
    catch (err) {
        throw new Error('couldn\'t add board')
    }
}



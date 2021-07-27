// import { utilService } from '../services/utilService.js'
import { httpService } from '../../../shared/services/httpService'

export const boardService = {
    query,
    save,
    getById,
    remove,
    edit
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
        httpService.delete(`board/${id}`, id)
        return id;
    }
    catch (err) {
        throw new Error('couldn\'t add board')
    }
}
async function edit(id, board) {
    try {
        httpService.put(`board/${id}`, board)
        console.log("UPDATED in server");
        return board;
    }
    catch (err) {
        throw new Error('couldn\'t add board')
    }
}



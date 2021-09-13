import { httpService } from '../../../shared/'

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
        console.log("enter");
        console.log(err);
        console.log(err.message);
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
        await httpService.delete(`board/${id}`, id)
        return id;
    }
    catch (err) {
        throw new Error('couldn\'t add board')
    }
}
async function edit(id, board) {
    try {
        await httpService.put(`board/${id}`, board)
        return board;
    }
    catch (err) {
        throw new Error('failed on board editting')
    }
}



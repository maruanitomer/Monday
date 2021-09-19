import { httpService } from '../../../shared/'

export const boardService = {
    query,
    save,
    getById,
    remove,
    edit,
    addMember
}
async function query(type) {
    try {
        return httpService.get('board', undefined, { type })
    } catch (err) {
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
        await httpService.delete(`board/${id}`)
        return id;
    }
    catch (err) {
        // console.log(err.message);
        throw err.message
    }
}
async function edit(board) {
    try {
        const newBoard = await httpService.put(`board`, board)
        return newBoard;
    }
    catch (err) {
        throw new Error('failed on board editting')
    }
}
async function addMember(board, memberId) {
    try {
        const newBoard = await httpService.put(`board/member`, { board, memberId })
        return newBoard
    }
    catch (err) {
        throw new Error('failed on board editting')
    }
}



// import { utilService } from '../services/utilService.js'
import { httpService } from './httpService.js'

export const boardService = {
    query,
    save,
    getById,
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


// function save(toy) {
//     if (toy._id) {
//         return axios.put(`${url}/${toy._id}`, toy)
//             .then(res => res.data)
//     }
//     else {
//         return axios.post(url, toy)
//             .then(res => res.data)
//     }
// }
// function remove(toyId) {
//     return axios.delete(`${url}/${toyId}`)
//         .then(res => res.data)
// }
// function getById(id) {
//     return axios.get(`${url}/${id}`)
//         .then(res => res.data)
// }


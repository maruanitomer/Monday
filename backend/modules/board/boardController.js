const boardService = require('./boardService')

module.exports = {
    getBoard,
    getBoards,
    deleteBoard,
    updateBoard,
    addBoard
}
async function getBoards(req, res) {
    try {
        const filterBy = {
            username: req.session.user.username,
            type: req.query.type || null
        }
        const boards = await boardService.query(filterBy)
        res.send(boards)
    }
    catch (err) {
      res.send(err)
    }
}
async function getBoard(req, res) {
    try {
        const { id } = req.params
        const board = await boardService.getById(id)
        res.send(board)
    }
    catch (err) {
        res.status(404).send(err);
    }

}
async function updateBoard(req, res) {
    try {
        const board = req.body
        const updatedBoard = await boardService.update(board)
        return res.send(updatedBoard)
    }
    catch (err) {
        res.status(405).send(err)
    }
}
async function addBoard(req, res) {
    try {
        const toyToAdd = req.body
        const savedBoard = await boardService.add(toyToAdd)
        res.send(savedBoard)
    }
    catch (err) {
        return err
    }
}
async function deleteBoard(req, res) {
    try {
        const { id } = req.params
        await boardService.remove(id)
        res.send('Removed Success')
    }
    catch (err) {
        res.status(405).send(err)
    }

}



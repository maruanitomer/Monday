const express = require('express')
const { getBoard, getBoards, deleteBoard, updateBoard, addBoard } = require('./boardController')
const router = express.Router()

router.get('/', getBoards)
router.post('/', addBoard)
router.get('/:id', getBoard)
router.put('/:board', updateBoard)
router.delete('/:id', deleteBoard)


module.exports = router
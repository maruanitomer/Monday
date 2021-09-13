const express = require('express')
const { requireAuth } = require('../../middlewares/requireAuth.middleware')
const { getBoard, getBoards, deleteBoard, updateBoard, addBoard } = require('./boardController')
const router = express.Router()

router.get('/', requireAuth, getBoards)
router.post('/', addBoard)
router.get('/:id', getBoard)
router.put('/:board', updateBoard)
router.delete('/:id', deleteBoard)


module.exports = router
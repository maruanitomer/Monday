const express = require('express')
const { requireAuth } = require('../../middlewares/requireAuth.middleware')
const { getBoard, getBoards, deleteBoard, updateBoard, addBoard } = require('./boardController')
const router = express.Router()

router.get('/', requireAuth, getBoards)
router.post('/',requireAuth, addBoard)
router.get('/:id',requireAuth, getBoard)
router.put('/:board',requireAuth, updateBoard)
router.delete('/:id',requireAuth, deleteBoard)


module.exports = router
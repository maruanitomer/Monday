
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    update,
    add,
    remove
}

async function query(filterBy) {
    try {
        //QUERY
        const collection = await dbService.getCollection('board')
        // with filter
        const criteria = _buildCriteria(filterBy)
        var boards = await collection.find(criteria).toArray()
        return boards
    }
    catch (err) {
        throw err
    }
}
async function getById(id) {
    try {
        const collection = await dbService.getCollection('board')
        const toy = await collection.findOne({ '_id': ObjectId(id) })

        return toy

    }
    catch {
        throw 'No Board with this id exist'
    }
}
async function remove(id) {
    try {
        const collection = await dbService.getCollection('board')
        await collection.deleteOne({ '_id': ObjectId(id) })
    }
    catch {
        throw 'No Board with this id exist'
    }
}

async function update(board) {
    try {
        const updatedBoard = { ...board };
        delete updatedBoard._id
        const collection = await dbService.getCollection('board')
        await collection.updateOne({ '_id': ObjectId(board._id) }, { $set: updatedBoard })
        return updatedBoard
    } catch (err) {
        throw err
    }
}

async function add(board) {
    try {
        const collection = await dbService.getCollection('board')
        await collection.insertOne(board)
        return board
    } catch (err) {
        throw err
    }
}

//build the filter by
function _buildCriteria(filterBy) {
    var criteria = {
        '$or': [
            { members: { $in: [filterBy.username] } }
            , { ownedBy: { $eq: filterBy.username } }
        ]
    }
    if (filterBy.type && filterBy.type.length > 0) {
        criteria.type = { $in: filterBy.type }
    }
    return criteria
}




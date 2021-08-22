
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    update,
    add,
    remove
}

async function query() {
    // const criteria = _buildCriteria(filterBy)
    try {
        //QUERY
        const collection = await dbService.getCollection('board')
        // with filter
        // var toys = await collection.find(criteria).toArray()
        var boards = await collection.find().toArray()
        // to get TimeStamp for each 
        // toys = toys.map(toy => {
        //     toy.createdAt = ObjectId(toy._id).getTimestamp()
        //     return toy
        // })


        //SORTBY
        // if (filterBy.sortBy === 'name')
        //     toys.sort((a, b) => {
        //         if (a.name < b.name) { return -1; }
        //         if (a.name > b.name) { return 1; }
        //         return 0;
        //     })
        // else if (filterBy.sortBy === 'price')
        //     toys.sort((a, b) => a.price - b.price)

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
        const boardToAdd = { ...board };
        delete boardToAdd._id
        const collection = await dbService.getCollection('board')
        await collection.updateOne({ '_id': ObjectId(board._id) }, { $set: boardToAdd })
        return boardToAdd;
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
    const criteria = {}
    if (filterBy.name) {
        criteria.name = { $regex: filterBy.name, $options: 'i' }
    }
    if (filterBy.type !== 'All') {
        criteria.type = { $eq: filterBy.type }
    }
    if (filterBy.inStock !== 'All') {
        const inStockCriteria = filterBy.inStock === 'true'
        criteria.inStock = inStockCriteria

    }
    if (filterBy.price) {
        criteria.price = { $gte: filterBy.price * 1 }
    }
    return criteria
}




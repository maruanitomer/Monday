import React, { useEffect, } from 'react'
import { loadBoards } from '../store/actions/boardActions'
import { connect, useDispatch } from 'react-redux';

const _BoardsApp = ({ loadBoards, boards }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        (async () => {
            try {
                const action = await loadBoards();
                dispatch(action)
            }
            catch (err) {
                console.log(err);
            }
        })()
    }, [loadBoards,dispatch])

    return (
        (boards) ?
            <div>
                <pre>{JSON.stringify(boards,'',2)}</pre>
            </div> :
            <h1>loading</h1>
    )
}

const mapGlobalStateToProps = (state) => {
    return {
        boards: state.boardModule.boards
    }
}
const mapDistpatchToProps = {
    loadBoards,
}
export const BoardsApp = connect(mapGlobalStateToProps, mapDistpatchToProps)(_BoardsApp)
import * as PlayerActionTypes from '../actiontypes/player'

//Action Creators creates action and dispatch it to reducers to change state

//Takes name and return action
export const addPlayer = name => {
    return{
        type:PlayerActionTypes.ADD_PLAYER,
        name
    }
}
//Takes index to remove player
export const removePlayer = name => {
    return{
        type:PlayerActionTypes.REMOVE_PLAYER,
        index
    }
}

export const updatePlayerScore = (index,score) => {
    return{
        type:PlayerActionTypes.UPDATE_PLAYER_SCORE,
        index,
        score
    }
}
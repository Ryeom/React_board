import { createAction, handleActions } from 'redux-actions'
import { pender } from 'redux-pender'
import { Map, fromJS } from 'immutable'
import * as api from '../lib/api'

//
//action types
const INITIALIZE = 'view/INITIALIZE'
const GET_BOARD_CONTENT = 'view/GET_BOARD_CONTENT'
const GET_BOARD_LIST = 'view/GET_BOARD_LIST'
const DELETEBOARD = 'view/DELETEBOARD'
const SET_NOW = 'view/SET_NOW'


//action creators 
export const initialize = createAction(INITIALIZE)
export const getBoardContent = createAction(GET_BOARD_CONTENT,api.getBoard)
export const getList = createAction(GET_BOARD_LIST,api.getList)
export const deleteBoard = createAction(DELETEBOARD,api.removeBoard)
export const set_now = createAction(SET_NOW)

//initial state
const initialState = Map({
    view: Map({}),
    totalCount : 0,
    now:1,
})

export default handleActions({
    [INITIALIZE] : (state,action) =>{ 
        return initialState
    },
    [SET_NOW] : (state,action)=>{
        return state.set('now',action.payload)
    },
    ...pender({
        type : GET_BOARD_CONTENT,
        onSuccess : (state,action) =>{
            const { data : view } = action.payload
            return state.set('view',fromJS(view[0]))
        },
    }),
    ...pender({
        type : GET_BOARD_LIST,
        onSuccess : (state,action) =>{
            const { queryResult : list, totalCount } = action.payload.data
            return state.set('view',fromJS(list))
                        .set('totalCount',totalCount)
        },
    }),
    ...pender({
        type : DELETEBOARD,
        onSuccess : (state,action) =>{
            console.log(`actions payload`,action.payload);
            
            const { result } = action.payload.data
            if(result===0) {alert(`비번틀림쓰`)}
            else {alert('지워져떠')}
        }
    }),
},initialState)
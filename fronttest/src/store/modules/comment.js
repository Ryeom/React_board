import * as api from '../lib/api'
import {createAction, handleActions} from 'redux-actions'
import { Map } from 'immutable'
import { pender } from 'redux-pender';


const INITIALIZE = 'comment/INITIALIZE'
const CHANGEINPUT = 'comment/CHANGEINPUT'
const GETALLCOMMENTS = 'comment/GETALLCOMMENTS'
const INSERTCOMMENTS = 'comment/INSERTCOMMENTS'
const DELETECOMMENTS = 'comment/DELETECOMMENTS'

//action creators 
export const initialize = createAction(INITIALIZE)
export const onChangeInput = createAction(CHANGEINPUT)
export const getAllComments = createAction(GETALLCOMMENTS,api.getAllComments)
export const insertComments = createAction(INSERTCOMMENTS,api.insertComments)
export const deleteComments = createAction(DELETECOMMENTS,api.removeComments)

//initial state
const initialState = Map({
    board_no : '',
    content : '',
    id_ : '',
    pw : '',
    rank_ : '',
    dept_name : '',
    name_ : '',
    comment_no : '',    
    list : Map({}),
})

export default handleActions({
    [INITIALIZE] : (state,action)=>{
        return initialState
    },
    [CHANGEINPUT] : (state,action)=>{
        console.log(`여기다 마`);
        
        const { name, value } = action.payload
        return state.set(name,value)
    },
    ...pender({
        type : GETALLCOMMENTS,
        onSuccess : (state,action)=>{
            console.log(`이거 겟 올 코멘트 리듀서`,action.payload);
            
            return state.set('list')
        }
    }),
    ...pender({
        type : INSERTCOMMENTS,
        onSuccess : (state,action)=>{
            console.log(`마 코멘트 드가따`);
            
        }
    }),
    ...pender({
        type : DELETECOMMENTS,
        onSuccess : (state,action)=>{
            
        }
    })

},initialState)
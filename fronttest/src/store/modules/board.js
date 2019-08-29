import { createAction, handleActions } from 'redux-actions'
import { pender } from 'redux-pender'
import { Map } from 'immutable'
import * as api from '../lib/api'


//action types
const INITIALIZE = 'board/INITIALIZE'
const CHANGEINPUT = 'board/CHANGEINPUT'
const INSERTBOARD = 'board/INSERTBOARD'
const UPDATEBOARD = 'board/UPDATEBOARD'
const SET_BOARD = 'board/SET_BOARD'
const GET_BOARD = 'board/GET_BOARD'



//action creators 
export const initialize = createAction(INITIALIZE)
export const changeInput = createAction(CHANGEINPUT)
export const insertBoard = createAction(INSERTBOARD,api.insertBoard)
export const updateBoard = createAction(UPDATEBOARD,api.updateBoard)
export const getBoard = createAction(GET_BOARD,api.getBoard)




//initial state
const initialState = Map({
    title : '', content : '', id_: '', pw: 'null', dept_name: '공개불가', name_: '', rank_:  '공개불가',
    board_no:'',
})

export default handleActions({
  
    [INITIALIZE] : (state,action) =>{ 
        return initialState
    },
    [CHANGEINPUT] : (state,action)=>{
        console.log(`ㅎㅇㅎㅇㅎ `);
        
        const { name, value } = action.payload
        return state.set(name,value)
    },
    [SET_BOARD] : (state,action) =>{
        console.log(`페이로드인디, 뭔가 안쓰는 코드같음`,action.payload);
        
    },
    ...pender({        
        type : GET_BOARD,
        onSuccess : (state,action) =>{
            const {data} = action.payload
            const { title, content, dept_name, name_, rank_, reg_date, board_no } = data[0]
            return state.set('title',title)
                        .set('content',content)
                        .set('name_',name_)
                        .set('rank_',rank_)
                        .set('reg_date',reg_date)
                        .set('dept_name',dept_name)
                        .set('board_no',board_no)
        }
    }),
    ...pender({        
        type : INSERTBOARD,
        onSuccess : (state,action) =>{
            console.log(`insert seccess`);
               
        }
    }),
    ...pender({        
        type : UPDATEBOARD,
        onSuccess : (state,action) =>{
            const { result } = action.payload.data
            console.log(result);
            
            if(result===0) {alert('비번틀림수정실패')}
        }
    }),
},initialState)
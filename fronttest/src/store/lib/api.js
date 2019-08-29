import axios from 'axios'

export const insertBoard = ( newBoard )=>axios.post('/board', newBoard ) 
export const getBoard = ( board_no ) =>axios.get(`/board/${board_no}`)
export const getList = (page_number) =>axios.get(`/list/${page_number}`)
export const removeBoard = (board_no, pw) =>axios.delete('/board', {data : {board_no:board_no,pw:pw,}})
export const updateBoard = ( newBoard )=>axios.put('/board',{data : {newBoard:newBoard}})
//##############################################################################################################
export const getAllComments = (board_no)=>axios.get(`/comment/${board_no}`) 
export const insertComments = (board_no,newComment)=>{
    console.log(`axsio`);
    
    return axios.post(`/comment`,{data:{newComment:newComment,board_no,board_no}}) }
export const removeComments = ( board_no,pw )=> axios.delete('./comment',{data : {board_no:board_no,pw:pw}})
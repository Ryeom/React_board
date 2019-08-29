 import React, { Component } from 'react'
import Contents from './contents/contents'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import * as viewActions from '../../../store/modules/view'
import BoardCommentsContainer from '../../../containers/board/BoardCommentsContainer';

 class Detail extends Component {

     initialize = async () => {
         const { ViewActions, match } = this.props
         const board_no = match.params.board_no
         
         try {
             await ViewActions.getBoardContent(board_no)
         } catch (e) {
             console.log(e);
         }
     }

    componentDidMount (){
       this.initialize()
    }

    
    handleDelete = async ()=> {
        const { ViewActions, match,history } = this.props
        const board_no = match.params.board_no
        const pw = prompt('passwoard plz')
        console.log(`비밀번호 486`,pw);
        
        try{
            await ViewActions.deleteBoard(board_no,pw)
            history.push('/list/1')
        }catch (e){

        }
    }


     render() {
        const { loading, view } = this.props
        const { handleDelete } = this
        if(loading) return null
        const { title, content, dept_name, name_, rank_, reg_date, board_no } = view.toJS()
        return (
            <div>
                <Contents
                    title={title}
                    content={content}
                    name_={name_}
                    dept_name={dept_name}
                    rank_={rank_}
                    reg_date={reg_date}
                    onDelete={handleDelete}
                    board_no={board_no}
                />
                {/* <BoardCommentsContainer/> */}
            </div>
         )
     }
 }
 
 export default connect(
    (state) => ({
        view : state.view.get('view'),
        loading : state.pender.pending['view/GET_BOARD_CONTENT'],
    }),
    (dispatch) => ({
        ViewActions: bindActionCreators(viewActions, dispatch)
    })
)(withRouter(Detail))
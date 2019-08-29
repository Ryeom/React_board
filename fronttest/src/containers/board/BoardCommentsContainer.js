import React, { Component } from 'react';
import Comment from '../../components/board/detail/comments/comment';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import * as commentAction from '../../store/modules/comment'

class BoardCommentsContainer extends Component {

    handleChangeInput = (name, value) => {
        const { CommentActions } = this.props
        CommentActions.onChangeInput({name,value})
    }
    
    onSubmit =  async ()=>{
        const { CommentActions } = this.props
        const { content, match } = this.props
        const board_no = match.params.board_no

        try{
            await CommentActions.insertComments(board_no,content)
        }catch(e){
            console.log(e)
        }
    }



    render() {
        const { handleChangeInput,onSubmit } = this
        console.log(typeof handleChangeInput);
        
        const { content } =this.props
        return (
            <div>
                <Comment
                onChangeInput={handleChangeInput}
                content={content}
                onSubmit={onSubmit}

                />
            </div>
        );
    }
}

export default connect(
    (state) => ({
        board_no : state.comment.get('board_no'),
        content : state.comment.get('content'),
        pw : state.comment.get('pw'),
        rank_ : state.comment.get('rank_'),
        dept_name : state.comment.get('dept_name'),
        name_ : state.comment.get('name'),
        comment_no : state.comment.get('comment_no'),
        list : state.comment.get('list'),
    }),
    (dispatch) => ({
        CommentActions: bindActionCreators(commentAction, dispatch)
    })
)(withRouter(BoardCommentsContainer)) 
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import * as boardActions from '../../store/modules/board'
import Editor from '../../components/board/write/editor';
class BoardModifyContainer extends Component {

    initialize = ()=>{
        const { BoardActions, match, } = this.props
        BoardActions.getBoard(match.params.board_no)
    }

    handleChangeInput = (name, value) => {
        const { BoardActions } = this.props
        BoardActions.changeInput({name,value})
    }

    handleModifySubmit = async () => {
        const { title, content, pw, dept_name, name_, rank_ } = this.props
        const { BoardActions, history, match } = this.props
        const path_number = match.params.board_no

        const newBoard = {
            title:title,
            content: content,
            pw: pw,
            dept_name: dept_name,
            name_: name_,
            rank_: rank_,
            board_no:path_number,
        }
        try {
            await BoardActions.updateBoard(newBoard)
            history.push(`/board/${path_number}`)
        } catch (e) {
            console.log(e)
        }
    }


    render() {
        
        const { handleModifySubmit,handleChangeInput,initialize } = this
        const type = 'modify'
        return (
            <div>
                  <Editor 
                onChangeInput = {handleChangeInput}
                initialize={initialize}
                onSubmit={handleModifySubmit}

                title = {this.props.title}
                content = {this.props.content}
                pw = {this.props.pw}
                dept_name = {this.props.dept_name}
                name_ = {this.props.name_}
                rank_ = {this.props.rank_}

                type={type}
                />
            </div>
        );
    }
}

export default connect(
    (state) => ({
        title: state.board.get('title'),
        content: state.board.get('content'),
        pw: state.board.get('pw'),
        dept_name: state.board.get('dept_name'),
        name_: state.board.get('name_'),
        rank_: state.board.get('rank_'),
    }),
    (dispatch) => ({
        BoardActions: bindActionCreators(boardActions, dispatch)
    })
)(withRouter(BoardModifyContainer))
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import * as boardActions from '../../store/modules/board'
import Editor from '../../components/board/write/editor';

class BoardWirteContainer extends Component {

    initialize = ()=> {
        const { BoardActions } = this.props
        BoardActions.initialize()
    }

    handleChangeInput = (name, value) => {
        const { BoardActions } = this.props
        BoardActions.changeInput({name,value})
    }

    handleSubmit = async () => {
        const { title, content, pw, dept_name, name_, rank_ } = this.props
        const newBoard = {
            title:title,
            content: content,
            pw: pw,
            dept_name: dept_name,
            name_: name_,
            rank_: rank_,
        }
        const { BoardActions, history } = this.props
        try {
            await BoardActions.insertBoard(newBoard)
            history.push(`/list/1`)
        } catch (e) {
            console.log(e)
        }
    }


    render() { 
        const { handleSubmit, handleChangeInput,initialize} = this
        const type = 'wirte'
        return ( 
        
        <div>
            <Editor 
            initialize={initialize}
            onSubmit = {handleSubmit}
            onChangeInput = {handleChangeInput}


            
            type={type}
            />
        </div >
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
)(withRouter(BoardWirteContainer))
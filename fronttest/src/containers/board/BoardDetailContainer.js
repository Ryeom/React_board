import React, { Component } from 'react';
import BoardDetail from '../../components/board/detail/detail'
import BoardCommentsContainer from './BoardCommentsContainer';
class BoardDetailContainer extends Component {
    render() {
        return (
            <div  className="container py-5 mb5">
                <BoardDetail/>
                <BoardCommentsContainer/>
            </div>
        );
    }
}

export default BoardDetailContainer;
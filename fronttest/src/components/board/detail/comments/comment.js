import React, { Component } from 'react';

class Comment extends Component {
    //오타 수정했음...
    handleChange = (e)=>{
        
        const { onChangeInput } = this.props
        console.log(typeof onChangeInput);
        const { value, name } = e.target
        console.log(value,name);
        onChangeInput(name, value)
    }

    render() {
        //const {  board_no, content, id_, pw, rank_, dept_name, name_, comment_no } = this.props
        const { handleChange } = this
        
        const { onSubmit,content } = this.props
        return (
            <div className="jumbotron">
                <h1 className="display-3">comments</h1><br/>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={content} onChange={handleChange} name="content"
                    placeholder="please write your comments!"/>
                    <div className="input-group-append">
                        <button className="btn btn-primary" onClick={onSubmit} type="button">Go!</button>
                    </div>
                </div>
                <div>
                    <h6 className="my-0">댓글내용</h6>{/* 이미 달려있는 댓글 */}
                    <small className="text-muted">댓글 작성자</small>
                </div>
                <span className="text-muted">작성날짜</span>
            </div>
        );
    }
}

export default Comment;
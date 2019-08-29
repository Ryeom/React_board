import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Contents extends Component {
    render() {
        const { title, content, dept_name, name_, rank_, reg_date, onDelete, board_no } = this.props
        
        return (
            <div className="jumbotron">
                <h1 className="display-3"> {title} </h1>
                <p className="lead"> {content} </p>
                <hr className="my-4"/>
                <p>작성자&nbsp; : &nbsp; {name_}<br/> 부서명&nbsp; : &nbsp; {dept_name} &nbsp; |&nbsp; 
                직급&nbsp; :&nbsp; {rank_}&nbsp;&nbsp;|&nbsp;
                 작성일 &nbsp; {reg_date}</p>
                <p className="lead">
                    
                    <Link className="btn btn-primary" to={`/modify/${board_no}`}>수정하기</Link>
                        &nbsp;
                    <button  className="btn btn-primary" onClick={onDelete}>삭제하기</button>      
                    
                </p>
            </div>
        );
    }
}

export default Contents;
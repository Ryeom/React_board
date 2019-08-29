import React from 'react';
import { Link } from 'react-router-dom'
import Page from './page';

function List({ loading, list ,totalCount , now,refrash}) {
    console.log(`tatal count`,totalCount, now);
        
        if(loading) return null
        list = Array.from(list);
        const listview = list.map((v,k)=>{
                return (
                    <tr key={k}>
                        <th scope="row">{v.board_no}</th>
                        <td>
                            <Link to={'/board/' + v.board_no}>{v.title}</Link>
                        </td>
                        <td>{v.reg_date}</td>
                        <td>{v.name_}</td>
                    </tr>
                )
            })
       
            
        return (
            <div>
             <div className="container py-5 mb5">
                <h1 className="mb-5">BOARD LIST</h1>
                <div className="row">
                    <div className="col-md-3">
                        <form className="mb-3">{/* search */}
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search"/>
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-primary">Search</button>
                                </div>
                            </div>
                        </form>
                        {/* <div className="list-group">
                            <a href="/" className="list-group-item list-group-item-action active"> all new </a>
                            <a href="/" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                Human Resource
                                <span className="badge badge-primary badge-pill ml-auto">new</span>
                            </a>
                            <a href="/" className="list-group-item list-group-item-action">Finance</a>
                            <a href="/" className="list-group-item list-group-item-action">Development</a>
                            <a href="/" className="list-group-item list-group-item-action">Sales</a>
                            <a href="/" className="list-group-item list-group-item-action">Prodction</a>
                        </div> */}
                    </div>
                    <div className="col-md-9">
                        <div className="row d-none">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Card title</h4>
                                        <p className="card-text">
                                        Some quick example text to build on the card title
                                        and make up the bulk of the card's content.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table className="table table-hover table-striped">
                            <thead className="thead-dark">
                                <tr>
                                    <th>No</th>
                                    <th>title</th>
                                    <th>date</th>
                                    <th>writer</th>
                                </tr>
                            </thead>
                            <tbody>    
                                    {listview}
                                <tr>
                                    <th scope="row"></th>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <a href="/" className="btn btn-sm btn-danger my-1 my-sm-0">
                                            <span className="fas fa-trash mr-1"></span>
                                            &nbsp;&nbsp;&nbsp;WRITE&nbsp;&nbsp;&nbsp;</a>
                                    </td>
                                </tr>
                            </tbody>
        
                        </table>

        {/* 글 번호 넘기기 */}
                        <Page 
                        totalCount={totalCount} 
                        now={now}
                        refrash={refrash}
                        />
                    </div>
                </div>
            </div>
        </div>

        );
    }


export default List;
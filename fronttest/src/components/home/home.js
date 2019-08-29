import React from 'react';

function Home(props) {
    return (
        <div className="jumbotron bg-transparent mb-0 radius-0">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <h1 className="display-2">August Team_<span className="vim-caret">1</span></h1>
                        <div className="lead mb-3 text-mono text-success">Team Ui-ryeong Chun<br/>
                                        Jeong-hwan Gong, Ji-eun Lee and Suk-woo Jung </div>
                        <div className="text-mono">
                            <a href="#!"title="Download Theme" className="btn btn-success btn-shadow px-3 my-2 ml-0 text-left">
                                    Sign Up Page
                            </a>
                            <a href="#!" className="btn btn-danger btn-shadow px-3 my-2 ml-0 ml-sm-1 text-left">
                                    My Page
                            </a>
                        </div>
      
                        <div className="text-darkgrey text-mono my-2">React Business diary Board </div>
                        <p className="mt-5 text-grey text-spacey">
                            OS : win10<br/>
                            Server : node.js( express module )<br/>
                            Language : Javascript(react.js)<br/>
                            DB : MySql<br/>
                            text editor : vscode<br/>
                            SCM : git<br/>
                            Implement 'CRUD' through bulletin board<br/>
                            Review and learn more through creating bulletin boards using 'React.js'<br/>
                            Through the current project, the purpose can be used as a view-level learning and reference
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
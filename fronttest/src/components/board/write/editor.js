import React, { Component } from 'react';
class Editor extends Component  {



    componentDidMount(){ 
        const { initialize } = this.props
        initialize()
    }

    handleChange = (e)=>{
        const { onChangeInput } = this.props
        const { value, name } = e.target
        onChangeInput(name, value)
    }

    render(){
        const { loading,  type } = this.props
        const {  onSubmit } = this.props
        const { handleChange } = this
        
        
        if(loading) return null
        const { title, content, dept_name, name_, rank_, reg_date,pw } = this.props
        
        let date = new Date()
        return (
            <div className="container py-5 mb5">
                <h1 className="mb-5">Write board</h1>
                <div className="row py-4">
                    <div className="col-md-4 order-md-2 mb-4">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Option</span>
                        </h4>
                        <ul className="list-group mb-3">
                            <li className="list-group-item d-flex justify-content-between">                                
                                <span>작성일</span>
                                {(type==='modify')?
                                <strong>{ reg_date }</strong>
                                    :
                                <strong>{date.getFullYear()}.{date.getMonth()+1}.{date.getDate()}</strong>
                                }
                                
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <select className="custom-select d-block w-100" value={dept_name} onChange={handleChange} name="dept_name" required>
                                    <option value={undefined}>부서 비공개</option>
                                    <option value="Human Resource">Human Resource</option>
                                    <option value="Finance">Finance</option>
                                    <option value="development">development</option>
                                    <option value="Sales">Sales</option>
                                    <option value="Production">Production</option>
                                    <option value="R&amp;D">R&amp;D</option>
                                </select>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <select className="custom-select d-block w-100" value={rank_}  onChange={handleChange} name="rank_" required>
                                    <option value={undefined}>직급 비공개</option>
                                    <option value="부장">부장</option>
                                    <option value="차장">차장</option>
                                    <option value="과장">과장</option>
                                    <option value="대리">대리</option>
                                    <option value="주임">주임</option>
                                    <option value="사원">사원</option>
                                </select>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <input type="text" onChange={handleChange} className="form-control" value={name_} name="name_" placeholder="Username" required/>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <input type="password" onChange={handleChange} className="form-control" value={pw} name="pw" placeholder="pw" required/>
                            </li>
                        </ul>

                        <button type="button" className="btn btn-primary"onClick={onSubmit}>글쓰기</button>
                    </div>
                    <div className="col-md-8 order-md-1">
                        <h4 className="mb-3"> 익명 게시판 </h4>
                        <div className="mb-3">
                            <label>title</label>
                            <input className="form-control" value= {title} onChange={handleChange} type="text" name="title" placeholder="Title" id="example-text-input" required/>

                        </div>
                        <div className="mb-3">
                            <label>업무 내용 </label>
                        
                            <textarea onChange={handleChange} value={content} className="textarea form-control" name="content" placeholder="contents" required></textarea>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Editor
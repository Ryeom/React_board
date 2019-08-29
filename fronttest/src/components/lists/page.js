import React from 'react';
// import { Link } from 'react-router-dom'
function Page(props) {
    const totalPage = props.totalCount
    console.log(`now`,props.now,`totlapage`,totalPage);
    
    const now = parseInt(props.now)
    const { refrash } = props
    const last = Math.ceil(totalPage/7)
    console.log(`라스트`,last);
    
    //console.log(now);
    //const page = totalPage / 7
    //console.log(now, page);
    //console.log(typeof now)
    let listArr = []
    
    for(let i=now-4;i<now+3;i++){

        if(i+1>totalPage){break}
        if(now <=4){
            listArr.push(now+i+5-(2*now))    
        }else{
            listArr.push(i+1)
        }
    }

    console.log(listArr);
    
    const listPage = listArr.map((v,k)=>{        
        if(now!==v){//현재 리스트페이지 (보라색)
            return(
                <li className="page-item" key={k}>
                <button onClick={refrash} className="page-link" value={v}>{v}</button>
            </li>
            )
        }
        return (    //현재 리스트페이지가 아닌곳 (검정색)
        <li className="page-item active" key={k}>
        <span className="page-link">
            {v}
            <span className="sr-only">(current)</span>
        </span>
    </li>
        )
    })
    
    
    return (
        <nav aria-label="...">
            <ul className="pagination">

                <li className="page-item"value={1} >
                    <button onClick={refrash} className="page-link" value={1}>PREV</button>
                </li>

                {listPage}{/*d여기서 함수실행 */}

                <li className="page-item">
                <button onClick={refrash} className="page-link" value={totalPage}>PREV</button>
                </li>
            </ul>
        </nav>
    );
}

export default Page
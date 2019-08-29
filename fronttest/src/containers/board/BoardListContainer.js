import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import * as viewActions from '../../store/modules/view'
import List from '../../components/lists/list';

class BoardListContainer extends Component {

    listInitailize = async () =>{
        const { ViewActions, match } = this.props
        //const page_number = match.params.page_number
        try{
            await ViewActions.getList(1)
        }catch(e){
            console.log(e)
        }
    }

    componentDidMount(){
        const { ViewActions } = this.props
        ViewActions.initialize()
        this.listInitailize()
    }

    refrash = async (e)=>{
        const { ViewActions  } = this.props
        console.log(`안녕!`,e.target.value);
        console.log(this.props.now);
        ViewActions.set_now(e.target.value)
        try{
                await ViewActions.getList(e.target.value)
            }catch(e){
                    console.log(e)
                }
            //history.push(`/list/${e.target.value}`)
        
    }

    render() {
        const { loading, view, totalCount, now } = this.props
        const { refrash } = this
        const list = view.toJS()
        //const page_number = match.params.page_number
        if(loading) return null
        
        return (
            <div>
                <List
                loading={loading}
                list={list}
                totalCount={totalCount}
                now={now}
                refrash={refrash}
                />
            </div>
        );
    }
}

 export default connect(
    (state) => ({
        view : state.view.get('view'),
        loading : state.pender.pending['view/GET_BOARD_CONTENT'],
        totalCount : state.view.get('totalCount'),
        now : state.view.get('now'),
    }),
    (dispatch) => ({
        ViewActions: bindActionCreators(viewActions, dispatch)
    })
)(withRouter(BoardListContainer))
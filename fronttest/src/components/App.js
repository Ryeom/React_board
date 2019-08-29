import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './home/home'
import Navbar from './navbar/navbar';
import BoardWirteContainer from '../containers/board/BoardWirteContainer';
import BoardDetailContainer from '../containers/board/BoardDetailContainer';
import BoardListContainer from '../containers/board/BoardListContainer';
import BoardModifyContainer from '../containers/board/BoardModifyContainer';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/board' component={BoardWirteContainer}/>
        <Route exact path='/board/:board_no' component={BoardDetailContainer}/>
        <Route exact path='/list' component={BoardListContainer}/>
        <Route exact path='/modify/:board_no' component={BoardModifyContainer}/>
      </Switch>    
    </div>
  )

}
export default App
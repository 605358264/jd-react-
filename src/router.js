import React from 'react';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'

import asyncComponts from './components/async/AsyncComponent'
import './router.css'
import config from './assets/js/config/config.js'

const IndexCompont =asyncComponts(()=>import( './pages/home/index'))
const ShopCompont =asyncComponts(()=>import( './pages/shop/index'))
const MyCompont =asyncComponts(()=>import( './pages/my/index'))
const HomeClassifyCompont=asyncComponts(()=>import('./pages/home/classfiy/index'))

// import {PrivateRoute} from './routes/private'



class RouterCompont extends React.Component {
  constructor (props) {
    super(props);
    this.state={
     

    }
   
  }
  componentDidMount(){
    console.log(this.props,'6')
  }
  render(){
    return (
      <div className="routers">
        < React.Fragment>
        <Router>
          <React.Fragment>
            <Switch>              
              <Route  path={config.path+"home/index"} component={IndexCompont}/>
              <Route  path={config.path+"home/classify"} component={HomeClassifyCompont}/>
              <Route  path={config.path+"shop"} component={ShopCompont}/>
              <Route  path={config.path+"my"} component={MyCompont}/>
              <Redirect to={config.path+"home/index"}></Redirect>
            </Switch>             
          </React.Fragment>
           
        </Router>    
      </React.Fragment>
     
     </div>
      )
  }

};
export default RouterCompont
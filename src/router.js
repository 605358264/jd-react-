import React from 'react';
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import FooterNav from './components/footerNav'
import asyncComponts from './components/async/AsyncComponent'
import './router.css'
import config from './assets/js/config/config.js'

const IndexCompont =asyncComponts(()=>import( './pages/home/index'))
const ShopCompont =asyncComponts(()=>import( './pages/shop/index'))
const MyCompont =asyncComponts(()=>import( './pages/my/index'))


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
              <Route  path={config.path} component={IndexCompont}/>
              <Route  path={config.path+"home"} component={IndexCompont}/>
              <Route  path={config.path+"shop"} component={ShopCompont}/>
              <Route  path={config.path+"my"} component={MyCompont}/>
            </Switch>
            <FooterNav className="footerNav"/> 
          </React.Fragment>
           
        </Router>    
      </React.Fragment>
     
     </div>
      )
  }

};
export default RouterCompont
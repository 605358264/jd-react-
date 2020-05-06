import React from 'react'
import "./index.css"
import config from '../../assets/js/config/config.js'
import PropTypes from 'prop-types';

class FooterNav extends React.Component {
  constructor (props) {
    super(props);
    this.state={
      homeActive:false,
      shopActive:false,
      myActive:true,
    }
   
  }
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  componentDidMount(){
    this.handleNavStyle(this.context)
    
}
componentWillReceiveProps(newContext){
    this.handleNavStyle(newContext)
   
}
  goPage(pUrl){ 
   
   this.context.router.history.replace(config.path+pUrl)
 
  }
  // 切换样式函数
  handleNavStyle(context){
 
    switch (this.context.router.route.location.pathname){
        case config.path+"home":
            this.setState({            
                homeActive:true,
                shopActive:false,
                myActive:false,
            });
            break;
        case config.path+"shop":
            this.setState({
              homeActive:false,
              shopActive:true,
              myActive:false,
            });
            break;
        case config.path+"my":
            this.setState({
              homeActive:false,
              shopActive:false,
              myActive:true,
            });
            break;
        default:
            break;
    }

}
  render(){
    return (
        <div className="footerNav">
            <ul className="home" onClick={this.goPage.bind(this,"home")}><li className="homeIcon"></li><li className={this.state.homeActive ? "active":null}>首页</li></ul>
            <ul className="shop" onClick={this.goPage.bind(this,'shop')}><li className="shopIcon"></li><li  className={this.state.shopActive ? "active":null}>购物</li></ul>
            <ul className="my" onClick={this.goPage.bind(this,'my')}><li className="myIcon"></li><li className={this.state.myActive ? "active":null}>我的</li></ul>  
        </div>
      )
  }

}

export default FooterNav;
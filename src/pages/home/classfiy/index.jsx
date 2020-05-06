import React from 'react';
import "./index.css"
import BScroll from "better-scroll"
import Classify from '../../../api/classify'
import { request } from '../../../assets/js/config/request';
import {lazyImg} from '../../../assets/js/utils/index.js'
class HomeClassifyCompont extends React.Component {
    constructor(props){
        super(props);
        this.state={
            navArr:[]
        };
        
    }
   componentDidMount(){
       this.getNavLlist()
    
   }

   // 获取左侧导航数据
   getNavLlist(){
    request(Classify.navListApi).then(res=>{
    if(res.code===200){
       
      this.setState({
        navArr:res.data
      },()=>{
        new BScroll('.leftNav',{
            scrollY: true,
            click: true
        })
      })
    }
   })
  }
   // 切换样式
   changStyle(arr,index){

   }
   
  render(){
    return (
        <div className="classify">
          <div className="searchHeader">
              <div className="headerIcon"></div>
              <div className="headerInput">请输入宝贝名称</div>
          </div>
          <div className="classifyWrap">
              <div className="leftNav">
                  <div className="leftNavContent">
                      {
                          this.state.navArr.map((item,index)=>{
                            return(
                                <div className="leftNavTitle" key={index} onClick={this.changStyle.bind(this)}><span>{item.title}</span></div>
                            )
                          })
                      }
                     
                  
                  </div>
                
              </div>
              <div className="right">
                <div className="rightContent">
                    <div className="rightContentWrap">
                        <div className="rightContentTitle"><span>裙装</span></div>
                        <div className="rightContentItemWrap">
                            <ul className="rightContentItemWrapCon">
                                <li className="rightContentItemImg">                         
                                    <img src={require("../../../assets/images/common/home1.png")} alt=""/>
                                </li>
                                <li className="rightContentItemTitle"><span>裙装</span></li>
                            </ul>
                            <ul className="rightContentItemWrapCon">
                                <li className="rightContentItemImg">                         
                                    <img src={require("../../../assets/images/common/home1.png")} alt=""/>
                                </li>
                                <li className="rightContentItemTitle"><span>裙装</span></li>
                            </ul>
                            <ul className="rightContentItemWrapCon">
                                <li className="rightContentItemImg">                         
                                    <img src={require("../../../assets/images/common/home1.png")} alt=""/>
                                </li>
                                <li className="rightContentItemTitle"><span>裙装</span></li>
                            </ul>
                            <ul className="rightContentItemWrapCon">
                                <li className="rightContentItemImg">                         
                                    <img src={require("../../../assets/images/common/home1.png")} alt=""/>
                                </li>
                                <li className="rightContentItemTitle"><span>裙装</span></li>
                            </ul>
                            <ul className="rightContentItemWrapCon">
                                <li className="rightContentItemImg">                         
                                    <img src={require("../../../assets/images/common/home1.png")} alt=""/>
                                </li>
                                <li className="rightContentItemTitle"><span>裙装</span></li>
                            </ul>
                            <ul className="rightContentItemWrapCon">
                                <li className="rightContentItemImg">                         
                                    <img src={require("../../../assets/images/common/home1.png")} alt=""/>
                                </li>
                                <li className="rightContentItemTitle"><span>裙装</span></li>
                            </ul>
                            <ul className="rightContentItemWrapCon">
                                <li className="rightContentItemImg">                         
                                    <img src={require("../../../assets/images/common/home1.png")} alt=""/>
                                </li>
                                <li className="rightContentItemTitle"><span>裙装</span></li>
                            </ul>
                            <ul className="rightContentItemWrapCon">
                                <li className="rightContentItemImg">                         
                                    <img src={require("../../../assets/images/common/home1.png")} alt=""/>
                                </li>
                                <li className="rightContentItemTitle"><span>裙装</span></li>
                            </ul>
                            <ul className="rightContentItemWrapCon">
                                <li className="rightContentItemImg">                         
                                    <img src={require("../../../assets/images/common/home1.png")} alt=""/>
                                </li>
                                <li className="rightContentItemTitle"><span>裙装</span></li>
                            </ul>  
                        </div>     
                        <div className="rightContentTitle"><span>裙装</span></div>
                        <div className="rightContentItemWrap">
                            <ul className="rightContentItemWrapCon">
                                <li className="rightContentItemImg">                         
                                    <img src={require("../../../assets/images/common/home1.png")} alt=""/>
                                </li>
                                <li className="rightContentItemTitle"><span>裙装</span></li>
                            </ul>
                            <ul className="rightContentItemWrapCon">
                                <li className="rightContentItemImg">                         
                                    <img src={require("../../../assets/images/common/home1.png")} alt=""/>
                                </li>
                                <li className="rightContentItemTitle"><span>裙装</span></li>
                            </ul>
                            <ul className="rightContentItemWrapCon">
                                <li className="rightContentItemImg">                         
                                    <img src={require("../../../assets/images/common/home1.png")} alt=""/>
                                </li>
                                <li className="rightContentItemTitle"><span>裙装</span></li>
                            </ul>
                        </div>    
                    </div>  
                </div>
             </div>   
         </div>  
        </div>
      )
  }

}

export default HomeClassifyCompont;
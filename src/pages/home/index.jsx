import React from 'react'
import "./index.css"

import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.min.css'
import {lazyImg} from '../../assets/js/utils/index.js'

import FooterNav from '../../components/footerNav'
import {request} from "../../assets/js/config/request.js"
import Home from '../../api/home'

class IndexCompont extends React.Component {
  constructor (props){
    super (props)
    this.state={
      funsetArr:[
     
       ],
       bannerArr:[
       
       ],
       navArr:[],
       productArr:[],
       homeRecommodArr:[],
      
    }
    
  }
  componentDidMount(){    
  
    this.getSwiper()
    this.getNav()
    this.getProduct()
    this.getHomeRecommond()
   
  }


  // 获取轮播图数据

  getSwiper(){    
  
     request(Home.swiperApi).then(res=>{
      
       if(res.code===200){
         
         this.setState({
          bannerArr:res.data
          
         },()=>{
          lazyImg()
        },()=>{
            // 轮播样式
          new Swiper('.swiper-container', {
            loop:true,
            autoplay:true,
            pagination: {
            el: '.swiper-pagination',
            },
          });
        })
       }
     })
  }

  // 获取首页导航

  getNav(){
    request(Home.homeNavApi).then(res=>{
      if(res.code===200){
        this.setState({
          navArr:res.data
        },()=>{
          lazyImg()
        })
      }
    })
  }

  //获取首页产品

  getProduct(){
    request(Home.homeProductApi).then(res=>{
    if(res.code===200){
      this.setState({
        productArr:res.data
      },()=>{
        lazyImg()
      })
    }
   })
  }
 // 获取首页推荐

 getHomeRecommond(){
   request(Home.homeRecommodApi).then(res=>{
    if(res.code===200){
    
      this.setState({
        
        homeRecommodArr:res.data
        
      },()=>{
        lazyImg()
      })
    }
   })
 }

 // 跳转分类

  gotoClassify(){

    this.props.history.push('./classify')

  } 

  render(){
    return (
        <div className="home">
          
          <div clssName="homeHeader">
            <div className="homeHeaderWrap"> 
              <div className="homeHeaderIcon"></div>
              <div className="searchForm">
                <div className="searchFormIcon"></div>
                <div className="searchFormContent">请输入宝贝名称</div>
              </div>
              <div className="login">登录</div>
            </div>    
          </div>
          
         {/*轮播*/}
          <div className="swiper-container">
            <div className="swiper-wrapper">  
              {this.state.bannerArr.map(item=>
                (
                  <div className="swiper-slide">
                    <img src={item.image} alt="" />
                  </div>
                )
              )}     
            </div>
            <div className="swiper-pagination"></div> 
          </div>
         
          <div className="quickNav">
            {this.state.navArr.map((item,index)=>{
              return (
                <ul onClick={this.gotoClassify.bind(this)}>
                  <li className="quickImg">
                    <img src={item.image} alt=""/>
                  </li>
                  <li><span className="quickTitle">{item.title}</span></li>
                </ul>
              )
              } 
            )}
          </div>
              {/*好货*/ } 
           <div >
             {
               this.state.productArr != null ? 
                this.state.productArr.map((item,index)=>{
                  return(             
                  <div key={index} className="man">
                    <div className="goodstitle">
                      <span>{item.title}</span>
                    </div>
                    <div>
                      { index %2===1 ?
                        (<div><div className="manGoodsWrap1">
                          {
                            item.items != null ?
                              item.items.slice(0,2).map((item1,index1)=>{
                                return(                                  
                                    <ul className="manGoodsCol" key={index1}>
                                      <li className="manGoodsColTitle">{item1.title}</li>
                                      <li className="isShow">火爆开售</li>
                                      <li className="manGoodsColImg">
                                        <img data-echo={item1.image ||''} src={require("../../assets/images/common/lazyImg.jpg")} alt=""/>
                                      </li>
                                    </ul>
                                )
                              })
                            :''
                          }                      
                        </div>
                        <div className="goodsNew">
                          {item.items.slice(2).map((item4)=>{
                            return(
                              <ul className="goodsNewList">
                                <li className="goodsNewListTitle">{item4.title}</li>
                                <li className="goodsNewListImg"><img src={item4.image} alt=""/></li>
                                <li className="newPrice">{item4.price}</li>
                                <li className="oldPrice">{item4.cid}</li>
                              </ul>
                            )
                          })}
                        </div>
                        </div>
                        ):
                        (                
                          <div>
                              <div className="goods">
                                    <div className="goodsContent">
                                      <div className="goodsContentLeft"> 
                                        <span className="goodsContentItemTitleDetail">{item.items[0].title}</span>
                                        <span className="goodsContentItemTitleDisCount">精品打折</span>
                                        <span className="goodsContentItemPrice">{item.items[0].price}</span>
                                        <div className="goodsContentItemsImg"><img src={item.items[0].image} alt=""/></div>   
                                      </div>
                                      <div className="goodsContentRight">
                                        {
                                          item.items.slice(1,3).map((item2)=>{
                                            return(
                                              <div className="goodsContentRightItemRow">
                                                <span className="goodsContentRightItemRowTitle">{item2.title}</span>
                                                <span className="goodsContentRightItemRowChoice">品质精挑</span>
                                                <img data-echo={item2.image || ''} src={require("../../assets/images/common/lazyImg.jpg")} alt=""/>
                                              </div>  
                                            )
                                          })
                                        }
                                      </div> 
                                    </div>
                                    <div className="goodsNew">
                                        {item.items.slice(3).map((item3)=>{
                                          return(
                                            <ul className="goodsNewList">
                                              <li className="goodsNewListTitle">{item3.title}</li>
                                              <li className="goodsNewListImg"><img data-echo={item3.image || ''} src={require("../../assets/images/common/lazyImg.jpg")} alt=""/></li>
                                              <li className="newPrice">{item3.price}</li>
                                              <li className="oldPrice">{item3.cid}</li>
                                            </ul>
                                          )
                                        })}
                                      </div>
                                    
                              </div>
                          </div>         
                       ) 
                      } 
                   </div>
                  </div>  
               )}):''
             }
            </div> 
                  
            {/*为您推荐*/ }
            <div className="goodsRecommend">
              <span>为您推荐</span>
            </div>
            <div className="goodsRecommendContent">
              {this.state.homeRecommodArr.map(i=>{
                return(
                  <div className="goodsRecommendContentItem">
                    <div className="goodsRecommendContentItemImg"><img data-echo={i.image || ''} src={require("../../assets/images/common/lazyImg.jpg")} alt=""/></div>
                    <div className="goodsRecommendContentItemTitle"><span>{i.title}</span></div>
                    <div className='goodsRecommendContentItemPrice'>{i.price}</div>
                  </div>
                )
              })}
             
              <div className="wrapFooter">

              </div>
              
            </div> 
            <FooterNav></FooterNav>
        </div>
        
      )
  }

}

export default IndexCompont;
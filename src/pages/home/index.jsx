import React from 'react'
import "./index.css"

import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.min.css'
import banner1Img from "../../assets/images/home/index/banner_1.jpg"
import banner2Img from "../../assets/images/home/index/banner_2.jpg"
import banner3Img from "../../assets/images/home/index/banner_3.jpg"
import banner4Img from "../../assets/images/home/index/banner_4.jpg"

import funset1Img from "../../assets/images/home/index/funset_1.png"
import funset2Img from "../../assets/images/home/index/funset_2.png"
import funset3Img from "../../assets/images/home/index/funset_3.png"
import funset4Img from "../../assets/images/home/index/funset_4.png"
import funset5Img from "../../assets/images/home/index/funset_5.png"
import goodsItem from "../../assets/images/home/index/goods1.jpg"
import goodsItem2 from "../../assets/images/home/index/good2.jpg"
import goodsItem3 from "../../assets/images/home/index/goods3.jpg"
class IndexCompont extends React.Component {
  constructor (props){
    super (props)
    this.state={
      funsetArr:[
        {
          img:funset1Img,
          id:1
        },{
          img:funset2Img,
          id:2
        },{
          img:funset3Img,
          id:3
        },{
          img:funset4Img,
          id:4
        },{
          img:funset5Img,
          id:5
        }
       ],
       bannerArr:[
        {
          img:banner1Img,
          id:1
        },{
          img:banner2Img,
          id:2
        },{
          img:banner3Img,
          id:3
        },{
          img:banner4Img,
          id:4
        }
       ]
    }
  }
  componentDidMount(){
      
    new Swiper('.swiper-container', {
      loop:true,
      autoplay:true,
      pagination: {
      el: '.swiper-pagination',
      },
    });
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
          
        
          <div className="swiper-container">
              <div className="swiper-wrapper">
                
                  {this.state.bannerArr.map(item=>
                  (
                    <div class="swiper-slide">
                      <img src={item.img} alt="" />
                    </div>
                  ))  
                  }     
              </div>
              <div className="swiper-pagination"></div> 
            </div>
      
          <div className="quickNav">
              <ul>
                <li className="quickImg">
                  <img src={funset1Img} alt=""/>
                </li>
                <li><span className="quickTitle">潮流女装</span></li>
              </ul>
              <ul>
                <li className="quickImg">
                  <img src={funset2Img} alt=""/>
                </li>
                <li><span className="quickTitle">潮流女装</span></li>
              </ul>
              <ul>
                <li className="quickImg">
                  <img src={funset3Img} alt=""/>
                </li>
                <li><span className="quickTitle">潮流女装</span></li>
              </ul>
              <ul>
                <li className="quickImg">
                  <img src={funset4Img} alt=""/>
                </li>
                <li><span className="quickTitle">手机数码</span></li>
              </ul>  
          </div>
              {/*好货*/ } 
           <div className="goods">
             <div>
                <div className="goodstitle">
                  <span>潮流女装</span>
                </div>
                <div className="goodsContent">
                  <div className="goodsContentLeft"> 
                    <span className="goodsContentItemTitleDetail">高跟鞋女2018新款春季单鞋仙女甜美链子尖头防女台细跟女鞋一字带</span>
                    <span className="goodsContentItemTitleDisCount">精品打折</span>
                    <span className="goodsContentItemPrice">12.8</span>
                    <img src={goodsItem} alt=""/>   
                </div>
                  <div className="goodsContentRight">
                  <div className="goodsContentRightItemRow">
                    <span className="goodsContentRightItemRowTitle">欧美尖头蝴蝶结拖鞋女夏外穿2018新款绸缎面细跟凉拖半拖鞋穆勒鞋</span>
                    <span className="goodsContentRightItemRowChoice">品质精挑</span>
                    <img src={goodsItem2} alt=""/>
                  </div>
                  <div className="goodsContentRightItemRow">
                    <span className="goodsContentRightItemRowTitle">老爹鞋女韩版ulzzang原宿百搭网鞋透气网面内增高运动鞋网鞋夏季</span>
                    <span className="goodsContentRightItemRowChoice">品质精挑</span>
                    <img src={goodsItem3} alt=""/>
                  </div>
                </div>
              </div>
              {/*女鞋*/ } 
              <div className="goodsNew">
                <ul className='goodsNewList'>
                  <li className="goodsNewListTitle">小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</li>
                  <li className="goodsNewListImg">
                    <img src={goodsItem} alt=""/>
                  </li>
                  <li className="oldPrice">288</li>
                  <li className="newPrice">576</li>
                </ul>
                <ul className='goodsNewList'>
                <li className="goodsNewListTitle">小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</li>
                  <li className="goodsNewListImg">
                    <img src={goodsItem2} alt=""/>
                  </li>
                  <li className="oldPrice">288</li>
                  <li className="newPrice">576</li>
                </ul>
                <ul className='goodsNewList'>
                <li className="goodsNewListTitle">小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</li>
                  <li className="goodsNewListImg">
                    <img src={goodsItem3} alt=""/>
                  </li>
                  <li className="oldPrice">288</li>
                  <li className="newPrice">576</li>
                </ul>
                <ul className='goodsNewList'>
                <li className="goodsNewListTitle">小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</li>
                  <li className="goodsNewListImg">
                    <img src={goodsItem} alt=""/>
                  </li>
                  <li className="oldPrice">288</li>
                  <li className="newPrice">576</li>
                </ul>
              </div>    
            </div>
          </div>       
           {/*男装*/ } 
            <div className="man">
              <div className="goodstitle">
                <span>品牌男装</span>
              </div>
              <div className="manGoodsWrap1">
                  <ul className="manGoodsCol">
                    <li className="manGoodsColTitle">新款短袖男士夏季3d立体图案体恤猴子搞怪大猩猩个性t恤大码衣服</li>
                    <li className="isShow">火爆开售</li>
                    <li className="manGoodsColImg">
                      <img src={goodsItem3} alt=""/>
                    </li>
                  </ul>
                  <ul className="manGoodsCol">
                    <li className="manGoodsColTitle">新款短袖男士夏季3d立体图案体恤猴子搞怪大猩猩个性t恤大码衣服</li>
                    <li className="isShow">火爆开售</li>
                    <li className="manGoodsColImg">
                      <img src={goodsItem3} alt=""/>
                    </li>
                  </ul>
              </div>
              <div className="goodsNew">
                <ul className='goodsNewList'>
                  <li className="goodsNewListTitle">牛仔裤男宽松九分裤韩版潮流文艺男生直筒夏季薄裤子百搭学生港风</li>
                  <li className="goodsNewListImg">
                    <img src={goodsItem} alt=""/>
                  </li>
                  <li className="oldPrice">288</li>
                  <li className="newPrice">576</li>
                </ul>
                <ul className='goodsNewList'>
                <li className="goodsNewListTitle">牛仔裤男宽松九分裤韩版潮流文艺男生直筒夏季薄裤子百搭学生港风</li>
                  <li className="goodsNewListImg">
                    <img src={goodsItem2} alt=""/>
                  </li>
                  <li className="oldPrice">119</li>
                  <li className="newPrice">576</li>
                </ul>
                <ul className='goodsNewList'>
                <li className="goodsNewListTitle">衣长: 常规领型: 连帽颜色: 白色 黑色尺码: S 现货 M 现货 L 现货面料分类: 涂层布款式细节: 多口袋品牌: harsh and cruel/桀骜不驯男装-穿着方式: 外穿厚薄: 加厚填充物: 灰鸭绒适用场景: 其他休闲基础风格: 青春流行</li>
                  <li className="goodsNewListImg">
                    <img src={goodsItem3} alt=""/>
                  </li>
                  <li className="oldPrice">69</li>
                  <li className="newPrice">138</li>
                </ul>
                <ul className='goodsNewList'>
                <li className="goodsNewListTitle">HARSHCRUEL 秋冬男保暖充绒夹棉加厚防风羽绒棉服高领面罩TPU外套</li>
                  <li className="goodsNewListImg">
                    <img src={goodsItem} alt=""/>
                  </li>
                  <li className="oldPrice">69</li>
                  <li className="newPrice">138</li>
                </ul>
              </div> 
            </div>   


            {/*办公*/ } 
            <div className="office">
                <div className="goodsOfficetitle">
                  <span>办公用品</span>
                </div>
                <div className="goodsOfficeContent">
                  <div className="goodsOfficeContentLeft"> 
                    <span className="goodsContentItemTitleDetail">酷睿i5四核GTX1060独显台式机组装电脑主机整机 绝地求生吃鸡游戏</span>
                    <span className="goodsContentItemTitleDisCount">精品打折</span>
                    <span className="goodsContentItemPrice">4599</span>
                    <img src={goodsItem} alt=""/>   
                </div>
                  <div className="goodsContentRight">
                  <div className="goodsContentRightItemRow">
                    <span className="goodsContentRightItemRowTitle">欧美尖头蝴蝶结拖鞋女夏外穿2018新款绸缎面细跟凉拖半拖鞋穆勒鞋</span>
                    <span className="goodsContentRightItemRowChoice">品质精挑</span>
                    <img src={goodsItem2} alt=""/>
                  </div>
                  <div className="goodsContentRightItemRow">
                    <span className="goodsContentRightItemRowTitle">老爹鞋女韩版ulzzang原宿百搭网鞋透气网面内增高运动鞋网鞋夏季</span>
                    <span className="goodsContentRightItemRowChoice">品质精挑</span>
                    <img src={goodsItem3} alt=""/>
                  </div>
                </div>
              </div> 
              <div className="goodsNew">
                <ul className='goodsNewList'>
                  <li className="goodsNewListTitle">小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</li>
                  <li className="goodsNewListImg">
                    <img src={goodsItem} alt=""/>
                  </li>
                  <li className="oldPrice">288</li>
                  <li className="newPrice">576</li>
                </ul>
                <ul className='goodsNewList'>
                <li className="goodsNewListTitle">小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</li>
                  <li className="goodsNewListImg">
                    <img src={goodsItem2} alt=""/>
                  </li>
                  <li className="oldPrice">288</li>
                  <li className="newPrice">576</li>
                </ul>
                <ul className='goodsNewList'>
                <li className="goodsNewListTitle">小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</li>
                  <li className="goodsNewListImg">
                    <img src={goodsItem3} alt=""/>
                  </li>
                  <li className="oldPrice">288</li>
                  <li className="newPrice">576</li>
                </ul>
                <ul className='goodsNewList'>
                <li className="goodsNewListTitle">小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</li>
                  <li className="goodsNewListImg">
                    <img src={goodsItem} alt=""/>
                  </li>
                  <li className="oldPrice">288</li>
                  <li className="newPrice">576</li>
                </ul>
              </div>               
            </div>
       
            {/*为您推荐*/ }
            <div className="goodsRecommend">
              <span>为您推荐</span>
            </div>
            <div className="goodsRecommendContent">
              <div className="goodsRecommendContentItem">
                  <div className="goodsRecommendContentItemImg"><img src={goodsItem} alt=""/></div>
                  <div className="goodsRecommendContentItemTitle"><span>ONLY冬装新品雪纺拼接流苏腰带长款连衣裙女</span></div>
                  <div className='goodsRecommendContentItemPrice'>399</div>
              </div>
              <div className="goodsRecommendContentItem">
                  <div className="goodsRecommendContentItemImg"><img src={goodsItem} alt=""/></div>
                  <div className="goodsRecommendContentItemTitle"><span>ONLY冬装新品雪纺拼接流苏腰带长款连衣裙女</span></div>
                  <div className='goodsRecommendContentItemPrice'>399</div>
              </div>
              <div className="goodsRecommendContentItem">
                  <div className="goodsRecommendContentItemImg"><img src={goodsItem} alt=""/></div>
                  <div className="goodsRecommendContentItemTitle"><span>ONLY冬装新品雪纺拼接流苏腰带长款连衣裙女</span></div>
                  <div className='goodsRecommendContentItemPrice'>399</div>
              </div>
              <div className="goodsRecommendContentItem">
                  <div className="goodsRecommendContentItemImg"><img src={goodsItem} alt=""/></div>
                  <div className="goodsRecommendContentItemTitle"><span>ONLY冬装新品雪纺拼接流苏腰带长款连衣裙女</span></div>
                  <div className='goodsRecommendContentItemPrice'>399</div>
              </div>
              <div className="goodsRecommendContentItem">
                  <div className="goodsRecommendContentItemImg"><img src={goodsItem} alt=""/></div>
                  <div className="goodsRecommendContentItemTitle"><span>ONLY冬装新品雪纺拼接流苏腰带长款连衣裙女</span></div>
                  <div className='goodsRecommendContentItemPrice'>399</div>
              </div>
              <div className="goodsRecommendContentItem">
                  <div className="goodsRecommendContentItemImg"><img src={goodsItem} alt=""/></div>
                  <div className="goodsRecommendContentItemTitle"><span>ONLY冬装新品雪纺拼接流苏腰带长款连衣裙女</span></div>
                  <div className='goodsRecommendContentItemPrice'>399</div>
              </div>
              <div className="goodsRecommendContentItem">
                  <div className="goodsRecommendContentItemImg"><img src={goodsItem} alt=""/></div>
                  <div className="goodsRecommendContentItemTitle"><span>ONLY冬装新品雪纺拼接流苏腰带长款连衣裙女</span></div>
                  <div className='goodsRecommendContentItemPrice'>399</div>
              </div>
              <div className="goodsRecommendContentItem">
                  <div className="goodsRecommendContentItemImg"><img src={goodsItem} alt=""/></div>
                  <div className="goodsRecommendContentItemTitle"><span>ONLY冬装新品雪纺拼接流苏腰带长款连衣裙女</span></div>
                  <div className='goodsRecommendContentItemPrice'>399</div>
              </div>
              <div className="goodsRecommendContentItem">
                  <div className="goodsRecommendContentItemImg"><img src={goodsItem} alt=""/></div>
                  <div className="goodsRecommendContentItemTitle"><span>ONLY冬装新品雪纺拼接流苏腰带长款连衣裙女</span></div>
                  <div className='goodsRecommendContentItemPrice'>399</div>
              </div>
              <div className="goodsRecommendContentItem">
                  <div className="goodsRecommendContentItemImg"><img src={goodsItem} alt=""/></div>
                  <div className="goodsRecommendContentItemTitle"><span>ONLY冬装新品雪纺拼接流苏腰带长款连衣裙女</span></div>
                  <div className='goodsRecommendContentItemPrice'>399</div>
              </div>
              <div className="goodsRecommendContentItem">
                  <div className="goodsRecommendContentItemImg"><img src={goodsItem} alt=""/></div>
                  <div className="goodsRecommendContentItemTitle"><span>ONLY冬装新品雪纺拼接流苏腰带长款连衣裙女</span></div>
                  <div className='goodsRecommendContentItemPrice'>399</div>
              </div>
              <div className="goodsRecommendContentItem">
                  <div className="goodsRecommendContentItemImg"><img src={goodsItem} alt=""/></div>
                  <div className="goodsRecommendContentItemTitle"><span>ONLY冬装新品雪纺拼接流苏腰带长款连衣裙女</span></div>
                  <div className='goodsRecommendContentItemPrice'>399</div>
              </div>
              <div className="wrapFooter">

              </div>
            </div> 
       </div>
      )
  }

}

export default IndexCompont;
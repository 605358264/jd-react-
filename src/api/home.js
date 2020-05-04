import baseUrl from '../assets/js/config/config.js'
import token from '../assets/js/config/config.js'

const api="/api"

// 轮播图接口
const swiper="/home/index/slide"

const swiperApi=`${baseUrl.baseUrl}${api}${swiper}?token=${token.token}`


//首页导航

const homeNav="/home/index/nav"

const homeNavApi=`${baseUrl.baseUrl}${api}${homeNav}?token=${token.token}`


// 首页产品

const homeProduct="/home/index/goodsLevel"

const homeProductApi=`${baseUrl.baseUrl}${api}${homeProduct}?token=${token.token}`


//  获取首页推荐
const homeRecommod="/home/index/recom"

const homeRecommodApi=`${baseUrl.baseUrl}${api}${homeRecommod}?token=${token.token}`

 const Home={
    swiperApi,
    homeNavApi,
    homeProductApi,
    homeRecommodApi
 }   




export default Home
   
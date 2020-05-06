import baseUrl from '../assets/js/config/config.js'
import token from '../assets/js/config/config.js'

const api="/api"
// 首页产品

const navList="/home/category/menu"

const navListApi=`${baseUrl.baseUrl}${api}${navList}?token=${token.token}`


//  产品右侧商品
const productShow="/home/category/show"

const productShowApi=`${baseUrl.baseUrl}${api}${productShow}?token=${token.token}`

 const Classify={
    navListApi,
    productShowApi
 }   




export default Classify
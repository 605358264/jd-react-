
import echo from './echo'

//监视滚动条的利顶部的距离

function setScrollTop(val=0){
    setTimeout(()=>{
        document.body.scrollTop=val;
        document.documentElement.scrollTop=val;
    },300);
}

function lazyImg(){
    echo.init({
        offset:100,
        throttle:0
    })
}

export {
    setScrollTop,
    lazyImg
}
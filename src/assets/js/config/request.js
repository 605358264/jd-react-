
import {fetch} from 'whatwg-fetch';

function request(pUrl,pType="GET"){
    return fetch(pUrl,{method:pType}).then(res=>{
        return res.json()})
}
export {request} 
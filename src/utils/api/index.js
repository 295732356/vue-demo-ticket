import http from '../utils/http'

let resquest = "/testIp/request/"

// get请求
export function getListAPI(params){
    return http.get(`${resquest}/getList.json`,params)
}
// post请求
export function postFormAPI(params){
    return http.post(`${resquest}/postForm.json`,params)
}
// put 请求
export function putSomeAPI(params){
    return http.put(`${resquest}/putSome.json`,params)
}
// delete 请求
export function deleteListAPI(params){
    return http.delete(`${resquest}/deleteList.json`,params)
}
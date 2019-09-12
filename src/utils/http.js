import axios from "axios";
import loading from "@lib/loading/index.js";
// console.log(loading.close())
let http = axios.create({
    withCredentials:true,
    timeout:3000
})

// 请求拦截
http.interceptors.request.use((config)=>{
    if(config.method == "get"){
        config.params = {...config.data}
    }else{
        // config.headers["content-type"] == "application/x-www-form-urlencoded";
    }
    loading.open();
    return config;
},(err)=>{
    return Promise.reject(err);
})

// 响应拦截
http.interceptors.response.use((res)=>{
    if(res.status == 200){
        loading.close();
        return res.data;
    }
    
})

export default http;
// (method,url,data)=>{
    //    if(method == "get"){
//       return http.get(url,{
//            params:data
//        })
//    }else if(method == "post"){
//        return http.post(url,data);
//    }
    // return http({method,url,data});
// }
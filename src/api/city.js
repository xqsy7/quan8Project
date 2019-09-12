import http from "@utils/http.js";

export const city = ()=>http({
    methods:"get",
    url:"/dianying/cities.json",
})
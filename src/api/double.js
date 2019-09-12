import http from "@utils/http.js";

export const city = ()=>http({
    methods:"get",
    url:"localhost:3000/userList",
})
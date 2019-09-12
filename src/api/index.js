import http from "@utils/http.js";

// 首页头部导航栏
export const headNav = ()=> http({
    methods:"get",
    url:"/api/category/get-category-list?entityId=4",
})

// banner 轮播图
export const banner = ()=> http({methods:"get",url:"/api/category/product/model-detail-by-model-id-new?entityId=4&modelId=-1&proModelId=1&source=3&userId=669231&tuserId=669231"});

// banner下的图
export const imgData = ()=> http({methods:"get",url:"/api/category/product/model-detail-by-model-id-new?entityId=4&modelId=10021&proModelId=19&source=3&userId=669231&tuserId=669231"})

//首页 icon 导航图

export const iconNav = ()=> http({methods:"get",url:"/api/category/product/model-detail-by-model-id-new?entityId=4&modelId=10022&proModelId=2&source=3&userId=669231&tuserId=669231"})

//首页 优惠头条

export const groupTop = ()=>http({methods:"get",url:"/api/category/product/model-detail-by-model-id-new?entityId=4&modelId=10023&proModelId=13&source=3&userId=669231&tuserId=669231"}) 

// 首页 发现好货 左边数据

export const findProduct = (id=1)=>http({methods:"get",url:"/api/category/index/lingquan-live-new?pageSize=10&entityId=4&type=1&userId=669231&tuserId=669231",
    data:{
        pageId:id
    }
})

// 首页 发现好货 右边数据

export const findProductR = (id=2)=>http({methods:"get",url:"/api/category/index/lingquan-live-new?pageSize=10&entityId=4&type=1&userId=669231&tuserId=669231",
    data:{
        pageId:id
    }
    })

// 搜索页面
export const seach = (value)=>http({
    methods:"get",
    url:"/index.php",
    data:{
        r:"index/kwarr",
        kw:value,
        token:false
    }
})

// 详情页

export const getData = (goodsIds)=>http({
    methods:"get",
    url:"/api/goods/get-goods-detail-img?",
    data:{
        goodsId:goodsIds,
        entityId:4
    }
})
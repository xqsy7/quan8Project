export default {
        path: "/menu",
        name: "Menu",
        meta: {
            title:"分类详情"
    },
    children: [
        {
            path: "/menu",
            redirect:"popularity",
        },
        {
        path: "popularity",
        name: "Popularity",
        meta: {
            title:"人气"
        },
        component:()=>import("@components/menuPage/popularity"),
    },
    {
        path: "newest",
        name: "Newest",
        meta: {
            title:"最新"
        },
        component:()=>import("@components/menuPage/newest"),
        },
    {
        path: "sales",
        name: "Sales",
        meta: {
            title:"销量"
        },
        component:()=>import("@components/menuPage/sales"),
        },
    

    ],
        component:()=>import("@pages/menu")
    }

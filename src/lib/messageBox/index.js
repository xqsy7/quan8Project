import MessageBox from "./index.vue";
import Vue from "vue";
// import { defaultCipherList } from "constants";
class Message{
    constructor() {
        // 通过vue.extend获取Vue  继承
        this.MessageBox = Vue.extend(MessageBox);
        this.defaultValue = {
            title: "标题",
            content: "内容",
            handleOk:function(){}
        }
    }
    init(options) {
        for (var key in options) {
            this.defaultValue[key] = options[key];
        }
        // Object.keys(options)
        var _this = this;
        //实例化
        this.MessageVm =new this.MessageBox({
            el:document.createElement("div"),
            data: {
                title: this.defaultValue.title,
                content:this.defaultValue.content,
            },
            methods: {
                handleConfirm() {
                    _this.defaultValue.handleOk && _this.defaultValue.handleOk();
                    // alert(1);
                    document.body.removeChild(_this.MessageVm.$mount().$el)
                }
            }
        })
        document.body.appendChild(this.MessageVm.$mount().$el)
    }
}

// new Message.init({
//     title: "",
//     content: "",
//     handleOk: () => {
        
//     }
    
// })

export default new Message();
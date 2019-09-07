<template>
    <div>
        <mt-tabbar v-model="selected" >
            <mt-tab-item id="tab1" href="#/Index">
                <img slot="icon" src="main/shoye.png">
                首页
            </mt-tab-item>
            <mt-tab-item id="tab2" href="#/focus">
                <img slot="icon" src="main/guan.png">
                关注
            </mt-tab-item>
            <mt-tab-item id="tab3" href="#/message">
                <img slot="icon" src="main/xiao.png">
                消息
            </mt-tab-item>
            <mt-tab-item id="tab4" href="#/mine">
                <img slot="icon" src="main/wo.png" data-aaa="main/wo.png">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
export default{
    data(){
        return {
            selected:'tab1'
        }
    },
    methods:{
        
    }
}
</script>
<style>
    .mint-tab-item-label{
        color: #8a8a8a !important; 
    }
</style>
<template>
    <div class="aaa">
        <div class="title">
            <img src="../assets/login.png" alt="">
            <h2>一个优质创作社区</h2>
        </div>
        <mt-field label="手机号" placeholder="请输入手机号" v-model="userphone"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" v-model="userpwd" ></mt-field>
        <div class="xyi">
            <input type="checkbox" id="bool"><label for="bool">登录即同意用户协议和联通统一认证服务条款</label>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            userphone:'',
            userpwd:'',
        }
    },
}
</script>
<style scoped>
    .aaa{
        position: absolute;
        top:25%;
        left:50%;
        margin-left:-160px;
    }
    div{
        text-align: center;
    }
    .title{
        display: flex;
        align-items: baseline;
        justify-content: center;
        align-items: center;
    }
    .xyi{
        margin-top:1rem;
    }
    label{
        width:90%;
        font-family: 微软雅黑;
        font-size:1rem;
        color:#8a8a8a;
    }
</style>
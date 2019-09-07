<template>
    <div class="aaa">
        <div class="title">
            <img src="../assets/login.png" alt="">
            <h2>一个优质创作社区</h2>
        </div>
        <mt-field label="手机号" placeholder="请输入手机号" v-model="userphone"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" v-model="userpwd" ></mt-field>
        <mt-field label="确认密码" placeholder="请输入密码" v-model="userpwd" ></mt-field>
        <mt-button type="danger">danger</mt-button>
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
        top:20%;
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
    .mint-button--normal {
        margin-top:1rem;
        width:90%;
    }
</style>
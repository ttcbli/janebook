<template>
    <div class="aaa">
        <div class="title">
            <img src="../assets/login.png" alt="">
            <h2>asdasd</h2>
        </div>
        <mt-field label="手机号" placeholder="请输入手机号" v-model="userphone"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" v-model="userpwd" ></mt-field>
        <div>
            <input type="checkbox" id="bool"><label for="bool">asdasdas</label>
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
</style>
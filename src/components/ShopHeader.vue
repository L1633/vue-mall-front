<template>
    <div class="shop-header">
        <div class="header-main">

            <div class="header-logo"></div>

            <div class="header-nav">
                <ul>
                    <li class="fl">
                        <a href="/">魅族商城</a>
                    </li>
                    <li class="fl">魅族手机
                        <div class="header-nav-child">
                            111
                        </div>
                    </li>
                    <li class="fl">魅蓝手机
                        <div class="header-nav-child">
                            222
                        </div>
                    </li>
                    <li class="fl">数码配件
                        <div class="header-nav-child">
                            333
                        </div>
                    </li>
                    <li class="fl">影音娱乐
                        <div class="header-nav-child">
                            444
                        </div>
                    </li>
                    <li class="fl">家居生活
                        <div class="header-nav-child">
                            555
                        </div>
                    </li>
                    <li class="fl">服务</li>
                    <li class="fl">专卖店</li>
                    <li class="fl">Flyme</li>
                    <li class="fl">社区</li>
                </ul>
            </div>
            
            <div class="header-search fl">
                <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </div>

            <el-dropdown>
                <span class="el-dropdown-link">
                    <i class="el-icon-info el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown" v-if="!$store.state.token">
                    <el-dropdown-item @click.native="login">立即登录</el-dropdown-item>
                    <el-dropdown-item @click.native="register">立即注册</el-dropdown-item>
                    <el-dropdown-item>我的订单</el-dropdown-item>
                    <el-dropdown-item>M码通道</el-dropdown-item>
                </el-dropdown-menu>

                <el-dropdown-menu slot="dropdown" v-if="$store.state.token">
                    <el-dropdown-item @click.native="userCenter">个人中心</el-dropdown-item>
                    <el-dropdown-item @click.native="dd">我的订单</el-dropdown-item>
                    <el-dropdown-item>M码通道</el-dropdown-item>
                    <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
           
           <el-dropdown>
                <span class="el-dropdown-link">
                    <i class="el-icon-info el-icon--right"></i>
                </span>

                <el-dropdown-menu slot="dropdown" v-if="!$store.state.token">
                    <el-dropdown-item>
                        <p>登录后可显示您账号中已添加的商品</p>
                    </el-dropdown-item>
                </el-dropdown-menu>

                <el-dropdown-menu slot="dropdown" v-if="$store.state.token">
                    <el-dropdown-item>
                        <p>一大堆垃圾</p>
                    </el-dropdown-item>
                </el-dropdown-menu>

            </el-dropdown>

        </div>

        

    </div>
</template>

<script>
    export default {
        data() {
            return {
                input:''
            }
        },
        methods:{
            login(){
                this.$router.push('/login');
            },
            register(){
                this.$router.push('/register');
            },
            userCenter(){
                this.$router.push('/usercenter');
            },
            dd(){

            },
            logout(){
                this.axios.post('/auth/logout')
                .then(res=>{
                    this.$store.commit('del_token');
                    this.$router.push('/');
                }).catch(error=>{
                    console.log(error);
                });
            }
        }

    }
</script>

<style scoped lang='scss'>
    .shop-header{
        width: 100%;
        height: 80px;
        position: relative;
        // background-color: hotpink;
        .header-main{
            width: 1240px;
            height: 100%;
            margin: 0 auto;
            line-height: 80px;
            .header-logo{

            }
            .header-nav{
                ul{
                    li{
                        padding: 0 15px;
                        &:hover .header-nav-child{
                            display:block;
                            // height: 200px;
                        }
                        .header-nav-child{
                            display: none;
                            position: absolute;
                            left: 0;
                            width: 100%;
                            height: 200px;
                            background-color: #fff;
                            transition: all .6s ease-in-out;
                            z-index: 100;
                        }
                    }
                }
                
            }
            .header-search{
                width: 180px;
                height: 30px;
            }
        }
        
    }
</style>
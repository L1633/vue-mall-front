<template>
    <div>
        <div class="center-right-top">

            <div class="user-card fl">
                <div class="pic fl">
                    <img src="../../static/images/photo1.jpg" alt="">
                </div>
                <div class="name fl">
                    <span > {{info.name}} </span>
                    <p class="small">欢迎您回来！</p>
                </div>
            </div>
            
            <div class="user-info fl">
                <ul>
                    <li class="notice-color">商城账号：<span ></span></li>
                    <li class="notice-color">绑定邮箱：<span >{{info.email}}</span></li>
                    <li class="notice-color">修改个人信息<span ></span></li>
                </ul>
            </div>
            
            <div class="center-right-bottom">


            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                info:{ }
            }
        },
        created(){
            this.userInfo()
        },
        methods: {
            userInfo() {
                this.axios.get("/auth/user")
                .then( (response)=> {
                    this.info = response.data.data;
                })
                .catch( (error)=> {
                    console.log(error);
                });
            },
        },
    }
</script>

<style scoped lang="scss">
    .center-right-top{
                height: 200px;
                width: 100%;
                border-bottom: 1px solid #ccc;
                .user-card{
                    width: 50%;
                    .name{
                        margin: 20px 0 0 30px;
                        span{
                            font-size: 24px;
                            font-weight: 400;
                            color: #616161;
                        }
                    }
                    p{
                        line-height: 40px;
                        color: #999;
                    }
                }
                .user-info{
                    padding-top: 14px;
                    ul li{
                        padding: 6px 0;
                        font-size: 14px;
                    }
                }
            }

</style>
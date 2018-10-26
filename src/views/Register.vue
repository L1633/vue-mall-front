<template>
    <div class="shop-register">
        <div class="register-logo">
                logo
        </div>
        <div class="register-main clearfix">

            <div class="register-form fr">

                <el-form ref="form" :model="form">

                    <el-form-item>
                        <el-input type="text" v-model="form.name" placeholder="请输入用户名"></el-input>
                    </el-form-item>

                    <el-form-item prop="email" :rules="[{ required: true, message: '请输入邮箱地址', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }]" >
                        <el-input type="email" v-model="form.email" placeholder="请输入邮箱" ></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-input type="password" v-model="form.password" auto-complete="off" placeholder="请输入密码"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <div id="captchaBox"></div>
                    </el-form-item>
                    <p class="Extra-Small">点击立即注册，即表示您同意并愿意遵守 Flyme服务协议 和 法律声明</p>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('form')">立即注册</el-button>
                    </el-form-item>

                    <router-link to='/login' class="small">登录</router-link>
                </el-form>

            </div>
        
        </div>
    </div>
</template>

<script>
    import gtInit from "../utils/gt.js";
    export default {
        data() {
            return {
                form:{
                    name:'',
                    email:'',
                    password:'',
                },
                gtParams:{ },
                geetest_status:''
            }
        },
        created(){
            this.getGt();
        },
        methods:{
            // 获取极验数据
            getGt(){
                // 加随机数防止缓存
                var _this = this;
                this.axios.post('/geetest_api_v1?t='+ (new Date()).getTime())
                .then( (response)=> {
                    console.log(response);
                    this.geetest_status = response.data.status;
                    initGeetest({
                        gt: response.data.gt,
                        challenge: response.data.challenge,
                        offline: !response.data.success, // 表示用户后台检测极验服务器是否宕机，与SDK配合，用户一般不需要关注
                        new_captcha: response.data.new_captcha, // 用于宕机时表示是新验证码的宕机
                        product: "float", // 产品形式，包括：float，embed，popup。注意只对PC版验证码有效
                        width: "290px"
                    }, (captchaObj)=> {
                        captchaObj.appendTo("#captchaBox"); //将验证按钮插入到宿主页面中captchaBox元素内
                        captchaObj.onSuccess(()=>{
                            //your code
                            var result = captchaObj.getValidate();
                            console.log(result,'滑动成功后给的参数');
                            var { geetest_challenge,geetest_seccode,geetest_validate } = result;
                            _this.gtParams = { geetest_challenge, geetest_seccode, geetest_validate };
                        }).onError(()=>{
                            //your code
                        })
                    });
                })
                .catch( (error)=> {
                    console.log(error);
                });
            },
            // 提交表单
            submitForm(form){
                this.$refs[form].validate((valid) => {
                    if (valid) {
                        this.axios.post('/auth/register',{
                            name:this.form.name,
                            email:this.form.email,
                            password:this.form.password,
                            geetest_status:this.geetest_status,
                            ...this.gtParams,
                        })
                        .then( (response)=> {
                            console.log(response);
                            if(response.data.status_code == 0){
                                console.log("注册成功！！！！！")
                            }
                        })
                        .catch( (error)=> {
                            console.log(error);
                        });
                    } else {
                        alert('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .shop-register{
        width: 100%;
        .register-logo{
            width: 1240px;
            height: 98px;
            margin: 0 auto;
        }
        .register-main{
            width: 100%;
            height: 750px;
            // margin: 0 auto;
            position: relative;
            background-color: #f8fcff;
            
            .register-form{
                width: 360px;
                height: 410px;
                position: absolute;
                top: 10%;
                right: 380px;
                background-color: #FFF;
                padding: 70px 35px 10px;
                border-radius: 2px;
            }
        }
        
    }
</style>
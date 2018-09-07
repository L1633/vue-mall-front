<template>
  <div>

    <div class="title">新增收货地址</div>
    <el-form  :model="form" class="demo-form-inline" label-position="left" label-width="120px">

      <el-row>    
          <el-col :span="9" >
              <el-form-item label="收货人姓名">
                  <el-input v-model="form.contact_name" placeholder="请输入经营者姓名"></el-input>
              </el-form-item>
          </el-col>

          <el-col :span="9" :offset="2">
              <el-form-item label="收货人手机号">
                  <el-input v-model="form.contact_phone" placeholder="请输入手机号"></el-input>
              </el-form-item>
          </el-col>
      </el-row>

      <el-form-item label="收货人地址" prop="desc">
        <el-cascader :options="options" @change="handleItemChange"></el-cascader>
      </el-form-item>

      <el-form-item label="邮编" prop="desc">
         <el-input v-model="form.zip" placeholder="请输邮编"></el-input>
      </el-form-item>

      <el-form-item label="详细地址" prop="desc">
        <el-input type="textarea" v-model="form.address"></el-input>
      </el-form-item>


      <el-form-item>
        <el-button type="primary" @click="add">保存</el-button>
      </el-form-item>
    </el-form>

    <div>已有地址</div>
      <div v-for="(item,index) in addressHas" :key="item.id" @click="deleteAddr(item.id,index)">
        {{item.contact_name}}{{item.address}}{{item.contact_phone}}操作
      </div>
  </div>
</template>

<script>
  import city_arr from '../city/city_data.js'
  export default {
    data() {
      return {
        // 城市地址
        options:city_arr,
        form:{
          contact_name:'',
          contact_phone:'',
          province:'',
          city:'',
          zip:'',
          district:'',
          address:''
        },
        addressHas:[]  //已有地址
      }
    },
    created(){
      this.init();
    },
    methods: {
      handleItemChange(val){
        console.log(val,'val',val[2]);
        this.form.province = val[0];
        this.form.city = val[1];
        this.form.district = val[2];
      },
      init() {
        this.axios.get('/addresses')
        .then(res=>{
          console.log(res);
          this.addressHas = res.data.list;
        })
        .catch(err=>{
          console.log(err);
        })
      },
      add(){
        this.axios.post('/addresses',this.form)
        .then(res=>{
          console.log(res);
          if(res.data.status_code == 0){
             this.$message({
                message: '添加成功',
                type: 'success'
              });
              this.form = {};
              this.init();
          }
        })
        .catch(err=>{
          console.log(err);
        })
      },
      changeAddr(){
        this.axios.put(`/addresses/${id}`)
        .then(res=>{
          console.log(res);
        })
        .catch(err=>{
          console.log(err);
        })
      },
      deleteAddr(id,index){
        this.axios.delete(`/addresses/${id}`)
        .then(res=>{
          console.log(res);
          this.addressHas.splice(index,1)
        })
        .catch(err=>{
          console.log(err);
        })
      }
    },
  }
</script>

<style scoped>

</style>
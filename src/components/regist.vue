<template>
	<div class="login clearfix">
	    <div class="login-wrap">	    	
	    	
	      <el-row type="flex" justify="center">

	        <el-form ref="loginForm" :model="user" status-icon label-width="80px">
	          <h3>{{$t('register.title')}}</h3>
	          <hr>
	          
	          
	          <el-form-item prop="username">
	            <el-input  v-model="user.username" :placeholder="$t('register.username')"></el-input>
	          </el-form-item>
	          <!-- <el-form-item prop="email" label="邮箱">
	            <el-input v-model="user.email" placeholder="请输入邮箱"></el-input>
	          </el-form-item> -->
	          <el-form-item prop="password">
	            <el-input v-model="user.password" show-password :placeholder="$t('register.password')"></el-input>
	          </el-form-item>
	          <el-form-item prop="mobile">
	            
	          </el-form-item>
	          <!-- <el-form-item>
	            <el-button type="primary" icon @click="doRegister()">注册账号</el-button>
	          </el-form-item> -->
	        </el-form>
	      </el-row>
	    </div>
	</div>



</template>
<script>
	
  export default{
  	
    name: '',
    components: {
    	
    },
    data() {
    	return {
    		user: {
		        username: "",
		        email: "",
		        password: "",
		        mobile:""
		    },
		    options: [{
		        'short': 'AD',
		        'name': '安道尔共和国',
		        'en': 'Andorra',
		        'tel': '376'
		      }, {
		        'short': 'AE',
		        'name': '阿拉伯联合酋长国',
		        'en': 'UnitedArabEmirates',
		        'tel': '971'
		      }, {
		        'short': 'AF',
		        'name': '阿富汗',
		        'en': 'Afghanistan',
		        'tel': '93'
		      }]

    	}
    },
    methods: {
    	getMobile(val) {
    		this.mobile = val;
    		console.log(this.mobile);
    	}
    }
   
  };
</script>

<style lang="scss" scoped="true">
.el-input{
	/deep/ .el-input__inner {
		width: 1000px;
		height: 200px;
		font-size: 50px;
		
	}
	
}

// .login {
//   width: 400px;
//   height: 740px;
//   // background: url("../assets/images/bg1.png") no-repeat;
//   background-size: cover;
//   overflow: hidden;
// }
// .login-wrap {
//   // background: url("../assets/images/login_bg.png") no-repeat;
//   background-size: cover;
//   width: 400px;
//   height: 300px;
//   margin: 215px auto;
//   overflow: hidden;
//   padding-top: 10px;
//   line-height: 40px;
// }
// #password {
//   margin-bottom: 5px;
// }
// h3 {
//   color: #0babeab8;
//   font-size: 24px;
// }
// hr {
//   background-color: #444;
//   margin: 20px auto;
// }
// a {
//   text-decoration: none;
//   color: #aaa;
//   font-size: 15px;
// }
// a:hover {
//   color: coral;
// }
// .el-button {
//   width: 80%;
//   margin-left: -50px;
// }


</style>

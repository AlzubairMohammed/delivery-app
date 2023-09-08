<template> 
    <div  class=" w-100 h-100 m-auto text-dark mt-5 " :class="{rtl:!$store.state.language} "> 
      <transition name="form" class=" h-100">
  <form class="col-sm-6 col-md-5 col-lg-4 py-4 py-sm-3 px-3 px-sm-5 border shadow-sm rounded h-75 m-auto mt-5" novalidate action="" method="get" v-if="$store.state.activeTab=='login'">
  <div class="baground h-100 py-5 px-3">
      
    <div class="form-floating mx-1 mb-2 mt-5">
          <input class="form-control" type="email" required>
          <label class="text-dark m-auto">   {{ $store.state.language ? 'Email' : 'البريد الألكترني' }}</label>
          <div class="valid-feedback">Good</div>
          <div class="invalid-feedback">Write valid email</div>
      </div>
      <div class="form-floating mx-1 mb-2">
          <input class="form-control" type="password" required>
          <label class="text-dark m-auto">   {{ $store.state.language ? 'password' : ' كلمة السر' }}</label>
          <div class="valid-feedback">Good</div>
          <div class="invalid-feedback">Please enter valid Password</div>
      </div>
      <div class="w-100 mx-1 p-0 mb-2 ">
              <button class=" btn btn-outline text-center border rounded bt-0 pb-1 mt-3 w-100 text-light" value="submet" @click="falid()">
                {{ $store.state.language ? 'login' : '  تسجيل الدخول' }}

              </button>
              </div>
      <div>
              <h6 class="mb-auto text-center text-light">
                {{ $store.state.language ? 'Or' : '  او' }}

              </h6>
                <div class="text-light">
                  <a href="#"><i class="bi bi-twitter m-1"></i></a>
                  <a href="#" ><i class="bi bi-facebook m-1"></i></a>
                    <a href="#"><i class="bi bi-google m-1"></i></a>
                </div>
                    </div>
                    
                  <p class="text-center text-light"> 
                        {{  $store.state.language ? ' Dont Have Account ?' : ' ليس لديك حساب ؟ ' }} 
                        <router-link to="/RegisterPage" class="text-light">{{  $store.state.language ? ' Register ' : ' إنشاء حساب ' }}</router-link></p>

 
  </div>  
  </form> 
  </transition>
   
</div> 
</template>
<script>
export default{
  methods:{
    falid(){
      var form = document.querySelector("form")
form.addEventListener("submit",function (e){
    if(!form.checkValidity()){
        e.preventDefault()
        form.classList.add("was-validated")
    }
})
    }
  }
}
 

</script>
<style >
    
      
button:hover, button:focus{
    color:  #fff !important;
    background-color: var(--sec-color) !important;
    border: 1px solid var(--sec-color) !important;
    box-shadow: none;
    outline-color: #fff !important;
  } 
 a {
   color:var(--main-color) !important;
   text-decoration: none !important;
 }
 a:hover{
  color: var(--sec-color) !important;
  border: 0;
 } 
 *:focus ,*:hover{
    
    outline:0px !important;
   outline-color: #fff !important;
    box-shadow: none !important;
  
}
 
.form-floating>.form-control {
    height: calc(1.5rem + 13px) !important;
}
.form-floating>label {
    padding: 0.6rem 0.75rem !important ;
}
.form-floating>.form-control {
     padding: 0 ;
} 
button {
    padding-top:0 !important
}
.baground{  
border-radius: 15% !important; 
background-color: #150a07 !important;
}
</style>

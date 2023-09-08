<template> 
    <div  class=" w-100 h-100 m-auto text-dark mt-5 " :class="{rtl:!$store.state.language} "> 
      <transition name="form" class=" h-100">
        <form class="col-sm-6 col-md-5 col-lg-4 py-4 py-sm-3 px-3 px-sm-5 border shadow-sm rounded h-75 m-auto mt-5" novalidate action="" method="get" v-if="$store.state.activeTab=='login'">
  <div class="baground h-100 py-5 px-3">
     
    <div class="form-floating mx-1 mb-2 mt-5">
          <input class="form-control" type="text" required>
          <label class="text-dark m-auto">   {{ $store.state.language ? 'Name' : ' الاسم  ' }}</label>
          <div class="valid-feedback">Good</div>
          <div class="invalid-feedback">Write valid Name</div>
      </div>
      <div class="form-floating mx-1 mb-2 ">
          <input class="form-control" type="text" required>
          <label class="text-dark m-auto">   {{ $store.state.language ? 'Cuntery' : '  الدوله  ' }}</label>
          <div class="valid-feedback">Good</div>
          <div class="invalid-feedback">Write valid Cuntery</div>
      </div>
      <div class="form-floating mx-1 mb-2">
          <input class="form-control" type="email" required>
          <label class="text-dark m-auto">   {{ $store.state.language ? 'Email' : 'البريد الألكترني' }}</label>
          <div class="valid-feedback">Good</div>
          <div class="invalid-feedback">Write valid Email</div>
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
                        {{  $store.state.language ? 'I Have Account ? ' : '  لديك حساب ؟  ' }}
                        <router-link to="/LoginPage" class="text-light">{{  $store.state.language ? ' Login ' : ' تسجيل ' }}</router-link></p>
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
<style>
.baground{  
border-radius: 15% !important; 
background-color: #150a07 !important;
}
</style>
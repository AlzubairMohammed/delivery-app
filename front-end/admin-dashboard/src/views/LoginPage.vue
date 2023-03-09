<template>
  <div class="home">
  
    <div  class="col-6 col-md-4 col-lg-3 col-xl-3 h-75 m-auto text-dark "> 
     
      <form action="" method="post"  class="form border rounded shadow-sm " id="form" >
  
        <div   class="form-floating mx-4  mb-2 mt-5">
          <input type="email" class="form-control" 
           oninvalid="this.setCustomValidity('Please Enter valid email')"
           oninput="setCustomValidity('')"  placeholder="Email" name="email"
            v-model="email" required>
           <label class="text-center">  
            {{ $store.state.language ? 'Email' : 'البريد الألكترني' }}
           </label>
           
         </div>
 
          <div class="form-floating mx-4 mb-2">
                   <input type="password" class="form-control " placeholder="Password" 
                   oninvalid="this.setCustomValidity('Please Enter valid password')"
                   oninput="setCustomValidity('')" 
                    name="password" v-model="password" required> 
                   <label  placeholder="Password" class= "m-auto text-center"> 
                      {{ $store.state.language ? 'Password' : 'كلمة السر' }}
                    </label>
            </div> 
            <div class="form-floating mx-4 p-0 mb-2 ">
             <button class="btn btn-outline  form-control text-center bt-0 pb-1 mt-3" value="submet" >
              {{ $store.state.language ? 'login' : '  تسجيل الدخول' }}

             </button>  
             </div>
          <div>
             <h6 class="mb-auto text-center">
              {{ $store.state.language ? 'Or' : '  او' }}

             </h6>
              <div>
                 <a href="#"><i class="bi bi-twitter m-1"></i></a>
                 <a href="#" ><i class="bi bi-facebook m-1"></i></a>
                   <a href="#"><i class="bi bi-google m-1"></i></a>
               </div>
                  </div>
                  
                 <p class="text-center"> 
                      {{  $store.state.language ? ' Dont Have Account ?' : ' ليس لديك حساب  ' }}
 <a href="#"> </a></p>
 <div class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
                  
       </form>
    </div>  
  </div>
</template>

<script>
// @ is an alias   /src 
import { createToaster } from "@meforma/vue-toaster";
 const toaster = createToaster({ /* options */ });

toaster. error('plec inter correct ');
export default {
methods: {
  data() {
    return {
      

    }
  },
      makeToast(email = null) {
        this.$bvToast.toast('Toast body content', {
          title: `email ${email || 'default'}`,
          email: email,
          solid: true
        })
      }
      
}
}
</script>
<style scope>
input{
  border: 1px #fff outset !important; 
}
button{
  color: #fff !important;
  background-color: #0a2719 !important;
 
} 
button:hover, button:focus{
    color: #0a2719 !important;
    background-color: #fff !important;
    border: 1px solid #0a2719 !important;
    box-shadow: none;
    outline-color: #fff !important;
  } 
 a {
   color: #0a2719 !important;
   text-decoration: none !important;
 }
 a:hover{
  color: #0a2719 !important;
  border: 0;
 }
  input:required {
  content: " mmmmmmmmmmm " !important;
 }
 *:focus ,*:hover{
    
    outline:0px !important;
   outline-color: #fff !important;
    box-shadow: none !important;
 
}
p{
  font-size: x-small;
}  
.form-floating>.form-control, .form-floating>.form-control-plaintext, .form-floating>.form-select {
    line-height: 0.25;
    border-bottom: inset;
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
</style>

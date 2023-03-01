<template>
  <div class="home">
  
    <div  class="col-6 col-md-4 col-lg-3 col-xl-3 h-75 m-auto text-dark "> 
     
      <form action="" method="post"  class="form border rounded shadow-sm " id="form" >
  
        <div   class="form-floating mx-4  mb-2 mt-5">
          <input type="email" class="form-control" placeholder="Email" name="email" v-model="Email" required>
           <label class="text-center">  
            {{ $store.state.language ? 'Email' : 'البريد الألكترني' }}
           </label>
         </div>
          <div class="form-floating mx-4 mb-2">
                   <input type="password" class="form-control " placeholder="Password" name="pass" v-model="pass" required> 
                   <label  placeholder="Password" class= "m-auto text-center"> 
                      {{ $store.state.language ? 'Password' : 'كلمة السر' }}
                    </label>
            </div>
    
            <div class="form-floating mx-4 p-0 mb-2 ">
             <button class="btn btn-outline  form-control text-center bt-0 pb-1 mt-3" value="submet" >
              {{ $store.state.language ? 'Submit' : ' إدخال' }}

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
                  
       </form>
    </div> 
 
  </div>
</template>

<script>
// @ is an alias   /src 

export default {
  
}
</script>
<style scope>
button{
  color: #fff !important;
  background-color: #270330 !important;
 
} 
  button:hover, button:active {
    color: #270330 !important;
    background-color: #fff !important;
    border: 1px solid #270330 !important;
  }
 a {
   color: #270330 !important;
   text-decoration: none !important;
 }
 a:hover{
  color: #440953 !important;
  border: 0;
 }
p{
  font-size: x-small;
}  
.form-floating>.form-control, .form-floating>.form-control-plaintext, .form-floating>.form-select {
    line-height: 0.25;
    border-bottom: inset;
}
.form-floating>.form-control, .form-floating>.form-select {
    height: calc(1.5rem + 13px) !important;
}
.form-floating>label {
    padding: 0.6rem 0.75rem !important;
}
.form-floating>.form-control {
     padding: 0 !important;
} 
.form-floating>.form-control:not(:placeholder-shown) {
    padding-top:0 !important
}
</style>

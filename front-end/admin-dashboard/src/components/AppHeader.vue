<template>
   
<nav class="navbar navbar-expand-lg navbar-dark shadow-sm sticky-top mb-5">
    <div class="container" style="height: 40px;">
        <a class="navbar-brand mr-5">
          <h3> Dashbord</h3>
          <i class="bi bi-sliders text-dark"></i>
        </a>
        <button class="navbar-toggler border-dark m-0" data-bs-toggle="offcanvas" data-bs-target="#sidenav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div  class="collapse navbar-collapse" :class="{' position-absolute top-0 end-0  rtl':!$store.state.language}" id="my-collapse">
            <ul  class="navbar-nav me-auto" style="align-items: center" >
                 
                <li class="nav-item m-4"><router-link to="/">
                  {{ $store.state.language ? 'Home' : '   الرئيسيه' }}
                </router-link></li>
                <li class="nav-item p-3"><router-link to="/LoginPage">
                  {{ $store.state.language ? 'login' : '    تسجيل الدخول' }}
               </router-link></li>
 
               
               <li class="nav-item dropdown ">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  
                 {{ $store.state.language ? 'lang' : ' اللغة  ' }}

                </a>
                <ul class="dropdown-menu">
            <li>
              <a type="button" class="dropdown-item text-center" @click=" $store.state.language=true">English</a>
          </li>
  
            <li><hr class="dropdown-divider m-0"></li>
            <li><a type="button" class="dropdown-item text-center" @click=" $store.state.language=false">عربي</a>
          </li>
                 </ul>
      
                </li>
           
              </ul>
        </div>

    </div>
</nav>
<div class="offcanvas offcanvas-start" id="sidenav">
    <div class="offcanvas-header bg-light ">
        <h3 class="offcanvas-title text-dark" >Dashbord</h3>
        <button class="btn-close" data-bs-dismiss="offcanvas"></button>
    </div>
    <div class="offcanvas-body">
        <div class="list-group list-group-flush">
            <router-link class="list-group-item list-group-item-action" to="/">
                 {{ $store.state.language ? 'Home' : '   الرئيسيه' }}
            </router-link>
            <router-link class="list-group-item list-group-item-action" to="/LoginPage">
                {{ $store.state.language ? 'login' : '    تسجيل الدخول' }}

            </router-link>
           
        </div>
    </div>
    
</div>
 
</template>
<script>
export default{

}
</script>
<style>
.rtl{
    direction: rtl;
}
.dropdown-item:hover, .dropdown-item:active {
    color:  #270330 !important;
    background-color:  #fff !important;
    border-radius: 100px;

    }
    .dropdown-menu { 
    --bs-dropdown-min-width:5px !important
   }
    h3{
    color: #0a2719 
    }
</style>
<template>
   
<nav class="navbar navbar-expand-lg navbar-dark bg-light shadow-sm sticky-top mb-5">
    <div class="container ">
        <a class="navbar-brand">
           Dashbord

        </a>
        <button class="navbar-toggler border-dark" data-bs-toggle="offcanvas" data-bs-target="#sidenav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div  class="collapse navbar-collapse" :class="{' position-absolute top-0 end-0  rtl':!$store.state.language}" id="my-collapse">
            <ul  class="navbar-nav me-auto" style="align-items: center" >
                 
                <li class="nav-item "><router-link to="/">
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
              <a  class="dropdown-item " @click=" $store.state.language=true">English</a>
          </li>
  
            <li><hr class="dropdown-divider"></li>
            <li><a  class="dropdown-item" @click=" $store.state.language=false">عربي</a>
          </li>
                 </ul>
      
                </li>
           
              </ul>
        </div>

    </div>
</nav>
<div class="offcanvas offcanvas-start" id="sidenav">
    <div class="offcanvas-header bg-light ">
        <h4 class="offcanvas-title text-dark">Dashbord</h4>
        <button class="btn-close" data-bs-dismiss="offcanvas"></button>
    </div>
    <div class="offcanvas-body">
        <div class="list-group list-group-flush">
            <a class="list-group-item list-group-item-action" to="/">
                 {{ $store.state.language ? 'Home' : '   الرئيسيه' }}
            </a>
            <a class="list-group-item list-group-item-action" to="/LoginPage">
                {{ $store.state.language ? 'login' : '    تسجيل الدخول' }}

            </a>
           
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
</style>
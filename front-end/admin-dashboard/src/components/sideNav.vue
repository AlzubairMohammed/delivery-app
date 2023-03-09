 <template>
    <section class="shadow-sm h-100 ms-1 position-absolute pt-5 top-50 start-0 translate-middle-y col-md-3 col-lg-2 ">
     
     <ul class="nav flex-column text-dark ms-1 pt-5">
       <li>
         <router-link to="/ProductsPage"  class="nav-link">
       <i class="bi bi-house"></i> 
       {{ $store.state.language ? ' products' : '  المنتجات  ' }} 
     </router-link>  </li>
   <li>
     <router-link to="" class="nav-link active"  href="#">
      {{ $store.state.language ? 'customer' : '  الزبائن  ' }} 
 </router-link>
   </li>
   <li class=" mb-5">
     <router-link to=""   class="nav-link" href="#">
      {{ $store.state.language ? 'profile' : 'الملف الشخصي' }} 
     </router-link>
   </li>
   <hr>
   <li>
     <router-link to="" class="nav-link" href="#">
       <i class="bi bi-sliders"></i>
       {{ $store.state.language ? ' setting' : 'الإعدادات ' }} 
     </router-link>
   </li>
   
 </ul> 
 </section> 
 </template>
 <script>
export default{

}
</script>
<style scoped>
li:hover ,li:active{
  color: #fff !important;
  background-color:#e7f9f0cc !important;
  border-radius: 20px;
  box-shadow: 10px;
}
</style>
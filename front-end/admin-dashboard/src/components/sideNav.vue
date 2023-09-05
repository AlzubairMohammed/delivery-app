 <template>
   
      <div>
<!--      
     <ul class="nav text-dark  pt-5">
       <li>
        
         <router-link to="/ChallengesPage"  class="nav-link">
          <i class="bi bi-house"></i> 
          {{ $store.state.language ? ' challenges' : '  التحديات  ' }} 
         </router-link>  </li>
       <li>
     <router-link to="" class="nav-link active"  href="#">
      {{ $store.state.language ? 'players' : '  اللاعبون  ' }} 
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
   
 </ul>  -->
</div> 
 </template>
 <script>
export default{

}
</script>
<style scoped>
li:hover ,li:active{
  color: #fff !important;
  background-color: var(--sec-color) !important;
  border-radius: 20px;
  box-shadow: 10px;
}
</style>
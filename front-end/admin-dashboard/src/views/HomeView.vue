<template> 
  <div class="row d-flex h-100 " :class="{rtl:!$store.state.language ,dark:$store.state.dark} ">
    <div class="img-thumbnail d-block m-auto test w-100 p-0"  style="center;background-size:cover; height: 50vh ;flex-direction: column;" alt=" ">
      <div class="cover h-100  d-flex align-items-center justify-content-center " style="flex-direction: column"> 
        <h2> test your self </h2>
        <small class="text-light pb-1">for web language</small>
        <router-link to="/ChallengesPage" class="btn w-25 text-larg shadow-sm mb-5 border d-block text-light">
            Let Start
         </router-link></div> 
    </div> 
  <div class="row m-4  justify-content-center col-12 ">
    <h3 :class="{'text-light':$store.state.dark}"> {{ $store.state.language ? ' top' : 'اعلى' }} <span> {{ $store.state.language ? 'players' : '  اللاعبون' }}</span></h3>
  <div class="col-7 col-sm-5 col-md-3 col-lg-2 shadow-sm m-2 m-lg-3 pt-3 d-flex align-items-center cart"  style="  border-radius:14px ; flex-direction: column;" :key="player" v-for="player in $store.state.players">
          
    <img :src="player.img" class="img-thumbnail d-block m-auto"  style="center;background-size:cover; border-radius:50%; width: 100px; height: 100px;" alt=" ">
     <h5 class="p-2">  {{player.name}} </h5> 
      <p>   {{ $store.state.language ? ' points' : '  النقاط' }} :   {{player.points}}    {{ $store.state.language ? ' point' : 'نقطة' }}</p>
      <p>   {{ $store.state.language ? ' times' : '  الزمن' }} :   {{player.times}} </p>
      <p>   {{ $store.state.language ? ' country' : '  الدوله' }} :   {{player.country}} </p>

    </div>
    <h4>  <router-link to="/PlayersPage" class=" mb-4 small" :class="{'text-light':$store.state.dark}">
         {{ $store.state.language ? 'more...' : 'المزيد...' }}  
         </router-link>
    </h4>
        </div>
        <div class="col-10 col-md-8 justify-content-center m-auto"  :class="{rtl:!$store.state.language} ">
    <h4 :class="{'text-light':$store.state.dark}"> {{ $store.state.language ? 'about' : '  عنا' }} <span> {{ $store.state.language ? 'us' : ' ' }}</span></h4>
    <p> {{ $store.state.language ? ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quasi assumenda   illum consectetur adipisci deleniti ad quidem dolore quod, mollitia amet.' : '  ' }}</p>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
 
  </div>
  <div class="row m-4  justify-content-center col-12 mt-4">
    <h3 :class="{'text-light':$store.state.dark}"> {{ $store.state.language ? 'the' : '' }} <span> {{ $store.state.language ? 'team' : 'الفريق' }}</span></h3>
  <div class="col-8 col-sm-5 col-md-4 col-lg-3 shadow-sm m-2 m-lg-3 pt-3 d-flex align-items-center cart"  style="  border-radius:14px ; flex-direction: column;" :key="team" v-for="team in $store.state.teams">
          
    <img :src="team.img" class="img-thumbnail d-block m-auto"  style="center;background-size:cover; border-radius:50%; width: 100px; height: 100px;" alt=" ">
     <h4 class="p-2" >  {{team.name}} </h4> 
      <p>     {{team.work}} </p>
      <p>from {{ team.country }}</p>
     
    </div> 
        </div>
   </div>

 </template>
 <script>
 export default {
   
 }
 </script>
 <style>
 .cart {
  height: 290px !important;
  border: #fff 1px solid;
 }
.btn{
  color: var(--main-color) !important;

}
img{
  background: url(../style/cover.jpg);
} 
.test{
background-image: url(../style/portfolio-webdesign.jpg);
}
.cover{
    font-size: 3rem;
    border-radius: 14px !important;
    background-color: #121210cc !important;

  }
  .cover h2 ,span {
    color:  rgb(245, 137, 5);

  }
</style>
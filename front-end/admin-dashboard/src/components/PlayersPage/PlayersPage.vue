<template>
    <div class="row m-4  justify-content-center mt-5 h-100">
       <div class="mb-5">
        <input type="search" class="form-control w-50 m-auto rounded" placeholder="Search with name" v-model="search">
  
       </div>
     <div class="col-7 col-sm-5 col-md-3 col-lg-2 shadow-sm m-2 m-lg-3 pt-3 d-flex align-items-center cart"  style="  border-radius:14px ; flex-direction: column;" :key="player" v-for="player in filteredStudents">
        
  <img :src="player.img" class="img-thumbnail d-block m-auto"  style="center;background-size:cover; border-radius:50%; width: 100px; height: 100px;" alt=" ">
   <h5 class="p-2">  {{player.name}} </h5> 
    <p>   {{ $store.state.language ? ' points' : '  النقاط' }} :   {{player.points}}    {{ $store.state.language ? ' point' : 'نقطة' }}</p>
    <p>   {{ $store.state.language ? ' times' : '  الزمن' }} :   {{player.times}} </p>
    <p>   {{ $store.state.language ? ' country' : '  الدوله' }} :   {{player.country}} </p>

  </div> 
      </div>
</template>
<script>
export default {
data(){
        return {
            search:"",
            students:["Osama","Moaid","Ayman","Mohamed","Timaa","Razaz","Somia","Wesal","Duha","Doaa","Maab","Afaf","Amani","Amna","Rahma","Salma","Aisha","Ethar","Danial","Almahi","Ayat"]
        }
    },
    computed:{
        filteredStudents(){
            return this.$store.state.players.filter((player)=>{
               if(player.name.toLowerCase().includes(this.search.toLowerCase()))
                   return true
            })

            
        }
    }
}
</script>
<template>

<section class="row justify-content-center align-items-center " style="height: 55vh;" >
         <div class="col-11 col-md-10 shadow-sm rounded-5 px-md-6 text-dark mb-4 mt-5 h-100 py-5"  > 
           <div class="row ">
              <div class="col-5 col-md-4  border-end border-0 border-warning border-sd-0 pt-3 ">
                <img src=" .img" class="img-thumbnail d-block m-auto"  style="center;background-size:cover; border-radius:50%; width: 100px; height: 100px;" alt=" ">
               <input class="form-control mt-4 w-75 mx-auto" type="text" :value=" name" :v-model="name">
           
          </div>
                   <div class="col-7 col-md-7 p-3  float-left d-flex justify-content-center align-content-center flex-wrap align-items-start" style=" flex-direction: column;" :class="{'align-items-end':!$store.state.language}">
          <p>   {{ $store.state.language ? ' points' : '  النقاط' }} :   500    {{ $store.state.language ? ' point' : 'نقطة' }}</p>
          <p>   {{ $store.state.language ? ' times' : '  الزمن' }} :   100 </p>
          <p>   {{ $store.state.language ? ' country' : '  الدوله' }} :   sudan </p>

                      </div>
                  
             </div>
        
     
        </div>

    </section>
</template>
<script>
export default {
    data(){
           return {
               name:'Doaa Osman'
           }
       },
    
}
</script>
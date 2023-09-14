<template >
    <div class="row d-flex p-3  justify-content-center align-content-cente  align-items-baseline" style="height: 90vh !important;"  :class="{rtl:!$store.state.language ,dark:$store.state.dark}">
       <div  class="row d-flex m-3  justify-content-center align-content-cente  align-items-baseline">
         <div class="col-10">
            <button class="btn shadow-sm w-50 m-1 mt-5 bg-light" data-bs-toggle="modal" data-bs-target="#myModal"  @click="HaddindBtn()">
                {{ $store.state.language ? 'choose a level' : '   اختار المستوى' }}
           </button>
           <div id="myModal" data-bs-backdrop="static" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                     <div>{{ $store.state.language ? 'choose a level' : '   اختار المستوى' }}
                    </div>
                    <div>    
                     <button class="btn-close" data-bs-dismiss="modal"></button>
                 </div>
                    </div>                      
                 
                    <div class="modal-body">
                        <div class="form-check form-check-inline">
                        <input type="radio" class="btn-check" name="gender" value="easy" id="in1">
                        <label class="btn in1" for="in1"> 
                            {{ $store.state.language ? ' easy ' : '    سهل  ' }}

                        </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input type="radio" class="btn-check" name="gender" value="median" id="in2">
                            <label class="btn in2 " for="in2"> 
                                {{ $store.state.language ? ' median ' : '    متوسط  ' }}

                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input type="radio" class="btn-check" name="gender" value="hard" id="in3">
                            <label class="btn in3" for="in3"> 
                                {{ $store.state.language ? ' hard ' : '    صعب  ' }}

                            </label>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
         </div>
       
        <!-- thetime -->
        <div class="col-2 form-check form-switch float-end mx-2" style="width: 7% !important;"  @click="Thetimes()">
        <input type="checkbox" class="form-check-input" id="time" v-model="times">
        <label class="form-check-label" for="time"> 
            {{ $store.state.language ? ' times ' : '   الزمن ' }}

        </label>
        </div>
 
 
       </div>
      <div class="row mt-4 teast" style="display: none;"  :key="Quation" v-for="(Quation) in $store.state.Quations" >
        <div class="w-100 m-4" >
            <h3 :class="{dark:$store.state.dark}">{{ Quation.Quation}}</h3>
            
        </div>
        <ul class="list-group col-10 col-md-8 h-100 d-flex justify-content-center flex-wrap  m-auto" :class="{dark:$store.state.dark}" style="flex-direction: row;"  v-if="$store.state.language ?  Quation.ansers=shuffle(Quation.ansers):  Quation.ansers=shuffle(Quation.ansers)">

     <transition-group  class="d-flex justify-content-center mt-4 flex-wrap" name="item"  style="flex-direction: row;">
     <li class="col-8 col-md-5  p-md-0 ms-2  mb-3 p-1 pb-md-2 border rounded btn shadow-sm" :class="{' text-light':$store.state.dark}" :key="anser" v-for="(anser) in Quation.ansers" >
        {{anser}} 
     </li>
      </transition-group>
     </ul>  
 
      </div>
  </div>
</template>

<script>
 export default{
        data(){
            return {
                 times: Date()
            }
        },
        methods:{
            shuffle(array) {
        let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
             [array[currentIndex], array[randomIndex]] =
             [  array[randomIndex], array[currentIndex]];
        }

        return array;
    },
   HaddindBtn(){
    setTimeout(function( ){
      document.querySelector(".btn").style.display ='none'
      document.querySelector(".form-check").style.display ='block'
      document.querySelector(".teast").style.display ='block' 

 
   },4000)},
   Thetimes(){
    setTimeout(function( ){
      document.querySelector(".teast").style.display ='none'
         
   },25000)}
  
} 
  
}
</script>
<style scoped>
 .w-50:hover{
    width: 75% !important;
    transition: all 2s;
 }
 .in1{
background-color:  rgb(255, 103, 1) !important;
 } 
 .in2{
    background-color: rgba(65, 41, 244, 0.88)!important;
 }
 .in3{
    background-color:  rgb(255, 103, 1) !important;

  }
  .modal .btn:hover{
    transform: scale3d(1.5, 1.5, 1.5);
    transition: all 1s;
    border: 1px snow solid;
  }

</style>
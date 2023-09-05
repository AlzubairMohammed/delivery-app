<template >
    <div class="row d-flex h-100 m-3  justify-content-center align-content-cente  align-items-baseline"  :class="{rtl:!$store.state.language} ">
       <div  class="row d-flex m-3  justify-content-center align-content-cente  align-items-baseline">
         <div class="col-10">
            <button class="btn shadow-sm w-50 m-1 mt-5" data-bs-toggle="modal" data-bs-target="#myModal"  @click="HaddindBtn()">choose a level</button>
        <div id="myModal" data-bs-backdrop="static" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    choose a level
                        <button class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="form-check form-check-inline">
                        <input type="radio" class="btn-check" name="gender" value="easy" id="in1">
                        <label class="btn btn-outline-primary" for="in1">easy</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input type="radio" class="btn-check" name="gender" value="median" id="in2">
                            <label class="btn btn-outline-primary" for="in2">median</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input type="radio" class="btn-check" name="gender" value="hard" id="in3">
                            <label class="btn btn-outline-primary" for="in3">hard</label>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
         </div>
        <!-- thetime -->
        <div class="col-2 form-check form-switch float-end mx-2" style="width: 7% !important; display: none"  @click="Thetimes()">
        <input type="checkbox" class="form-check-input" id="in1" v-model="times">
        <label class="form-check-label" for="in1">times</label>
        </div>
 
 
       </div>
      <div class="row mt-4 teast" style="display: none;">
        <div class="col-2 form-check form-switch float-end mx-2" style="width: 7% !important; display: none"  @click="Thetimes()">
        <input type="checkbox" class="form-check-input" id="in1" v-model="times">
        <label class="form-check-label" for="in1">times</label>
        </div>
 
        <div class="w-100 m-4">
            <h3>teast</h3>
            
        </div>
        <ul class="list-group col-10 col-md-8 h-100 d-flex justify-content-center flex-wrap  m-auto" style="flex-direction: row;"  v-if="$store.state.language ? students=shuffle(students) : students=shuffle(students)">

     <transition-group  class="d-flex justify-content-center mt-4 flex-wrap" name="item"  style="flex-direction: row;">
     <li class="col-8 col-md-5  p-md-0 ms-2  mb-3 p-1 pb-md-2 border rounded btn shadow-sm"  :key="student" v-for="(student,index) in students" >
     {{ index }}  {{student}} 
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
                students:["Ahmed","Ali","Salah","Omer"],
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
             [array[randomIndex], array[currentIndex]];
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
  .item-move{
            transition: all 1s ease;
        }
</style>
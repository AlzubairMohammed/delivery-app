<template>
        
          <div class="row d-flex h-100 m-3  justify-content-center align-content-center "  :class="{rtl:!$store.state.language} ">
             <!-- <table class="table table-hover table-bordered  table-sm d-none d-md-block ">
              <tr class="">
                <th>
                  {{ $store.state.language ? ' num' : '  الرقم' }}
               </th>
                <th> 
                    {{ $store.state.language ? ' name' : '   الاسم' }}
                </th>
                <th>
                  {{ $store.state.language ? ' picture' : '  الصورة ' }}
                </th>
                <th>
                  {{ $store.state.language ? ' price  ' : ' السعر  ' }}
                </th>
                <th> 
                  {{ $store.state.language ? 'quantity ' : '  الكميه  ' }}
                </th>
                <th> 
                  {{ $store.state.language ? 'status' : ' الحاله  ' }} </th>
                <th colspan="2">  </th>
               </tr>
               <tr :key="product" v-for="(product,index) in $store.state.products">
                <td>{{index+1}}</td>
                <td>{{product.name}}</td>
                <td>
                  <img :src="product.img" style="width:128px;height:96px">
                </td>
                <td>{{product.price}}</td>
                 <td>{{product.quantity}}</td>
                <td>{{product.state}}</td>
                <td>
                  <button class="btn px-3 py-1 ">{{ $store.state.language ? 'edit' : '  تعديل' }}
                  </button>
                </td>
                <td class="mx-1">
                  <button class="btn btn-close px-3 py-2 mx-2" @click="$store.state.products.splice(index,1)"></button>
                </td>
              </tr>
            </table>  -->
        <div class="col-7 col-sm-5 col-md-3 col-lg-2 shadow-sm m-2 m-lg-3 img-thumbnail p-0 h-100"  style="center;background-size:cover;   border-radius:14px" :key="card" v-for="card in $store.state.Cards">
           <div class="cover h-100 d-flex flex-wrap justify-content-center align-content-center" >
            
          <router-link to="/ChalengePage" class="text-dark" >  {{card.name}}</router-link>
  
           </div>
        </div>
          </div> 
     
  </template>
  
  <script>
  export default {
    name: 'challengesPage',
     
  }
  </script> 
  <style scoped> 
  h3 {
    margin: 40px 0 0;
  }  
  .table {
    overflow-y: hidden;
  }
  th {
      padding: 5px;
      border: none;
      margin-bottom: 10px;
      background-color: var(--main-color);
      color: #FFF;
      border-radius: 10px;
  
  } 
  .table tr:hover {
    background-color:var(--sec-color)
   
   
  }
  .row{
    height: 60vh !important;
  }
  .img-thumbnail{
    background-image: url(../../style/cover.jpg) !important;
    height: 40vh !important;  
    filter:  drop-shadow(2px 3px 4px rgb(91, 90, 90))
  }
  .img-thumbnail:hover{
    transform: translate3d(5px, -20px, 5px) !important;
   
  }
  .cover{
    font-size: 3rem;
    border-radius: 14px !important;
    background-color: #121210cc !important;

  }
  .cover:hover{
    transform:  rotate3d(0, 0, 0, 359deg);
    background-color: #FFF !important;
  }
  </style>
  
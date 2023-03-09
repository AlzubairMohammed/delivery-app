<template>
    <div class="row">
      
        <div class="modal-body col-sm-3 mx-auto" :class="{rtl:!$store.state.language} ">
            <table class="table table-hover table-bordered mx-5">
              <tr class=" m-2">
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
              <tr>
              </tr>
            </table>
          </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'tableProtact',
     
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  } 
  a {
    color:  #0a2719;
  }
  .table {
    overflow-y: hidden;
  }
  th {
      padding: 10px;
      border: none;
      margin-bottom: 10px;
      background-color: #0a2719;
      color: #FFF;
      border-radius: 10px;
  
  } 
  .table tr:hover {
    background-color:#e7f9f0cc;
   
   
  }
  
  
  </style>
  
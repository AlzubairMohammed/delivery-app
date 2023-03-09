<template>
  <div class="home">
 <div class="col-4 col-md-6 col-lg-8 mx-auto mt-5 text-center">
 <products-table />
 </div>
 </div>
</template>

<script>
import ProductsTable from '@/components/ProductsPage/ProductsTable.vue'
 // @ is an alias to /src 
  
 export default {
  components: {
    ProductsTable

  }
}
 </script>

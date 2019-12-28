<template>
  <div class="cpt_b" id="cpt_b">
    <h4> B 的内容</h4>
    <h4> --------------------- router ---------------------</h4>
    <h4>$route.params.id：{{$route.params.id}}</h4> 
    <h4>$route.path：{{$route.path}}</h4> 
    <h4>$route.query： {{$route.query}}</h4>
    <h4> --------------------- vuex ---------------------</h4>
    <h4>vuex.num： {{num}} </h4>
  </div>
</template>

<script>
  export default {
    computed:{
      num: function () { 
        return this.$store.state.num;
      }
    },
    mounted:function () {  
      // setTimeout(() => {
      //   console.log(1);
      // }, 1000);
      
    }
  }
</script>